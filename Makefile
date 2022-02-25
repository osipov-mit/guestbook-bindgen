clean:
	node clean.js

build:
	cargo +nightly build --target wasm32-unknown-unknown --release

bindgen:
	wasm-bindgen target/wasm32-unknown-unknown/release/wrapper.wasm --out-dir ./pkg/ --target nodejs

wasm-proc:
	wasm-proc -p target/wasm32-unknown-unknown/release/bindgen_guestbook.wasm && mv target/wasm32-unknown-unknown/release/bindgen_guestbook.*.wasm .

install: 
	yarn install

test: 
	yarn test

all: clean build bindgen wasm-proc install

