let bars = document.querySelectorAll(".bar");
let detail = document.querySelectorAll(".detail");
let barText = document.querySelectorAll(".bar-text");
let day = new Date().getDay();

setDatas();

function setDatas() {
  for (let i = 0; i < data.length; i++) {
    bars[i].style.height = `${data[i].amount * 1.2}%`;
    detail[i].innerHTML = `$${data[i].amount}`;
  }
  barText[day - 1].classList.add("today");
}

barText.forEach((bar) => {
  bar.addEventListener("mouseover", () => {
    bar.querySelector(".detail").style.visibility = "visible";
  });

  bar.addEventListener("mouseout", () => {
    bar.querySelector(".detail").style.visibility = "hidden";
  });
});
