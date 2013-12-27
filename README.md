# voxel-blockdata

Store arbitrary per-block data in chunks

Useful for types of blocks requiring additional information beyond the block ID.
Extends the voxel chunk format adding a 'blockdata' structure, mapping coordinates
to a data object.

Used by:

* [voxel-chest](https://github.com/deathcap/voxel-chest)

## Usage

Load with [voxel-plugins](https://github.com/deathcap/voxel-plugins), then:

    var blockdata = game.plugins.get('voxel-blockdata');

Saving data (the data object should be JSON serializable):

    blockdata.set(x, y, z, {foo: 'bar'});

Retrieving data:

    var bd = blockdata.get(x, y, z);

## License

MIT

