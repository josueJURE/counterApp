const counterEl = document.getElementById("counterEl");
const myBtns = document.getElementsByTagName("button");
const btns = Array.from(myBtns)
var count = 0;

btns.forEach(function(item) {
  item.addEventListener("click", function (e) {
    let element = e.target;
    element.className === "increase" ? count++
    : element.className === "decrease" ? count--
    : count = 0;
    <!-- text color ternary operator -->
    count > 0 ? counterEl.style.color = "green"
    : count < 0 ? counterEl.style.color = "red"
    : counterEl.style.color = "black";
    counterEl.textContent = count;
    <!-- border color to match text color -->
    counterEl.style.borderColor = counterEl.style.color
  })
})

// for(var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function (e) {
//     let element = e.target;
//     element.className === "increase" ? count++
//     : element.className === "decrease" ? count--
//     : count = 0;
//     <!-- color ternary operator -->
//     count > 0 ? counterEl.style.color = "green"
//     : count < 0 ? counterEl.style.color = "red"
//     : counterEl.style.color = "black";
//     counterEl.textContent = count;
//   })
// }
console.log(btns)
