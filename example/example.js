var fs = require('fs');
var util = require('util');
var unliteral = require('../');

var u = unliteral();

// From string
var obj = JSON.parse(u.convert('@{@"reportData": @{@"time": @"2013-02-13T13:35:03Z", @"platformTypeName": @"ios", @"platformId": @"355031041184769", @"reports": @[@{@"data": @{@"pushToken": @"sda9f8asd980as9df0sd88f9asd8f0ads0f890sdf809s8d0f"}, @"type": @"pushRegister", @"time": @"2013-02-13T13:34:53Z"}]}}'));
console.log('obj: ' + util.inspect(obj, false, 10) + '\n');

// From file
fs.createReadStream('example/literals.txt').pipe(u).pipe(process.stdout);
u.on('finish', function () {
  console.log('\n');
});
