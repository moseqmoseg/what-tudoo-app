const activityBox = document.getElementById("activityBox");
const button = document.getElementById(`button`)
const colors = [
  "var(--light-pink)",
  "var(--deep-champagne)",
  "var(--lemon-yellow-crayola)",
  "var( --tea-green)",
  "var( --electric-blue)",
  "var(--baby-blue-eyes)",
  "var(--maximum-blue-purple)",
  "var(--mauve)",
  "var(--baby-powder)",
];

function changeText() {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .catch((error) => console.log(`this shit didnt work because ${error}`))
    .then((data) => {
      activityBox.innerHTML = data.activity;
      button.innerHTML= "Na, hit me again"

      activityBox.style.color =
        colors[Math.floor(Math.random() * colors.length)];
        button.style.color=colors[Math.floor(Math.random() * colors.length)];
    });
}


// async function changeText() {
//   try {
    
//     const response = await fetch('https://www.boredapi.com/api/activity/');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // after this line, our function will wait for the `response.json()` call to be settled
//     // the `response.json()` call will either return the JSON object or throw an error
//     const data = await response.json();
//     activityBox.innerHTML = data.activity;
//           button.innerHTML= "Na, hit me again"
    
//           activityBox.style.color =
//             colors[Math.floor(Math.random() * colors.length)];
//             button.style.color=colors[Math.floor(Math.random() * colors.length)];
//   }
//   catch(error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }