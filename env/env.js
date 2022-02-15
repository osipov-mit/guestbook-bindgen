const memory = new WebAssembly.Memory({ initial: 256 });

module.exports = {
  abortStackOverflow: () => {
    throw new Error('overflow');
  },
  table: new WebAssembly.Table({
    initial: 0,
    maximum: 0,
    element: 'anyfunc',
  }),
  tableBase: 0,
  memory: memory,
  memoryBase: 1024,
  STACKTOP: 0,
  STACK_MAX: memory.buffer.byteLength,
  alloc: (pages) => {
    return memory.grow(pages);
  },
  free: (_pages) => {},
  gr_debug: (msg) => {
    showDebug && console.log('GR_DEBUG: ', msg);
  },
  gr_exit_code: () => {},
  gr_msg_id: () => {},
  gr_reply: () => {},
  gr_read: (at, len, dest) => {
    new Uint8Array(memory.buffer).set(inputValue.slice(at, len), dest);
  },
  gr_reply_commit: () => {},
  gr_reply_push: () => {},
  gr_reply_to: () => {},
  gr_send: () => {},
  gr_send_commit: () => {},
  gr_send_init: () => {},
  gr_send_push: () => {},
  gr_size: () => {
    return inputValue.byteLength;
  },
  gr_source: () => {},
  gr_value: () => {},
  gr_block_height: () => {},
  gr_block_timestamp: () => {},
  gr_gas_available: () => {},
  gr_wait: () => {},
  gr_wake: () => {},
  gr_program_id: () => {},
};
