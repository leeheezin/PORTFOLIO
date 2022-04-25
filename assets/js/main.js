//header scroll color change
const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;
    
  window.addEventListener("scroll", () => {
      if (window.scrollY > 13450) {
          header.setAttribute("style", "background: #222;");
      } else {
           header.setAttribute("style", "background: #1458E4;");
      }
    });

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