if(document.body.classList.contains('main-page')){



}



else if(document.body.classList.contains('ark-page')){


  var servers = document.querySelector(".servers") ;
  document.querySelector(".scroll-servers").addEventListener("click" , function (e) {
    e.preventDefault();
    scroll.scrollTo(".servers");
  
  })
  
  const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 3,
      spaceBetween: 280,
  
  
      breakpoints: {
       30: {
          slidesPerView: 1,
          spaceBetween: 300,
        },
  
        700: {
          slidesPerView: 2,
          spaceBetween: 120,
        },
        // when window width is >= 480px
        1100: {
          slidesPerView: 2,
          spaceBetween: 280,
        },
        // when window width is >= 640px
        1380: {
          slidesPerView: 3,
          spaceBetween: 280,
        }
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  

    var LocomotiveScroll = require('locomotive-scroll');
const scroll = new LocomotiveScroll({
    el: document.querySelector('#page-scroll'),
    smooth: true,
    smartphone: {
			smooth: true
		},
		tablet: {
			smooth: true
		}
});

setTimeout(() => {
    scroll.update();
}, 300);

window.addEventListener("resize", function () {
  setTimeout(() => {
    scroll.update();
}, 300);
});

}

else if(document.body.classList.contains('gta-page')){




    var LocomotiveScroll = require('locomotive-scroll');
const scroll = new LocomotiveScroll({
    el: document.querySelector('#page-scroll'),
    smooth: true,
    smartphone: {
			smooth: true
		},
		tablet: {
			smooth: true
		}
});

scroll.on('scroll', (args) => {

  console.log("test");
if(document.getElementsByTagName("html")[0].classList.contains('has-scroll-scrolling')){
   document.querySelector(".video iframe").style.pointerEvents = "none";
}
else{
  document.querySelector(".video iframe").style.pointerEvents = "visible";
}



});

setTimeout(() => {
    scroll.update();
}, 300);

window.addEventListener("resize", function () {
  setTimeout(() => {
    scroll.update();
}, 300);
});

};



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImlmKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLXBhZ2UnKSl7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZWxzZSBpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnYXJrLXBhZ2UnKSl7XHJcblxyXG5cclxuICB2YXIgc2VydmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmVyc1wiKSA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JvbGwtc2VydmVyc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzY3JvbGwuc2Nyb2xsVG8oXCIuc2VydmVyc1wiKTtcclxuICBcclxuICB9KVxyXG4gIFxyXG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyODAsXHJcbiAgXHJcbiAgXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAzMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAwLFxyXG4gICAgICAgIH0sXHJcbiAgXHJcbiAgICAgICAgNzAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxyXG4gICAgICAgIDExMDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDI4MCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XHJcbiAgICAgICAgMTM4MDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjgwLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICBcclxuXHJcbiAgICB2YXIgTG9jb21vdGl2ZVNjcm9sbCA9IHJlcXVpcmUoJ2xvY29tb3RpdmUtc2Nyb2xsJyk7XHJcbmNvbnN0IHNjcm9sbCA9IG5ldyBMb2NvbW90aXZlU2Nyb2xsKHtcclxuICAgIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1zY3JvbGwnKSxcclxuICAgIHNtb290aDogdHJ1ZSxcclxuICAgIHNtYXJ0cGhvbmU6IHtcclxuXHRcdFx0c21vb3RoOiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0dGFibGV0OiB7XHJcblx0XHRcdHNtb290aDogdHJ1ZVxyXG5cdFx0fVxyXG59KTtcclxuXHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc2Nyb2xsLnVwZGF0ZSgpO1xyXG59LCAzMDApO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc2Nyb2xsLnVwZGF0ZSgpO1xyXG59LCAzMDApO1xyXG59KTtcclxuXHJcbn1cclxuXHJcbmVsc2UgaWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2d0YS1wYWdlJykpe1xyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBMb2NvbW90aXZlU2Nyb2xsID0gcmVxdWlyZSgnbG9jb21vdGl2ZS1zY3JvbGwnKTtcclxuY29uc3Qgc2Nyb2xsID0gbmV3IExvY29tb3RpdmVTY3JvbGwoe1xyXG4gICAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXNjcm9sbCcpLFxyXG4gICAgc21vb3RoOiB0cnVlLFxyXG4gICAgc21hcnRwaG9uZToge1xyXG5cdFx0XHRzbW9vdGg6IHRydWVcclxuXHRcdH0sXHJcblx0XHR0YWJsZXQ6IHtcclxuXHRcdFx0c21vb3RoOiB0cnVlXHJcblx0XHR9XHJcbn0pO1xyXG5cclxuc2Nyb2xsLm9uKCdzY3JvbGwnLCAoYXJncykgPT4ge1xyXG5cclxuICBjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1zY3JvbGwtc2Nyb2xsaW5nJykpe1xyXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvIGlmcmFtZVwiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbn1cclxuZWxzZXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvIGlmcmFtZVwiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJ2aXNpYmxlXCI7XHJcbn1cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNjcm9sbC51cGRhdGUoKTtcclxufSwgMzAwKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNjcm9sbC51cGRhdGUoKTtcclxufSwgMzAwKTtcclxufSk7XHJcblxyXG59O1xyXG5cclxuXHJcbiJdLCJmaWxlIjoiYmFzZS5qcyJ9
