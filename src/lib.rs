#![no_std]

use codec::{Decode, Encode};
use gstd::{msg, prelude::*};
use scale_info::TypeInfo;
use wasm_bindgen::prelude::*;

#[derive(TypeInfo, Decode, Encode)]
pub struct MessageIn {
    author: String,
    msg: String,
}

static mut MESSAGES: Vec<MessageIn> = Vec::new();

#[no_mangle]
pub unsafe extern "C" fn handle() {
    let input: Vec<u8> = msg::load().unwrap();
    match input.first().unwrap() {
        &0 => {
            let v: Vec<u8> = input[1..].to_vec();
            let message = MessageIn::decode(&mut v.as_slice()).unwrap();
            MESSAGES.push(message);
        }
        &1 => {
            msg::reply(&MESSAGES, 0, 0);
        }
        _ => {}
    }
}

#[no_mangle]
pub unsafe extern "C" fn init() {}

#[wasm_bindgen]
pub enum Functions {
    AddMessage = 0,
    ViewMessages = 1,
}

#[wasm_bindgen]
pub fn handle_encode(func: Functions, author: String, msg: String) -> Vec<u8> {
    let mut v: Vec<u8> = Vec::new();
    match func {
        Functions::AddMessage => {
            v.push(0);
            let mut m = MessageIn { author, msg }.encode();
            v.append(&mut m);
        }
        Functions::ViewMessages => {
            v.push(1);
        }
    };
    v
}
