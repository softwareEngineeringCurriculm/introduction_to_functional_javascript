class Person {
  constructor(firstName, lastName, phoneNumber, city) {
    this.firstName = "EMPTY_FIRST_NAME";
    this.lastName = "EMPTY_LAST_NAME";
    this.phoneNumber = -99999999;
  }

  getName (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
}

const erik = new Person();

erik.getName("Erik", "Chiu");
erik.getPhoneNumber(5124472390);

console.log(erik);