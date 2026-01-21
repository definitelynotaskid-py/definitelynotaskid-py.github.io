const text = "Velvet ♡";
const hidden = "\u200C";
let index = 0;
let state = "type";
function animateTitle() {
  if (state === "type") {
    document.title = text.slice(0, index++);
    if (index > text.length) {
      state = "hold";
      setTimeout(() => {}, 0);
    }
  }
  else if (state === "hold") {
    setTimeout(() => {
      state = "delete";
    }, 1500);
    state = "wait";
  }
  else if (state === "delete") {
    document.title = text.slice(0, index--);
    if (index < 0) {
      document.title = hidden;
      state = "pause";
    }
  }
  else if (state === "pause") {
    setTimeout(() => {
      index = 0;
      state = "type";
    }, 1000);
    state = "wait2";
  }
}
setInterval(animateTitle, 180);
