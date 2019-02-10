const bnm = require('./index')({
  // Options can be passed here:
  red: 'black'
});

(async function start() {

  let foo = bnm({
    green: 'purple'
  }).run();

//   console.log('before');
//
//   const options = {
//     bar: 'bar'
//   };
//
//   try {
//
//     let result = await bnm(options);
//
//     console.log(result);
//
//   } catch(err) {
//
//     console.log(err);
//
//   }
//
//   console.log('after');

})();
