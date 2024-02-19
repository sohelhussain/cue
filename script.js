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
  })
    .to(".front-img", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
    })
    .from("nav", {
      y: "-100",
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
      start: "-100% top",
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
      start: "-20% top",
      end: "50% 0%",
      // markers: true,
      scrub: 1,
    },
  });
};
containerSecondAnimation();

const thirdAnimation = () => {
  gsap.to(".text-line-up h1, .text-line-up img", {
    y: "0%",
    stagger: {
      amount: 0.5,
    },
    scrollTrigger: {
      trigger: "#container-third",
      scroller: "body",
      start: "0% 0%",
      end: "100% -100%",
    },
  });
};
thirdAnimation();
const fourthAnimation = () => {
  gsap.to(".inner-four", {
    transform: `translateX(-200%)`,
    scrollTrigger: {
      trigger: "#container-four",
      scroller: "body",
      start: "0% 0%",
      end: "100% -300%",
      pin: true,
      scrub: true,
    },
  });
};
fourthAnimation();
gsap.to("#container-five .five-hed img, #container-five .five-hed h1", {
  y: "0%",
  scrollTrigger: {
    trigger: "#container-five",
    scroller: "body",
    start: "0% 0%",
    end: "100% -100%",
  },
});
gsap.to("#container-five .image-div",{
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  scrollTrigger:{
    trigger: "#container-seven",
    scroller: "body",
    // markers: "true",
    start: "30% 0%",
    end: "100% 0%",
    
  }

})
gsap.to("#container-seven .five-hed img, #container-seven .five-hed h1", {
  y: "0%",
  scrollTrigger: {
    trigger: "#container-seven",
    scroller: "body",
    start: "0% 0%",
    end: "100% -100%",
  },
});
gsap.to("#container-seven .image-div",{
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  scrollTrigger:{
    trigger: "#container-seven",
    scroller: "body",
    // markers: "true",
    start: "30% 0%",
    end: "100% 0%",
    
  }

})
gsap.to(".leter-move .letters h2:nth-child(1)", {
  x: "50%",
  scrollTrigger: {
    trigger: "#container-six",
    scroller: "body",
    // markers:true,
    start: "0% 0%",
    end: "100% 0%",
    scrub: 1,
  },
});
gsap.to(".leter-move .letters h2:nth-child(2)", {
  x: "50%",
  scrollTrigger: {
    trigger: "#container-six",
    scroller: "body",
    // markers: true,
    start: "10% 0%",
    end: "100% 0%",
    scrub: 1,
  },
});
gsap.to(".leter-move .letters h2:nth-child(3)", {
  x: "50%",
  scrollTrigger: {
    trigger: "#container-six",
    scroller: "body",
    // markers: true,
    start: "20% 0%",
    end: "100% 0%",
    scrub: 1,
  },
});
gsap.to(".cont-move-logo img", {
  x: "2%",
  scrollTrigger: {
    trigger: "#container-six",
    scroller: "body",
    // markers:true,
    start: "-50% 0%",
    end: "100% 100%",
    scrub: 1,
  },
});
gsap.to("#container-eight .image-div",{
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  scrollTrigger:{
    trigger: "#container-eight",
    scroller: "body",
    // markers: "true",
    start: "30% 0%",
    end: "100% 0%",
    
  }

})
