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



  //section1 left
  setTimeout(() => {
    gsap.to(".left_txt .left_txt1", {duration: 0.6, width: "100%"});
    gsap.to(".left_txt .left_txt2", {duration: 0.6, width: "100%", delay: 0.2});
    gsap.to(".left_txt .left_txt3", {duration: 0.6, width: "100%", delay: 0.4});
    gsap.to(".left_txt .left_txt4", {duration: 0.6, width: "100%", delay: 0.6});

    gsap.to(".left_txt .left_txt1 .active .active", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0, delay: 0.4})
    gsap.to(".left_txt .left_txt2 .active .active", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0, delay: 0.6})
    gsap.to(".left_txt .left_txt3 .active .active", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0, delay: 0.8})
    gsap.to(".left_txt .left_txt4 .active .active", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0, delay: 1.0})
}, 2000)
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


//section3 text
function scrollProgress(){
  let scrollTop = (document.documentElement.scrollTop)
  // .prof_intro 
  if( scrollTop > document.getElementById("section3").offsetTop - $(window).height()/2){
      document.getElementById("section3").classList.add("show");
  }
}
window.addEventListener("scroll", scrollProgress);
