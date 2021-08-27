const userName = {
  firstName: "Erik",
  lastName: "Chiu",
  password: "",
  handler: "yay",
  getPassword: (inputPassword) => {
    this.password = inputPassword
  }
}
const add = (x,y) => x + y;

const arrayFunc = [hello, add, subtract];

const getPassword = (passwordInput) => {
  return passwordInput
}

const name = () => 'Erik';

const hello = (func) => {
  func();
  return () => {
    return name();
  }
}

hello(name);