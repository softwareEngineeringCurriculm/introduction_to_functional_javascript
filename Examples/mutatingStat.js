const userNames = {
  user1: {
    firstName: "Tristan",
    LastName: "H",
    handler: "th"
  },
  user2: {
    firstName: "Sherry",
    lastName: "C",
    handler: "sherry"
  },
  user3: {
    firstName: "Alan",
    lastName: "Federiksen",
    handler: "amazingFed",
    followers: [
      {follower1: "th"},
      {follower2: "sherry"}
    ]
  }
}

// userNames = "I'm an ADMIN GIVE ME POWER";

console.log(userNames);


// const copy1 = {...userNames};
// const copy2 = Object.assign(userNames);
// console.log("Copy 1", copy1);
// console.log("Copy 2", copy2);



// console.log("Original", userNames);
//
// Object.freeze(userNames);
//
// userNames.user1 = "Jimmy Neutron";
//
// userNames.user3.followers = "I'M NEW!";
//
// console.log("After", userNames);