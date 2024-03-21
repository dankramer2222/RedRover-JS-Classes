// Part 6 - JS Conditional Statements
//if statement
let weather = "raining";
// if (weather === "raining") {
//   console.log("Take an umbrella");
// }
//else
weather = "sunny";
// if (weather === "raining") {
//   console.log("Take an umbrella");
// } else {
//   console.log("it is not raining anymore");
// }

// else if
weather = "cloudy";
weather = "bananas";
// if (weather === "raining") {
//   console.log("Take an umbrella");
// } else if (weather === "cloudy") {
//   console.log("Take a jacket");
// } else {
//   console.log("weather is not okay,just stay home and play some games");
// }

//switch

weather = 'sunny'

switch (weather) {
  case "raining":
    console.log("It's raining, take an umbrella");
    break;

  case "cloudy":
    console.log("Take a jacket");
    break;

  case "sunny":
    console.log("Take sunglasses");
    break;

  default:
    console.log("Unknown weather condition");
}
