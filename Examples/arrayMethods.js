const numbers = [1, 2, 3];

// const colors = ["blue", "pink", "grey", "purple", "red", "green"];
//
// // for(let i = 0; i < numbers.length; i+=1) {
// //   console.log(numbers[i]);
// // }
//
// const divideByTwo = x => x / 2;
//
// const evenNumbers = numbers.filter(x => x % 2 !== 0);
//
// // console.log(evenNumbers);
//
// const fourLetterWords = colors.filter(word => word.length === 6);
//
// console.log(fourLetterWords);

// const total = numbers.reduce((sum, currentValue) => {
//   sum = sum + currentValue;
//   return sum;
// }, -1000);
//
// console.log(total);

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }