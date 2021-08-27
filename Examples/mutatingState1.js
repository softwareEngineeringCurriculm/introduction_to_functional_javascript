const nums = [1, 2, 3, 4, 5,];


const multiplyByTwo = function(array) {
  const newArr = [...nums];
  for (let i = 0; i < array.length; i++) {
     newArr[i] = newArr[i]* 2;
  }
  return newArr;
}

console.log(multiplyByTwo(nums));
console.log(nums);