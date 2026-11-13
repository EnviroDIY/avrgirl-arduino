var test = require('tape');
var boards = require('../boards');

test('[ BOARDS ] EnviroDIY Mayfly configuration', function(t) {
  t.plan(9);

  var mayfly = boards.mayfly;

  t.equal(mayfly.baud, 57600, 'uses the Mayfly bootloader baud rate');
  t.equal(mayfly.signature.toString('hex'), '1e9705', 'uses the ATmega1284P signature');
  t.equal(mayfly.pageSize, 256, 'uses the ATmega1284P flash page size');
  t.equal(mayfly.numPages, 512, 'uses the ATmega1284P flash page count');
  t.equal(mayfly.protocol, 'stk500v1', 'uses the Arduino bootloader protocol');
  t.equal(boards['envirodiy-mayfly'], mayfly, 'supports the descriptive board alias');
  t.equal(boards.envirodiy_mayfly, mayfly, 'supports the Arduino package board ID');
  t.equal(boards.mayfly2, mayfly, 'supports the Mayfly v2 board name');
  t.equal(boards.envirodiy_mayfly2, mayfly, 'supports the Mayfly v2 package board ID');
});
