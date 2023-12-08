function smoothscroll(){gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the '.main' element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy('.main', {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector('.main').style.transform ? "transform" : "fixed"
  });}smoothscroll();









// var tl = gsap.timeline();

// tl.from('#logo',{
//     x: -40,
//     opacity: 0,
//     duration: 1
//     // ease: 'Expo.easeInOut'
// })
// .from('.image img',{
//     opacity: 0,
//   scale: 1.3,
//     width: 0,
//     ease: 'Expo.easeInOut',
//     duration: 5
// }, '-=2')
// .from('.intro',{
//   opacity: 0,
//   x: -50,
//   ease: 'Expo.easeInOut',
//   duration: 3
// }, '-=2.5')
// .from('header',{
//   height: 0,
//   opacity: 0,
//   duration: 1
// }, '-=1')
// .from('.nav',{
//   y: -20,
//   opacity: 0,
//   duration: 1
// })





gsap.to('.intro',{
  x: -150,
  opacity: 0,
  scrollTrigger:{
    trigger: '.page2',
    scroller: '.main',
    // markers: true,
    scrub: 2
  }
})


gsap.to('.image img',{
  opacity: 0,
  scale: 1.2,
  scrollTrigger:{
  trigger: '.page2',
  scroller: '.main',
  // markers: true,
  scrub: 2
  }
})




gsap.from('.image2', {
    y: 100,
    opacity: 0,
    scrollTrigger:{
        trigger: '.page2',
        scroller: '.main',
        end: 'top: 20%',
    // markers: true,
        scrub: 2
    }
})
gsap.from('.image2 img', {
    y: 100,
    opacity: 0,
    scrollTrigger:{
        trigger: '.page2',
        scroller: '.main',
        end: 'top: 10%',
    // markers: true,
        scrub: 2
    }
})

gsap.from('#head', {
  y: 100,
  opacity: 0,
  scrollTrigger:{
    trigger: '.page2',
    scroller: '.main',
    start: 'top 85%',
    end: 'top 10%',
    // markers: true,
    scrub: 2
  }
})

gsap.from('#para1',{
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.page2',
    scroller: '.main',
    start: 'top: 35%',
    end: 'top 5%',
    // markers: true,
    scrub: 2
  }
})
gsap.from('#para2',{
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.page2',
    scroller: '.main',
    start: 'top: 25%',
    end: 'top 5%',
    // markers: true,
    scrub: 2
  }
})



gsap.from('.heading3', {
  y: 100,
  opacity: 0,
  scrollTrigger:{
    trigger: '.page3',
    scroller: '.main',
    start: 'top 80%',
    end: 'top 40%',
    // markers: true,
    scrub: 2
  }
})

gsap.from('.nav3 h2', {
  scrollTrigger:{
    trigger: '.page3',
    scroller: '.main',
    start: 'top 50%',
    // markers: true,
  },
  y:-20,
  opacity: 0,
  stagger: .2,
  duration: .5
})

gsap.from('.content3 img', {
  scrollTrigger:{
    trigger: '.page3',
    scroller: '.main',
    start: 'top 30%',
    // markers:true
  },
  height: 0,
  duration: 2
})

gsap.from('.page3 button', {
  scrollTrigger:{
    trigger: '.page3',
    scroller: '.main',
    start: 'top 20%',
    // markers:true
  },
  opacity: 0,
  duration: 1
})