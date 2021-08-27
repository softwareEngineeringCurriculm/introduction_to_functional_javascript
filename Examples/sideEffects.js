let xArr = [1,2,3]

const multiplyX = (xArr, multiplier) => {
  const copyArr = [...xArr];
  for(let i = 0; i < copyArr.length; i += 1) {
    copyArr[i] = copyArr[i] * multiplier;
  }
  return copyArr;
}
console.log("Original: ", xArr);

console.log(multiplyX(xArr, 2));

console.log("DOES THIS CHANGE?", xArr);


// multiplyX(2);
// console.log(x);