
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgTG9jb21vdGl2ZVNjcm9sbCA9IHJlcXVpcmUoJ2xvY29tb3RpdmUtc2Nyb2xsJyk7XHJcblxyXG5jb25zdCBzY3JvbGwgPSBuZXcgTG9jb21vdGl2ZVNjcm9sbCh7XHJcbiAgICBlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2Utc2Nyb2xsJyksXHJcbiAgICBzbW9vdGg6IHRydWUsXHJcbiAgICBzbWFydHBob25lOiB7XHJcblx0XHRcdHNtb290aDogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdHRhYmxldDoge1xyXG5cdFx0XHRzbW9vdGg6IHRydWVcclxuXHRcdH1cclxufSk7XHJcblxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNjcm9sbC51cGRhdGUoKTtcclxufSwgMzAwKTtcclxuXHJcbnZhciBzZXJ2ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2ZXJzXCIpIDtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JvbGwtc2VydmVyc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHNjcm9sbC5zY3JvbGxUbyhcIi5zZXJ2ZXJzXCIpO1xyXG5cclxufSlcclxuXHJcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDI4MCxcclxuXHJcblxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAzMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMDAsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICA3MDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTIwLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxyXG4gICAgICAxMTAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDI4MCxcclxuICAgICAgfSxcclxuICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcclxuICAgICAgMTM4MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyODAsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXHJcbiAgICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgIH0sXHJcbiAgfSk7Il0sImZpbGUiOiJiYXNlLmpzIn0=
