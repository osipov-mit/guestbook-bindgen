clean:
	node clean.js

build:
	cargo +nightly build --target wasm32-unknown-unknown --release

bindgen:
	wasm-bindgen target/wasm32-unknown-unknown/release/bindgen_guestbook.wasm --out-dir ./pkg/ --target nodejs

install: 
	yarn install

test: 
	yarn test

all: clean build bindgen install

