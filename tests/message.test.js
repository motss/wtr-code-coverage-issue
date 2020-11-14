import { assert } from '@esm-bundle/chai';

import { message } from '../src/message';

it('returns message', async () => {
  assert.strictEqual(message('test'), 'test');
});

it('returns default message', async () => {
  assert.strictEqual(message(), 'iframe test');
});