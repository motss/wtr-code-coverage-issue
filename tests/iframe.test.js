import { assert } from '@esm-bundle/chai';

it('test', async () => {
  const f = document.createElement('iframe');

  f.name = f.title = 'test';
  f.src = '/iframe.html';

  const messageTask = new Promise((y) => {
    function onMessage(ev) {
      console.debug('message', ev);
      y(ev.data);
      window.removeEventListener('message', onMessage);
    };

    window.addEventListener('message', onMessage);
  });
  const frameTask = new Promise(y => f.onload = y);
  
  [f].forEach(n => document.body.appendChild(n));
  
  await frameTask;
  const result = await messageTask;

  assert.strictEqual(
    result,
    'iframe test'
  );
});