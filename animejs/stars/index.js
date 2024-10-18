anime({
  targets: ".star",
  translateY: "100vh",
  delay: anime.stagger(200, { from: 1 }),
  rotate: anime.stagger([-360, 360]), // rotation will be distributed from -360deg to 360deg evenly between all elements
  easing: "linear",
  duration: 2000,
  loop: true,
});
