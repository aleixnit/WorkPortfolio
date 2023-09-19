let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});



// WAVES ANIMATION
const opts = {
  fills: [
    "rgba(0, 136, 255, 0.5)",
    "rgba(18, 29, 36, 0.82)",
    "rgba(0, 210, 186, 0.5)",
  ],
  flowRate: 0,
  swayRate: 2.68,
  wavelength: 18,
  complexity: 7,
  curviness: 1,
  offset: 0.07,
  randomFlowRate: 0.78,
  randomHeight: 0.25,
  swayVelocity: 0.45,
  randomSwayRate: 0.63,
  randomOffset: 0.04
};

const wavesInstance = waves(opts);
wavesInstance.mount("#waves");

// PARTICLES.JS
particlesJS("particles-js", {
  particles: {
    number: { value: 437, density: { enable: true, value_area: 800 } },
    color: { value: "#00ffb0" },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 4 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 175.9296281487406,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 750, size: 0, duration: 6, opacity: 0, speed: 2 },
      repulse: { distance: 97.1951110859124, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

