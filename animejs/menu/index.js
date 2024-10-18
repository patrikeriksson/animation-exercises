const menuElem = document.querySelector(".toggle");
const navElem = document.querySelector("nav");
const linksElems = document.querySelectorAll("nav a");
let toggleMenu = false;

function showMenu() {
  let timeline = anime.timeline({
    easing: "easeOutCubic",
  });

  timeline
    .add({
      targets: navElem,
      width: "100vw",
      height: "10px",
      opacity: 1,
      duration: 400,
    })
    .add({
      targets: navElem,
      height: "100vh",
      top: 0,
      padding: "8rem 0rem 0rem 2rem",
      duration: 400,
    })
    .add({
      targets: linksElems,
      translateX: 0,
      opacity: 1,
      duration: 300,
      delay: anime.stagger(200),
    });
}

function closeMenu() {
  let timeline = anime.timeline({
    easing: "easeOutCubic",
  });

  timeline
    .add({
      targets: navElem,
      height: "10px",
      top: "50%",
      padding: 0,
      duration: 400,
    })
    .add({
      targets: navElem,
      height: 0,
      duration: 400,
    });
}

menuElem.addEventListener("click", () => {
  if (toggleMenu) {
    anime({
      targets: linksElems,
      translateX: "-100%",
      opacity: 0,
      duration: 400,
      delay: anime.stagger(200),
      complete: function () {
        closeMenu();
      },
    });
  } else showMenu();

  toggleMenu = !toggleMenu; // Om false sätt till true, om true sätt till false
});
