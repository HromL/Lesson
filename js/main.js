const div = document.getElementById("div");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  div.classList.toggle("hide");
  console.log("click");
});

// div.classList.add("div-green");

console.log(div.className);

// div.style.color = "red";

const btn1 = document.createElement("button");
btn1.classList.add("btn");
div.appendChild(btn1);
btn1.addEventListener("click", () => {
  div.classList.toggle("div-red");
});
