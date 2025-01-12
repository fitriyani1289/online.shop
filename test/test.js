// tests/tes.js
const assert = require('assert');
const { tambah } = require('../src/kode');

describe('Fungsi tambah', function() {
  it('should return 3 when 1 and 2 are added', function() {
    assert.strictEqual(tambah(1, 2), 3);
  });

  it('should return -1 when -1 and 0 are added', function() {
    assert.strictEqual(tambah(-1, 0), -1);
  });
});
