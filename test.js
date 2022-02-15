const { u8aToHex } = require('@polkadot/util');
const rust = import('./pkg/bindgen_guestbook.js');
const { strict } = require('assert');

rust.then((m) => {
  strict.strictEqual(
    u8aToHex(m.add_message('author', 'message')),
    '0x0018617574686f721c6d657373616765',
    'add_message result is wrong',
  );
  console.log('add_message ✅');
  strict.strictEqual(u8aToHex(m.view_message()), '0x01', 'view_messages result is wrong');
  console.log('view_message ✅');
});
