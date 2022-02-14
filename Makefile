clean:
	node clean.js

build:
	cargo +nightly build --release --target wasm32-unknown-unknown

bindgen:
	wasm-bindgen target/wasm32-unknown-unknown/release/guestbook.wasm --out-dir ./pkg/ --target nodejs