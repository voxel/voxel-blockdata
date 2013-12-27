module.exports = function(game, opts) {
  return new BlockData(game, opts);
};

function BlockData(game, opts) {
  this.game = game;
}

BlockData.prototype.getForChunk = function(x, y, z) {
  var chunkIndex = this.game.voxels.chunkAtCoordinates(x, y, z).join('|');
  var chunk = this.game.voxels.chunks[chunkIndex];

  if (!chunk)
    return undefined;
  
  if (chunk.blockdata === undefined)
    chunk.blockdata = {};

  return chunk.blockdata;
};

BlockData.prototype.coordsToKey = function(x, y, z) {
  return [x, y, z].join(',');
};

BlockData.prototype.get = function(x, y, z) {
  var blockdataMap = this.getForChunk(x, y, z);

  if (blockdataMap === undefined)
    return undefined;

  return blockdataMap[this.coordsToKey(x, y, z)];
};

BlockData.prototype.set = function(x, y, z, data) {
  var blockdataMap = this.getForChunk(x, y, z);

  if (blockdataMap === undefined)
    return undefined;

  blockdataMap[this.coordsToKey(x, y, z)] = data;
};
