'use strict';

module.exports = function(game, opts) {
  return new BlockData(game, opts);
};

function BlockData(game, opts) {
  /*jshint unused:false */
  this.game = game;
}

// Get the blockdataMap for the chunk at given world coordinates
// Returns undefined if the chunk doesn't exist
// Initializes blockdataMap to {} if it doesn't exist (but the chunk does)
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
  // TODO: should we translate global world coords to local chunk coords?
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
