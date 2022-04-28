//SupahScroll
class SupahScroll {
  constructor(options) {
    this.opt = options || {};
    this.el = this.opt.el ? this.opt.el : ".supah_scroll";
    this.speed = this.opt.speed ? this.opt.speed : 0.1;
    this.init();
  }

  init() {
    this.scrollY = 0;
    this.supahScroll = document.querySelectorAll(this.el)[0];
    this.supahScroll.classList.add("supah_scroll");
    this.events();
    this.update();
    this.animate();
  }

  update() {
    if (this.supahScroll === null) return;
    document.body.style.height = `${
      this.supahScroll.getBoundingClientRect().height
    }px`;
  }

  pause() {
    document.body.style.overflow = "hidden";
    cancelAnimationFrame(this.raf);
  }

  play() {
    document.body.style.overflow = "inherit";
    this.raf = requestAnimationFrame(this.animate.bind(this));
  }

  destroy() {
    this.supahScroll.classList.remove("supah_scroll");
    this.supahScroll.style.transform = "none";
    document.body.style.overflow = "inherit";
    window.removeEventListener("resize", this.update);
    cancelAnimationFrame(this.raf);
    delete this.supahScroll;
  }

  animate() {
    this.scrollY += (window.scrollY - this.scrollY) * this.speed;
    this.supahScroll.style.transform = `translate3d(0,${-this.scrollY}px,0)`;
    this.raf = requestAnimationFrame(this.animate.bind(this));
  }

  scrollTo(y) {
    window.scrollTo(0, y);
  }

  staticScrollTo(y) {
    cancelAnimationFrame(this.raf);
    this.scrollY = y;
    window.scrollTo(0, y);
    this.supahScroll.style.transform = `translate3d(0,${-y}px,0)`;
    this.play();
  }

  events() {
    window.addEventListener("load", this.update.bind(this));
    window.addEventListener("resize", this.update.bind(this));
  }
}
//Initialize
const supahscroll = new SupahScroll({
  el: "#wrapper",
  speed: 0.1
});

//scroll
 $(window).scroll(function(){
      let scrollTop = $(window).scrollTop(); //scrolltop(): 브라우저 위치값
      $(".scroll span").text(parseInt(scrollTop)); //브라우저 스크롤값을 텍스트로 표시
    })

//header scroll color 
const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;
    
  window.addEventListener("scroll", () => {
      if (window.scrollY > document.getElementById("section7").offsetTop) {
          header.setAttribute("style", "background: #222;");
      } else {
           header.setAttribute("style", "background: #1458E4;");
      }
    });
//header sidebar open - close
$(document).ready(function(){
  var target = $(".sidebar");

  // 버튼을 클릭하면 사이드바 열림
  $(document).on("click", ".nav_button", function (e){
      target.show();
      target.addClass('.sidebar');
  });

  // 사이드바 외부를 클릭하면 사이드바 닫힘
  $(document).mouseup(function (e){
      if(target.has(e.target).length==0) {
          target.hide();
          target.removeClass('.sidebar');
      } 
  });
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
  var headline = $(".left_txt p");
  var char = '[class*="char"]';
  var tl = new TimelineLite();
  
  headline
    .lettering('words').lettering();
  
  // Stagger letter animation
  tl.staggerFrom(char, 1, {
    opacity: 0,
    ease: Back.easeOut,
    x: '-120%'
  }, 0.02);


  //.intro_text h2 글자 쪼개기
  document.querySelectorAll(".split").forEach(el => {
    let text = el.innerText;
    let split = text.split('').join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    el.innerHTML = split;
    el.setAttribute("aria-label", text);
});
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
// gsap
document.querySelectorAll(".intro_text").forEach((item, index) => {
  if( scrollTop >= item.offsetTop ){
      gsap.to( item.querySelectorAll(".split span"), {
          duration: .5,
          delay: 0.6,
          opacity: 1,
          y: 0,
          stagger: .06,
          ease: "power4.out",
          rotation: 0
      });
  }
});
});
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


//section 나타내기 효과 / img + txt 이질감
function scrollProgress(){
  let scrollTop = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight;
  document.querySelectorAll(".cont_item").forEach(item =>{
    scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
})
document.querySelectorAll("#section6").forEach(item =>{
  let offset1 = (scrollTop - item.offsetTop) * 0.1;
  let offset2 = (scrollTop - item.offsetTop) * 0.05;
  
  item.querySelector(".js_img").style.transform = "translateX("+ offset1 +"px)";
  item.querySelector(".js_txt h2").style.transform = "translateX("+ offset2 +"px)";
  item.querySelector(".js_txt p").style.transform = "translateX("+ offset2 +"px)";
});

}
window.addEventListener("scroll", scrollProgress);

// section6 h2 움직이기
