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

const age = Number(prompt("What is your age?"));
const station = prompt(
  "What is your final station? Betweem York, Liverpool, London"
).toLowerCase;
const standardPrice = 0.21;

let stations = {
  york: 2,
  liverpool: 7,
  london: 9,
};

if (age < 18) {
  if (station === "york") {
    alert("£" + (standardPrice / 0.2) * stations["york"]);
  } else if (station === "liverpool") {
    alert("£" + (standardPrice / 0.2) * stations["liverpool"]);
  } else {
    alert("£" + (standardPrice / 0.2) * stations["london"]);
  }
} else if (age > 65) {
  if (station === "york") {
    alert("£" + (standardPrice / 0.4) * stations["york"]);
  } else if (station === "liverpool") {
    alert("£" + (standardPrice / 0.4) * stations["liverpool"]);
  } else {
    alert("£" + (standardPrice / 0.4) * stations["london"]);
  }
} else {
  if (station === "york") {
    alert("£" + standardPrice * stations["york"]);
  } else if (station === "liverpool") {
    alert("£" + standardPrice * stations["liverpool"]);
  } else {
    alert("£" + standardPrice * stations["london"]);
  }
}
