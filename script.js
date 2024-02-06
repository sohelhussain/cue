const scroller = () => {
    const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
}
scroller();
const loder = () => {
    gsap.to("#loder",{
        y:"-100%",
        duration:.8,
        display:"none",
        ease: "power4.out",
    })
}
loder();
gsap.from("nav",{
    y:"100",
})