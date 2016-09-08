# mouse-hash

> Generate a hash by moving your mouse *(macOS and Windows)*


## Install

```
$ npm install --save mouse-hash
```


## Usage

```js
const mouseHash = require('mouse-hash');

mouseHash().then(hash => {
	console.log(hash);
	//=> 3bac6a60a8e9d1fe5ad5457562bb16d6226f952f01f3
});
```


## API

### mouseHash([options])

Returns a promise that resolves to the generated hash in `sha512`.

#### options

##### length

Type: `number`<br>
Default: `500`

Length of the array of mouse coordinates.


## CLI

```
$ npm install --global mouse-hash
```

```
$ mouse-hash --help

  Usage
    $ mouse-hash

  Options
    --length  250. [Default: 500]
```


## License

MIT © [Kevin Martensson](http://github.com)
