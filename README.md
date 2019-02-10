# Basic Node module

Just experimenting with ECMAScript 2018 async/await class-based Node.js module.

## Installation

```bash
$ bash <(curl -sL https://git.io/vXzDy)
```

## Usage

After Installation, you can run this code like so:

```bash
$ npm i
$ node test.js
before
Hello world!
after
```

Feel free to wipe everything in [`index.js`](index.js) and start fresh … I just wanted an example to work with for when I start new modules.

## Notes

I wanted to have the option of passing params via `require` and method invocation:

```js
const bnm = require('./index')({
  // Options can be passed here:
  red: 'black',
  green: 'purple',
});

// ...

let result = await bnm({
  orange: 'blue',
}).run();
```

Alternatively:

```js
const bnm = require('./index')({
  // Options can be passed here:
  red: 'black',
  green: 'purple',
})();

// ...

let result = await bnm.run();
```

This was just an experiment, and I am guessing there may be a better way. Like I said before, this code is experimental.

## License

Copyright © 2019 [Michael Hulse](http://mky.io).

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<img src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png">
