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
  // tl.to(".front-img", {
  //   //  clipPath: `polygon(0 100%, 100% 100%, 100% 0, 0 0)`,
  //   height: "90%",
  //   duration: 3,
  // });
  tl.from("nav", {
    y: "-100",
    // delay: 0.8,
  });
};
loder();
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#conatiner-first>.part-2",
    scroller: "body",
    start: "0% -20%",
    end: "100% -200%",
    markers: true,
    scrub: 1,
    pin: true,
  },
});
tl2.to(".front-img", {
  width: "35%",
  height: "70vh",
});
