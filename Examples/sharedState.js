let temperature = 70;

const increaseTempByFive = temp => temp + 5;

const decreaseTempByTwo = temp => temp - 2;

temperature = increaseTempByFive(temperature);

console.log("First Call", temperature);

setTimeout((temperature) => {
  temperature = increaseTempByFive(temperature);
  console.log(temperature);
}, 2000);

setTimeout(() => {
  temperature = decreaseTempByTwo(temperature);
  console.log(temperature);
}, 1000);


console.log(temperature);
