$(document).ready(function () {
  // gsap.registerPlugin(ScrollTrigger);

  // Create a timeline for both animations
  var animationTimeline = gsap.timeline();

  animationTimeline.to(".left_box", {
    x: "-120%",
  }).to(".heading-2", {
    x: "-300",
    duration: 2,
  }, 0).to(".div-clipping", {
    width: "100%",
    height: "100%",
    duration: 2,
    zIndex: 9,
    transform: "translate(-50%, -50%) rotate(0deg) skew(0deg, 0deg)",
  }, .5)


  // Use the timeline in the ScrollTrigger
  ScrollTrigger.create({
    trigger: ".section-ch1-1",
    start: "top 5%",
    end: "bottom top",
    scrub: .6,
    pin: true,
    pinSpacing: true,
    animation: animationTimeline,
  });



  var animation2Timeline = gsap.timeline();

  animation2Timeline.to(".section-wrap", {
    scale: .85,
    borderRadius: "10px"
  }).to(".section2overlay", {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 4,
  }, 0)

  // Use the timeline in the ScrollTrigger
  ScrollTrigger.create({
    trigger: ".section-ch1-2",
    start: "top end",
    end: "bottom end",
    scrub: .9,
    pin: true,
    pinSpacing: false,
    animation: animation2Timeline,
  });


  // Create a timeline for the animation of section-ch1-3
  var animation3Timeline = gsap.timeline();
  // Define your animations for section-ch1-3 here
  animation3Timeline.to(".section-ch1-3 .card-img", {
    width: "100%",
    height: "100vh",
    borderRadius: 0,
  }).to(".section-ch1-3 .wrapper", {
    paddingTop: 0,
  }, 0).to(".section-ch1-3 .card-img img", {
    borderRadius: 0,
  }, 0).to(".wrap_text", {
    top: "50%",
  }, 0).to(".wrap_text p", {
    color: "#fff",
  }, 0)



  // Create a ScrollTrigger for section-ch1-3 with pinning and stacking
  ScrollTrigger.create({
    trigger: ".section-ch1-3",
    start: "top top",
    end: "bottom end",
    scrub: .8,
    pin: true,
    pinSpacing: true, // Set to false for stacking
    animation: animation3Timeline,
  });





  let sections4panels = gsap.utils.toArray(".section-ch1-4 .panel");

  let scrollTween = gsap.to(sections4panels, {
    xPercent: -100 * (sections4panels.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".section-ch1-4",
      pin: true,
      // pinSpacing: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections4panels.length - 1)),
      end: "+=3000"
    }
  });









  var animation4Timeline = gsap.timeline();

  // Function to rotate the #inner group in the opposite direction of the #lock group
  animation4Timeline.to(".chapter_vector_wrap", {
    opacity: 1,
    scale: 1,

  }).to(".chapter_vector svg", {
    scale: 1,
    duration: 3,
    ease: Expo.easeInOut,
  }).to('#clock', {
    rotation: -560, // Rotate 360 degrees in the opposite direction
    duration: 2,
    transformOrigin: 'center center',
    ease: 'power2.inOut',
  }).to('#clock path[style*="opacity: 0;"]', {
    opacity: 1,
    duration: 1,
    stagger: 0.2
  }, 1).to('#inner #inner-top', {
    rotation: 1060, // Rotate 360 degrees in the opposite direction
    duration: 5,
    transformOrigin: 'center center',
  }, 1).to('#inner #inner-3', {
    rotation: -1060, // Rotate 360 degrees in the opposite direction
    duration: 5,
    transformOrigin: 'center center',
  }, 1).to('#inner #inner-7', {
    rotation: -1060, // Rotate 360 degrees in the opposite direction
    duration: 5,
    transformOrigin: 'center center',
  }, 1).to('.chapter_ch2_1_content', {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    duration: 2,
    transform: "translate(-50%, -50%) scale(1)",
  }).to(".section-ch2-1 .chapetr_name", {
    zIndex: 4,
    color: "#fff",
  }, "<").to(".section-ch2-1 .chapetr_name", {
    y: -200,
  }).to(".section-ch2-1 .chapter_ch2_1_content h5", {
    opacity: 1,
    y: 10,
  })

  ScrollTrigger.create({
    trigger: ".section-ch2-1",
    start: "top top",
    end: "bottom end",
    scrub: .8,
    pin: true,
    pinSpacing: true, // Set to false for stacking
    animation: animation4Timeline,
  });

  // Create a timeline for animations



  // document.querySelectorAll(".section_charts .chart_div").forEach(function (chartDiv) {
  //   var height = chartDiv.getAttribute("data-height");
  //   animation5Timeline.to(chartDiv, {
  //     height: height,
  //     stagger: .1,
  //   });
  // });


  var animation5Timeline = gsap.timeline();

  // Function to rotate the #inner group in the opposite direction of the #lock group
  animation5Timeline.to(".section_charts li:first-child .chart_div", {
    height: "20vh",
    stagger: .5,
  }, "0").to(".section_charts li:nth-child(2) .chart_div", {
    height: "30vh",
    stagger: .5,
  }, ".1").to(".section_charts li:nth-child(3) .chart_div", {
    height: "40vh",
    stagger: .5,
  }, ".2").to(".section_charts li:nth-child(4) .chart_div", {
    height: "50vh",
    stagger: .5,
  }, ".3").to(".section_charts li:last-child .chart_div", {
    height: "60vh",
    stagger: .5,
  }, ".4").to(".section_charts li:first-child span", {
    opacity: 1,
    stagger: .5,
  }, "0").to(".section_charts li:nth-child(2) span", {
    opacity: 1,
    stagger: .5,
  }, ".1").to(".section_charts li:nth-child(3) span", {
    opacity: 1,
    stagger: .5,
  }, ".2").to(".section_charts li:nth-child(4) span", {
    opacity: 1,
    stagger: .5,
  }, ".3").to(".section_charts li:last-child span", {
    opacity: 1,
    stagger: .5,
  }, ".4")



  ScrollTrigger.create({
    trigger: ".section-ch2-2",
    start: "top top",
    end: "bottom end",
    scrub: .8,
    pin: true,
    pinSpacing: true, // Set to false for stacking
    animation: animation5Timeline,
  });






  var animation6Timeline = gsap.timeline();

  animation6Timeline.to(".section-ch2-3-cards", {
    right: "100%",
    left: "unset",
    duration: 3,
  }).to(".section-ch2-3-cards li", {
    transform: "translateY(0px)",
    stagger: .4,
    ease: "ease"
  }, "<")

  ScrollTrigger.create({
    trigger: ".section-ch2-3",
    start: "top top",
    end: "bottom end",
    scrub: .8,
    pin: true,
    pinSpacing: true, // Set to false for stacking
    animation: animation6Timeline,
  });



  const h5Elements = Array.from(document.querySelectorAll(".section-ch2-4 h5"));
  const shuffledH5Elements = h5Elements.sort(() => Math.random() - 0.5);

  var animation62Timeline = gsap.timeline();
  animation62Timeline.to(shuffledH5Elements, {
    opacity: 1,
    stagger: 0.5,
  });




  ScrollTrigger.create({
    trigger: ".section-ch2-4",
    start: "top top",
    end: "bottom end",
    scrub: .8,
    pin: true,
    pinSpacing: true, // Set to false for stacking
    animation: animation62Timeline,
  });



});
