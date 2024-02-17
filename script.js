const scroller = () => {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};
scroller();
const loder = () => {
  let tl = gsap.timeline();
  tl.to("#loder", {
    top: "-100%",
    duration: 0.8,
    display: "none",
    ease: "power4.out",
  });
  tl.to(".front-img", {
    //  clipPath: `polygon(0 100%, 100% 100%, 100% 0, 0 0)`,
    height: "90vh",
    // duration: 1,
  });
  tl.from("nav", {
    y: "-100",
    // delay: 0.8,
  });
};
loder();
const part2Animation = () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#container-first>.part-2",
      scroller: "body",
      start: "0% -20%",
      end: "100% -500%",
      // markers: true,
      scrub: 1,
      pin: true,
    },
  });
  tl2
    .to(
      ".front-img",
      {
        width: "30%",
        height: "70vh",
        top: "25%",
      },
      "a"
    )
    .to(
      ".front-img>img",
      {
        scale: 1,
      },
      "a"
    )
    .to(
      ".part-2>.left-images",
      {
        bottom: "27%",
      },
      "b"
    )
    .to(
      ".part-2>.right-images",
      {
        top: "25%",
      },
      "b"
    );
};
part2Animation();

const containerSecondAnimation = () => {
  const textmovver = gsap.timeline({
    scrollTrigger: {
      trigger: "#container-second",
      scroller: "body",
      start: "top top",
      end: "100% top",

      scrub: 1,
      // markers: true,
    },
  });
  textmovver
    .to(
      "#txtimg",
      {
        right: "40%",
      },
      "a"
    )
    .to(
      ".txtimg",
      {
        left: "33%",
      },
      "a"
    )
    .to(
      ".txt>h1",
      {
        left: "25%",
      },
      "a"
    );

  let contWords = "";
  const secPara = document.querySelector(`.text-write>p`);
  secPara.textContent.split("").forEach((words) => {
    contWords += `<span>${words}</span>`;
  });
  secPara.innerHTML = contWords;

  gsap.to(".text-write p span", {
    color: `#ff3227`,
    stagger: 1,
    scrollTrigger: {
      trigger: "#container-second",
      scroller: "body",
      start: "top top",
      end: "100 -300%",
      pin: true,
      scrub: 1,
    },
  });
};
containerSecondAnimation();

gsap.to(".text-line-up h1", {
  y: "0%",
  stagger:{
    amount:1
  },
  scrollTrigger: {
    trigger: "#container-third",
    scroller: "body",
    start: "0% 0%",
    end: "100% -100%",
    markers: true,
  },
});
