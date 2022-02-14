### Build project

`cargo +nightly build --release --target wasm32-unknown-unknown`

### Generate using wasm-bindgen

`wasm-bindgen target/wasm32-unknown-unknown/release/guestbook.wasm --out-dir ./pkg/ --target nodejs`
