const { GearKeyring } = require('@gear-js/api');
const { u8aToHex, hexToU8a } = require('@polkadot/util');
const { strictEqual, deepEqual } = require('assert');
const SendMessage = require('./pkg');
const rust = import('./pkg/wrapper.js');

/**
 *
 * @param {Function} func
 */
function getFunctionParams(func) {
  const stringFunc = func.toString();
  const startI = stringFunc.indexOf('(') + 1;
  const endI = stringFunc.indexOf(')');
  const sliced = stringFunc.slice(startI, endI);
  return sliced.length > 0 ? sliced.split(',').map((value) => value.trim()) : null;
}

function getFunctionsNames(module) {
  return Object.keys(module).filter((key) => !['default', '__wasm'].includes(key));
}

const main = async () => {
  const m = await rust;
  // deepEqual(getFunctionsNames(m), ['add_message', 'view_messages'], 'get functions names ❌');
  // console.log('get functions names ✅');

  // deepEqual(getFunctionParams(m.add_message), ['author', 'msg'], 'get add_message params ❌');
  // deepEqual(getFunctionParams(m.view_messages), null, 'get view_messages params ❌');
  // console.log('get function params ✅');

  // strictEqual(u8aToHex(m.add_message('author', 'message')), '0x0018617574686f721c6d657373616765', 'add_message ❌');
  // console.log('add_message ✅');

  // strictEqual(u8aToHex(m.view_messages()), '0x01', 'view_messages ❌');
  // console.log('view_message ✅');

  const sendMessage = new SendMessage(undefined, '0xa53b7bebc64080017d7f0ebcda60d121c275f4bab4ea6483fb77ea52f8ad31f0');
  console.log(await sendMessage.decode_view_messages(hexToU8a('0x0418617574686f721c6d657373616765')));
  // const transaction = await sendMessage.add_message('author', 'message', 500_000_000, 0);
  // transaction.signAndSend(await GearKeyring.fromSuri('//Alice'), (events) => {
  //   console.log(events.toHuman());
  // });
};
main();
