var navTitle = document.querySelector("#topNav_title");
window.addEventListener(
  "scroll",
  function(e) {
    if (!navTitle) return;
    if (this.scrollY > 230) {
      navTitle.style.opacity = 1;
    } else {
      navTitle.style.opacity = 0;
    }
  },
  false
);
