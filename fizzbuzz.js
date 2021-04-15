for(let i = 1; i <= 100; i++) {
  let msg = ''
  if(i % 3 === 0) {
    msg += 'FIZZ'
  }
  if(i % 5 === 0) {
    msg += 'BUZZ'
  }
  console.log(msg || i)
}


// for(let i = 1; i <= 100; i++) {
//   if(i % 3 === 0 && i % 5 === 0) {
//     console.log('FIZZBUZZ')
//   } else if(i % 3 === 0) {
//     console.log('FIZZ')
//   } else if(i % 5 === 0){
//     console.log('BUZZ')
//   } else {
//     console.log(i)
//   }
// }