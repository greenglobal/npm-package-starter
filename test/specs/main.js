/**
 * Test specs
 * @ndaidong
 */

var test = require('tape');

var main = require('../../index');

test('Check the interface', (assert) => {
  assert.ok(main.version, 'The property "version" must be existed');
  assert.ok(main.getStorageSize, 'The method "getStorageSize" must be existed');
  assert.end();
});

test('Check the expected values', (assert) => {

  let expectedVersion = require('../../package.json').version;
  let expectedStorage = 1e6;
  let actualStorage = main.getStorageSize();

  assert.deepEquals(main.version, expectedVersion, `The value of "version" must be ${expectedVersion}`);
  assert.deepEquals(actualStorage, expectedStorage, `The value of "STORAGE_SIZE" must be ${expectedStorage}`);

  assert.end();
});
