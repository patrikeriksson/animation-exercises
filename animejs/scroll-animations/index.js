const animation = anime({
  targets: ".seek-anim-demo .el",
  translateY: 270,
  delay: function (el, i) {
    return i * 200;
  },
  elasticity: 200,
  easing: "easeInOutSine",
  autoplay: false,
});

const squares = document.querySelectorAll(".el");

window.onscroll = function () {
  const scrollPercent = window.scrollY - 100;

  animation.seek((scrollPercent / 700) * animation.duration); // Ensure it doesn't exceed the duration.
};
