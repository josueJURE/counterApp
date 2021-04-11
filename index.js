const counterEl = document.getElementById("counterEl");
const myBtns = document.getElementsByTagName("button");
const btns = Array.from(myBtns)
var count = 0;

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    let element = e.target;
    if (element.className === "increase") {
      count++
    } else if (element.className === "decrease") {
      count--
    }
    else {
      count = 0;
    }
    if (count > 0) {
      counterEl.style.color = "green";
    } else if (count < 0) {
      counterEl.style.color = "red";
    } else {
      counterEl.style.color = "black";
    }
    counterEl.textContent = count;
  })
}
console.log(btns)
