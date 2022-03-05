const { hexToU8a } = require('@polkadot/util');
import { Wrapper } from './pkg';
const rust = import('./pkg/wrapper.js');

const main = async () => {
  const m = await rust;

  const wrapper = new Wrapper(
    'ws://127.0.0.1:9944',
    '0xa53b7bebc64080017d7f0ebcda60d121c275f4bab4ea6483fb77ea52f8ad31f0',
  );
  console.log(await wrapper.decode_view_messages(hexToU8a('0x0418617574686f721c6d657373616765')));
  // const transaction = await sendMessage.add_message('author', 'message', 500_000_000, 0);
  // transaction.signAndSend(await GearKeyring.fromSuri('//Alice'), (events) => {
  //   console.log(events.toHuman());
  // });
};
main();
