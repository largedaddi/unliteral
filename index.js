var Transform = require('stream').Transform;
if (!Transform) {
  Transform = require('readable-stream/transform');
}
var inherits = require('util').inherits;

function Unliteral (options) {
  Transform.call(this, options);
}

inherits(Unliteral, Transform);

Unliteral.prototype.convert = function (chunk) {
  if (Buffer.isBuffer(chunk)) {
    chunk = chunk.toString();
  }

  return chunk.replace(/@/g, ""); 
};

Unliteral.prototype._transform = function (chunk, outputFn, callback) {
  var jsonString = this.convert(chunk);
  outputFn(jsonString);
  callback();
};

module.exports = function (options) {
  var u = new Unliteral(options);
  return u;
};
