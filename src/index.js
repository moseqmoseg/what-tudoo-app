const activityBox = document.getElementById("activityBox");
const button = document.getElementById(`button`);
const activityLink = document.getElementById(`link`);
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
  fetch("https://www.boredapi.com/api/activity/", {
    mode: "cors",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(`this shit didnt work because ${error}`))
    .then((data) => {
      activityBox.innerHTML = data.activity;
      button.innerHTML = "Na, hit me again";
      activityLink.setAttribute("href", data.link);
      activityBox.style.color =
        colors[Math.floor(Math.random() * colors.length)];
      button.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
}

button.onclick = changeText;
