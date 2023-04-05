const input = document.querySelector("input");
const spanErr = document.querySelector(".error");

input.addEventListener("invalid", () => {
  spanErr.classList.remove("hidden");
});

input.addEventListener("input", () => {
  spanErr.classList.add("hidden");
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const input1 = document.querySelector(".email-mobile");
const spanErr1 = document.querySelector(".error1");

input1.addEventListener("invalid", () => {
  spanErr1.classList.remove("hidden");
});

input1.addEventListener("input", () => {
  spanErr1.classList.add("hidden");
});

const form1 = document.querySelector(".mobile-form");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
});
