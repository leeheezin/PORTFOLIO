scroll;
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop(); //scrolltop(): 브라우저 위치값
  $(".scroll em").text(parseInt(scrollTop)); //브라우저 스크롤값을 텍스트로 표시
});

// //loading

// let Isloader = document.querySelector(".loading_wrap");

// function Isloading() {
//   setTimeout(function () {
//     Isloader.classList.add("active");
//   }, 1500);
// }
// Isloading();

// //header scroll color
const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > document.getElementById("section7").offsetTop) {
    header.setAttribute("style", "background: #222;");
  } else {
    header.setAttribute("style", "background: #2a57dc;");
  }
});

// //header sidebar open - close
$(document).ready(function () {
  var target = $(".sidebar");

  // 버튼을 클릭하면 사이드바 열림
  $(document).on("click", ".nav_button", function (e) {
    target.show();
    target.addClass(".sidebar");
  });
  // 닫기 버튼을 클릭하면 사이드바 닫힘
  $(document).on("click", ".nav_close", function (e) {
    target.hide();
    target.removeClass(".sidebar");
  });
  // 메뉴를 클릭하면 사이드바 닫힘
  $(document).on("click", ".side2 a", function (e) {
    target.hide();
    target.removeClass(".sidebar");
  });
  // 사이드바 외부를 클릭하면 사이드바 닫힘
  $(document).mouseup(function (e) {
    if (target.has(e.target).length == 0) {
      target.hide();
      target.removeClass(".sidebar");
    }
  });
});
//사이드바 메뉴 버튼 클릭해서 이동하기
$(".side2 a").click(function (e) {
  e.preventDefault();
  let target = $(this); //사용자가 클릭한 버튼의 타겟이 저장
  let index = target.index(); //인덱스 부여하여 저장
  let section = $(".cont").eq(index); //eq() :  인덱스
  let offset = section.offset().top; //offset(): 요소의 위치(문서)
  $("html,body").animate({ scrollTop: offset }, 600); //offset값을 scrolltop에 대입(애니메이션)
});

// function scrollProgress(){
//   let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

//   if(scrollTop > document.getElementById("header").offsetTop){
//     document.getElementById("section7").classList.add("down");
//   }

//   function changeColor() {
//     let scrollTop = window.pageXOffset || document.documentElement.scrollTop || window.scrollY;
//     const sec7 = document.getElementById('section7');

//     const header = document.getElementById('header');

//     const changeHeight = sec7.offsetHeight;

//     if (scrollTop >= sec7.offsetTop && scrollTop <= changeHeight) {
//         header.classList.add("down");
//     } else {
//         header.classList.remove("down");
//     }
// }
// window.addEventListener("scroll", changeColor);

//section1 left txt
// var headline = $(".left_txt p");
// var char = '[class*="char"]';
// var tl = new TimelineLite();

// headline
//   .lettering('words').lettering();

// // Stagger letter animation
// tl.staggerFrom(char, 1, {
//   opacity: 0,
//   ease: Back.easeOut,
//   x: '-200%'
// }, 0.02);

//.intro_text h2 글자 쪼개기

//   Splitting();

// var s = document.createElement("style");
// s.innerHTML =
//   " *, *:before, *:after { animation-play-state: paused !important; }";

// document.addEventListener("keypress", function () {
//   s.parentNode ? document.head.removeChild(s) : document.head.appendChild(s);
// });

// $(".left p").load(function(e){
//   e.preventDefault();
//   let index = target.index(); //인덱스 부여하여 저장
//   let section = $(".left p").eq(index); //eq() :  인덱스
// });

// $(window).load(function(){
//   let main = $(window).load(); //scrolltop(): 브라우저 위치값

//   if(main >= $("#section1").offset().top - 2 ){
//     $(".left p").eq(0).addClass("active").siblings().removeClass("active");
//   }
// });

// //메인 gsap
// document.querySelectorAll(".split").forEach((desc) => {
//   let splitText = desc.innerText;
//   let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
//   splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
//   desc.innerHTML = splitWrap;
//   desc.setAttribute("aria-label", splitText);
// });

// gsap.set(".sec1_inner .sec1_left", { width: 0, opacity: 0 });
// gsap.set(".sec1_inner .sec1_right .main_title", { opacity: 1 });
// gsap.set(".sec1_inner .sec1_right", { width: 0, opacity: 0 });
// gsap.set(".sec1_inner .sec1_right .main_intro p", { opacity: 0, y: 50 });
// gsap.set(".sec1_inner .sec1_right .main_img", { opacity: 0, y: 50 });
// gsap.set("#header", { left: "-100%" });
// gsap.set("#section2", { opacity: 0, y: 50 });
// gsap.set(".split > span", { opacity: 0, y: 50 });

// setTimeout(() => {
//   let tl = gsap.timeline();
//   tl.to("#header", { duration: 0.3, left: 0 });
//   tl.to(".sec1_inner .sec1_left", { duration: 0.6, opacity: 1, width: "63%" });
//   tl.to(".sec1_inner .sec1_right", {
//     duration: 0.6,
//     opacity: 1,
//     width: "37%",
//   });
//   if (matchMedia("screen and (max-width: 960px)").matches) {
//     tl.to(".sec1_inner .sec1_right", {
//       duration: 0.6,
//       opacity: 1,
//       width: "100%",
//     });
//   }
//   if (matchMedia("screen and (max-width: 960px)").matches) {
//     tl.to(".sec1_inner .sec1_left", {
//       delay: 0.8,
//       duration: 0.6,
//       opacity: 1,
//       width: "100%",
//     });
//   }
//   // window.onresize = function () {
//   //   document.location.reload();
//   // };

//   tl.to("#section2", {
//     duration: 0.6,
//     opacity: 1,
//     y: 0,
//   });
//   tl.to(".split > span", {
//     duration: 0.6,
//     opacity: 1,
//     stagger: 0.008,
//     y: 0,
//     ease: "power4.out",
//   });
//   tl.to(".sec1_inner .sec1_right .main_title", { opacity: 0 });
//   tl.from(".sec1_inner .sec1_right .main_title", {
//     opacity: 0,
//   });

//   tl.to(".sec1_inner .sec1_right .main_intro p", {
//     duration: 0.3,
//     opacity: 1,
//     y: 0,
//   });
//   tl.to(".sec1_inner .sec1_right .main_img", {
//     duration: 0.3,
//     opacity: 1,
//     y: 0,
//   });
// }, 2000);

// // section2
// gsap.set(".prof_tit .tit1 > span", { opacity: 1, y: 100 });
// gsap.set(".prof_tit .tit2 > span", { opacity: 1, y: 100 });
// gsap.set(".prof_tit .tit3 > span", { opacity: 1, y: 100 });
// gsap.set(".prof_tit .tit4 > span", { opacity: 1, y: 100 });
// // gsap.set(".prof_img", { opacity: 0, y: 100 });
// gsap.set(".prof_desc p > span", { opacity: 1, y: 50 });

// window.addEventListener(
//   "scroll",
//   () => {
//     let scrollTop =
//       window.pageYOffset ||
//       document.documentElement.scrollTop ||
//       window.scrollY;

//     document.querySelector(".scroll").innerText = Math.round(scrollTop);
//     //intro 이질감
//     const offset1 =
//       scrollTop - document.querySelector(".port_int h2").offsetTop;
//     gsap.to(".port_int h2 span", { y: offset1 * 0.03 });
//     const offset2 =
//       scrollTop - document.querySelector(".proj_int h2").offsetTop;
//     gsap.to(".proj_int h2 em", { y: offset2 * 0.03 });
//     const offset3 = scrollTop - document.querySelector(".js_int h2").offsetTop;
//     gsap.to(".js_int h2 em", { y: offset3 * 0.03 });

//     // const offset2 = scrollTop - document.querySelector(".prof_cont").offsetTop;
//     // gsap.to(".prof_img", { y: offset2 * 0.02 });

//     if (
//       scrollTop >
//       document.querySelector(".prof_tit").offsetTop + window.innerHeight * 1.5
//     ) {
//       gsap.to(".prof_tit .tit1 > span", {
//         opacity: 0,
//       });
//       gsap.from(".prof_tit .tit1 > span", {
//         scrollTrigger: {
//           trigger: ".tit1 > span",
//           scroller: pageContents,
//           scrub: true,
//           // start: "top bottom",
//           // end: "top top",
//         },
//         delay: 0.9,
//         duration: 0.8,
//         opacity: 0,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".prof_tit .tit2 > span", {
//         delay: 1.0,
//         duration: 0.8,
//         opacity: 0,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".prof_tit .tit3 > span", {
//         delay: 1.1,
//         duration: 0.8,
//         opacity: 0,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".prof_tit .tit4 > span", {
//         delay: 1.2,
//         duration: 0.8,
//         opacity: 0,
//         y: 0,
//         ease: "power4.out",
//       });
//       // gsap.to(".prof_img", { delay: 0.6, duration: 0.6, opacity: 1, y: 0 });
//       gsap.to(".prof_desc p > .desc1", {
//         delay: 0.8,
//         duration: 0.5,
//         y: 0,
//         opacity: 0,
//       });
//       gsap.to(".prof_desc p > .desc2", {
//         delay: 0.9,
//         duration: 0.5,
//         y: 0,
//         opacity: 0,
//       });
//       gsap.to(".prof_desc p > .desc3", {
//         delay: 1.0,
//         duration: 0.5,
//         y: 0,
//         opacity: 0,
//       });
//       gsap.to(".prof_desc p > .desc4", {
//         delay: 1.1,
//         duration: 0.5,
//         y: 0,
//         opacity: 0,
//       });
//       gsap.to(".prof_desc p > .desc5", {
//         delay: 1.2,
//         duration: 0.5,
//         y: 0,
//         opacity: 0,
//       });
//       gsap.to(".prof_desc p > .desc6", {
//         delay: 1.3,
//         duration: 0.5,
//         y: 0,
//         opacity: 0,
//       });
//       gsap.to(".prof_desc p > .desc7", {
//         delay: 1.3,
//         duration: 0.5,
//         y: 0,
//         opacity: 0,
//       });
//     }
//   },
//   1000
// );

// //prof_img, proj_img reveal
// gsap.registerPlugin(ScrollTrigger);

// let revealContainers1 = document.querySelectorAll(".reveal");
// let revealContainers2 = document.querySelectorAll(".proj_img_wrap");

// revealContainers1.forEach((container1) => {
//   let image1 = container1.querySelector(".prof_img");
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: container1,
//       // toggleActions: "restart none none reset",
//     },
//   });

//   tl.set(container1, { autoAlpha: 1 });
//   tl.from(container1, 0.8, {
//     yPercent: 100,
//     ease: Power2.out,
//   });
//   tl.from(image1, 0.8, {
//     yPercent: -100,
//     delay: -0.8,
//     ease: Power2.out,
//   });
// });
// revealContainers2.forEach((container2) => {
//   let image2 = container2.querySelector(".proj_img_wrap > div");
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: container2,
//       // toggleActions: "restart none none reset",
//     },
//   });

//   tl.set(container2, { autoAlpha: 1 });
//   tl.from(container2, 1.5, {
//     xPercent: -100,
//     ease: Power2.out,
//   });
//   tl.from(image2, 1.5, {
//     xPercent: 100,
//     scale: 1.2,
//     delay: -1.5,
//     ease: Power2.out,
//   });
// });
// const scrollReveal = function () {
//   let scrollTop =
//     (window.pageYOffset ||
//       document.documentElement.scrollTop ||
//       window.scrollY) +
//     window.innerHeight * 0.5;
//   const reveal = document.querySelectorAll(".reveal");

//   reveal.forEach((el) => {
//     const revealDelay = el.dataset.delay;
//     if (scrollTop > el.parentElement.offsetTop) {
//       if (revealDelay == undefined) {
//         el.classList.add("show");
//       } else {
//         setTimeout(() => {
//           el.classList.add("show");
//         }, revealDelay);
//       }
//     }
//   });
// };
// window.addEventListener("scroll", scrollReveal);

// //section3
// gsap.set(".skill_logo_img", { opacity: 0, x: -100 });
// gsap.set(".skill_txt_tit p > span", { opacity: 0, y: 100 });
// gsap.set(".skill_txt_desc p > span", { opacity: 1, y: 100 });

// window.addEventListener(
//   "scroll",
//   () => {
//     let scrollTop =
//       window.pageYOffset ||
//       document.documentElement.scrollTop ||
//       window.scrollY;

//     document.querySelector(".scroll").innerText = Math.round(scrollTop);

//     // gsap.set(".prof_text span", { opacity: 0, x: -100 });

//     if (
//       scrollTop >
//       document.querySelector(".skill").offsetTop - window.innerHeight * 0.5
//     ) {
//       gsap.to(".skill_logo_img", {
//         delay: 0.5,
//         duration: 0.8,
//         opacity: 1,
//         x: 0,
//       });
//       gsap.to(".skill_txt_tit .tit1 > span", {
//         delay: 0.8,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_tit .tit2 > span", {
//         delay: 1.0,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_tit .tit3 > span", {
//         delay: 1.2,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_tit .tit4 > span", {
//         delay: 1.4,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc1 > span", {
//         delay: 0.5,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc2 > span", {
//         delay: 0.8,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc3 > span", {
//         delay: 1.0,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc4 > span", {
//         delay: 1.1,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc5 > span", {
//         delay: 1.2,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc6 > span", {
//         delay: 1.3,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc7 > span", {
//         delay: 1.4,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc8 > span", {
//         delay: 1.5,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".skill_txt_desc .desc9 > span", {
//         delay: 1.6,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//     }
//   },
//   1000
// );

// //section4 gsap
// gsap.set(".projtit_1 p > span", { opacity: 0, y: 100 });
// gsap.set(".projtit_1 h3 > span", { opacity: 0, y: 100 });
// gsap.set(".projdesc_1 p > span", { opacity: 0, y: 100 });
// gsap.set(".projtit_2 p > span", { opacity: 0, y: 100 });
// gsap.set(".projtit_2 h3 > span", { opacity: 0, y: 100 });
// gsap.set(".projdesc_2 p > span", { opacity: 0, y: 100 });
// gsap.set(".projtit_3 p > span", { opacity: 0, y: 100 });
// gsap.set(".projtit_3 h3 > span", { opacity: 0, y: 100 });
// gsap.set(".projdesc_3 p > span", { opacity: 0, y: 100 });
// gsap.set(".num_1 > span", { opacity: 1, color: "transparent" });
// gsap.set(".num_2 > span", { opacity: 1, color: "transparent" });
// gsap.set(".num_3 > span", { opacity: 1, color: "transparent" });

// window.addEventListener(
//   "scroll",
//   () => {
//     let scrollTop =
//       window.pageYOffset ||
//       document.documentElement.scrollTop ||
//       window.scrollY;

//     document.querySelector(".scroll").innerText = Math.round(scrollTop);

//     if (
//       scrollTop >
//       document.querySelector(".proj_1").offsetTop - window.innerHeight
//     ) {
//       gsap.to(".projtit_1 p > span", {
//         delay: 0.5,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".projtit_1 h3 > span", {
//         delay: 0.8,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".projdesc_1 p > span", {
//         delay: 1.2,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".num_1 > span", {
//         delay: 1.1,
//         duration: 1.2,
//         opacity: 1,
//         color: "#285ad5",
//       });
//     }
//     if (
//       scrollTop >
//       document.querySelector(".proj_2").offsetTop - window.innerHeight
//     ) {
//       gsap.to(".projtit_2 p > span", {
//         delay: 0.5,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".projtit_2 h3 > span", {
//         delay: 0.8,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".projdesc_2 p > span", {
//         delay: 1.2,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".num_2 > span", {
//         delay: 1.1,
//         duration: 1.2,
//         opacity: 1,
//         color: "#285ad5",
//       });
//     }
//     if (
//       scrollTop >
//       document.querySelector(".proj_3").offsetTop - window.innerHeight
//     ) {
//       gsap.to(".projtit_3 p > span", {
//         delay: 0.5,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".projtit_3 h3 > span", {
//         delay: 0.8,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".projdesc_3 p > span", {
//         delay: 1.2,
//         duration: 0.8,
//         opacity: 1,
//         y: 0,
//         ease: "power4.out",
//       });
//       gsap.to(".num_3 > span", {
//         delay: 1.1,
//         duration: 1.2,
//         opacity: 1,
//         color: "#285ad5",
//       });
//     }
//   },
//   1000
// );

//section5 가로스크롤
gsap.registerPlugin(ScrollTrigger);

const pageContents = document.getElementById("main");

const scroller = new LocomotiveScroll({
  el: pageContents,
  smooth: true,
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContents, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: pageContents.style.transform ? "transform" : "fixed",
});

window.addEventListener("load", function () {
  let sec2WrapWidth = document.querySelector(".sec5_wrap").offsetWidth;
  let horizontal2 = sec2WrapWidth - window.innerWidth;

  gsap.to("#section5 .sec5_wrap", {
    scrollTrigger: {
      scroller: pageContents,
      scrub: true,
      trigger: "#section5",
      pin: true,
      anticipatePin: 1,
      start: "top top",
      //end: sec2WrapWidth,
      end: () => `+=${sec2WrapWidth}`,
      markers: true,
    },
    x: -horizontal2,
    ease: "none",
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
});
// profile img 이질감

// $(".profile").each(function (index) {
//   let offset = (scrollTop - $(this).offset().top) * 0.2;

//   $(this)
//     .find(".prof_img")
//     .css({ transform: "translateY(" + offset + "px)" });
// });

// main txt split

//section 나타내기 / img + txt 이질감
// function scrollProgress() {
//   // let scrollTop =
//   //   (document.documentElement.scrollTop ||
//   //     window.scrollY ||
//   //     window.pageYOffset) + window.innerHeight;
//   // document.querySelectorAll(".cont_item").forEach((item) => {
//   //   scrollTop > item.offsetTop
//   //     ? item.classList.add("show")
//   //     : item.classList.remove("show");
//   // });
//   document.querySelectorAll("#section6").forEach((item) => {
//     let offset1 = (scrollTop - item.offsetTop) * 0.1;
//     let offset2 = (scrollTop - item.offsetTop) * 0.05;

//     item.querySelector(".js_txt h2").style.transform =
//       "translateX(" + offset2 + "px)";
//     item.querySelector(".js_txt p").style.transform =
//       "translateX(" + -offset2 + "px)";
//   });
// }
// window.addEventListener("scroll", scrollProgress);

// section6 h2 움직이기

//js button
document
  .querySelectorAll(".game_code")
  .forEach(
    (button) =>
      (button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );
