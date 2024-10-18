var animation = anime({
  targets: ".circle",
  translateX: 250,
  duration: 1000,
  easing: "easeInOutQuad",
  loop: true,
  direction: "alternate",
  autoplay: false,
  backgroundColor: "#ab1d1d",
});

document.querySelector(".circle").onclick = animation.play;

anime({
  targets: ".loader",
  rotate: 360,
  loop: true,
  easing: "linear",
});

anime({
  targets: "button",
  scale: 2,
  easing: "easeInOutQuart",
  direction: "alternate",
  loop: true,
});
