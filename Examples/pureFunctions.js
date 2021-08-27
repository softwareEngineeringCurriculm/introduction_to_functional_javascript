// Pure Functions
/*
* Same Input => Same Output
* Consistent results
*
 */

const add = (x,y) => x + y;

add(2,2) // => 4

const subtract = (x,y) => x - y;




// Impure Functions:
let x = 24;

const impureAdd = y => x += y;

// console.log(impureAdd(2));

// const impureDouble = x => {
//   console.log('doubling ', x);
//   return x * 2;
// }
