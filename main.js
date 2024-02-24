const title = document.querySelector('.title');
// console.log(title);
gsap.to('.title', {
  opacity: 0,
  y: -60,
  ease: 'none',
  scrollTrigger: {
    trigger: '.title',
    scrub: 0.5,
    start: 'bottom center',
    end: 'bottom top',
  },
});
gsap.to('.img', {
  opacity: 0,
  y: 120,
  ease: 'none',
  scrollTrigger: {
    trigger: '.img',
    scrub: 0.5,
    start: 'bottom center',
    end: 'bottom top',
  },
});
gsap.to('.bg', {
  backgroundPosition: 'center 100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.sectionReserve',
    scrub: 0.2,
    start: 'top bottom',
    end: 'bottom top',
  },
});
