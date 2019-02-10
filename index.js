const path = require('path');
const fs = require('fs');

const html = (__dirname + '/temp.html');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class BasicNodeModule {

  constructor(options = {}) {

    this.defaults = {
      red: 'red',
      green: 'green'
    };

    if ( ! BasicNodeModule.instance) {

      BasicNodeModule.instance = this;

    }

    this.defaults = {
      ...this.defaults,
      ...options
    };

    return BasicNodeModule.instance;

  }

  static of(options) {

    const basicNodeModule = new BasicNodeModule();

    basicNodeModule.defaults = {
      ...basicNodeModule.defaults,
      ...options
    };

    console.log(basicNodeModule.defaults)

    return basicNodeModule;

  }

  async run() {

    //console.log('ddd', this.options);

    // console.log(options);
    //
    // if (options.foo && options.bar) {
    //
    //   await fs.writeFile(html, 'Hello world!', 'utf8');
    //
    //   let result = await fs.readFile(html, 'utf8');
    //
    //   await fs.unlink(html);
    //
    //   return result;
    //
    // } else {
    //
    //   throw new Error('missing foo AND bar');
    //
    // }

  }

}

// These options come from `require()({ … options … })` syntax:
module.exports = (options = {}) => {

  if (Object.entries(options).length) {

    new BasicNodeModule(options);

  }

  return BasicNodeModule.of

};
