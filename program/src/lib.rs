#![no_std]

use codec::{Decode, Encode};
use gstd::{msg, prelude::*};
use scale_info::TypeInfo;

static mut STATE: Vec<MessageIn> = Vec::new();

#[derive(TypeInfo, Decode, Encode)]
pub struct MessageIn {
    pub author: String,
    pub msg: String,
}

#[no_mangle]
pub unsafe extern "C" fn handle() {
    let input: Vec<u8> = msg::load().unwrap();
    match input.first().unwrap() {
        &0 => {
            let v: Vec<u8> = input[1..].to_vec();
            STATE.push(MessageIn::decode(&mut v.as_slice()).unwrap())
        }
        &1 => {
            msg::reply(&STATE, 0);
        }
        _ => {}
    }
}

#[no_mangle]
pub unsafe extern "C" fn init() {}

