const path = require('path');
const fs = require('fs-extra'); // Using `fs-extra` we can utilize `async` and `await`.

const BasicNodeModule = (function() {

  const html = (__dirname + '/temp.html');
  const defaults = {
    red: 'red',
    green: 'green',
    orange: 'orange',
  };

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
  class BasicNodeModule {

    // Singleton pattern:
    constructor(options = {}) {

      if ( ! BasicNodeModule.instance) {

        BasicNodeModule.instance = this;

      }

      // Save initial options:
      this.options = options;

      return BasicNodeModule.instance;

    }

    static init(options = {}) {

      const instance = new BasicNodeModule();

      // Create a new shallow copy using Object Spread Params (last one in wins):
      instance.options = {
        ...defaults,
        ...instance.options,
        ...options,
      };

      return instance;

    }

    async run() {

      // console.log('options:', this.options);

      if (this.options.orange == 'orange') {

        // Instead of using `writeFile().then()`, use await:
        await fs.writeFile(html, 'Hello world!', 'utf8');

        let result = await fs.readFile(html, 'utf8');

        await fs.unlink(html);

        // Resolve this async function with the result:
        return result;

      } else {

        throw new Error(`Orange isn’t orange, it’s ${this.options.orange}!`);

      }

    }

  }

  return BasicNodeModule;

}());

// These options come from `require()({ … options … })` syntax:
module.exports = (options = {}) => {

  // If passed, instanciate class and pass options:
  if (Object.entries(options).length) {

    new BasicNodeModule(options);

  }

  // Return the `init` method:
  return BasicNodeModule.init

};
