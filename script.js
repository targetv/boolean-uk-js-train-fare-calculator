// const distanceTravel = Number(prompt("How far are you traveling in KM?"));
// const personAge = Number(prompt("How old are you un years?"));

// function fairPrice(age, distance) {
//   let standardPrice = 0.21;
//   if (age < 18) {
//     return (standardPrice / 0.2) * distance;
//   } else if (age >= 65) {
//     return (standardPrice / 0.4) * distance;
//   } else {
//     return standardPrice * distance;
//   }
// }

// let price = fairPrice(personAge, distanceTravel);

// let postPrice = alert(price);

// let standardPrice = 0.21;

// let juniorPrice = (standardPrice / 0.2) * distanceTravel;
// let seniorPrice = (standardPrice / 0.4) * distanceTravel;
// let price = standardPrice * distanceTravel;

// if (personAge < 18) {
//   alert("£" + juniorPrice.toFixed(2));
// } else if ((personAge) => 65) {
//   alert("£" + seniorPrice.toFixed(2));
// } else {
//   alert("£" + price.toFixed(2));
// }

//Currently Working on code below

let stations = {
  victoria: 0,
  liverpool: 21,
  york: 32,
  newcastle: 75,
  edinburgh: 89,
};

let standardPrice = 0.21;
let juniorPrice = standardPrice / 0.2;
let seniorPrice = standardPrice / 0.4;

const personAge = Number(prompt("How old are you un years?"));
const destination = prompt(
  "What is your final station?  Newcastle, York, Liverpool, Edinburgh ".toLowerCase()
);

if (personAge < 18 && destination === "newcastle") {
  alert("£" + juniorPrice * stations["newcastle"].toFixed());
} else if ((personAge) => 65 && destination === "newcastle") {
  alert("£" + seniorPrice * stations["newcastle"].toFixed());
} else {
  alert("£" + standardPrice * stations["newcastle"].toFixed());
}
