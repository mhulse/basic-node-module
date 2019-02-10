const bnm = require('./index')({
  // Options can be passed here:
  red: 'black',
  green: 'purple',
});

(async function start() {

  console.log('before');

  try {

    let result = await bnm({
      // orange: 'blue',
    }).run();

    console.log(result);

  } catch(err) {

    console.dir(err);

  }

  console.log('after');

})();
