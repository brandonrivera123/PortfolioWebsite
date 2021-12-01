const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  let root = document.documentElement;
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    root.style.setProperty("--ripple-x", x);
    root.style.setProperty("--ripple-y", y);

    // ripples.style.left = x + "px";
    // ripples.style.top = y + "px";
    // this.appendChild(ripples);

    // setTimeout(() => {
    //   ripples.remove();
    // }, 1000);
  });
});
