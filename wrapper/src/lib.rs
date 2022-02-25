use wasm_bindgen::prelude::*;
use gstd::prelude::*;
use scale_info::TypeInfo;
use codec::{Decode, Encode};

#[derive(TypeInfo, Decode, Encode)]
pub struct MessageIn {
    pub author: String,
    pub msg: String,
}

#[wasm_bindgen]
pub fn add_message(author: String, msg: String) -> Vec<u8> {
    let mut v: Vec<u8> = Vec::new();
    v.push(0);
    let mut m = MessageIn { author, msg }.encode();
    v.append(&mut m);
    v
}

#[wasm_bindgen]
pub fn view_messages() -> Vec<u8> {
    let mut v: Vec<u8> = Vec::new();
    v.push(1);
    v
}