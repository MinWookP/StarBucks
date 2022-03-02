const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// searchEl에 class search로 값을 할당
// searchInputEl class search안에 있는 input요소를 할당.

searchEl.addEventListener('click',function(){
    // Logic...
    searchInputEl.focus();
});
//search icon 클릭하면 똑같이 창이 늘어나게끔 focus하라는 명령

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
//searchEl가 눌렸을때 class focused가 추가되게 해라
//input 클릭시 placeholder가 생기게 해라.

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});
//searchEl가 눌렸을때 class focused가 제거되게해라
//input 클릭시 placeholder가 비어있게해라.

//뱃지 스크롤시 사라졌다가 나타나게 하기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    console.log('scroll!!');
    if (window.scrollY > 500){
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6,{
            opacity: 0,
            display:'none'
        });
        // 버튼 보이기!
        gsap.to('#to-top', .2,{ 
            x: 0,
        });
    }else{
        //배지 보이기
        gsap.to(badgeEl, .6,{
            opacity: 1,
            display: 'block'
        });
        //버튼 숨기기!
        gsap.to('#to-top', .2,{ 
            x: 100,
        });
    }
}, 300));
// _.throttle(함수, 시간)



toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0,
    });
});

//


/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})


// Swiper 수직 슬라이드
// Initialize = 초기화시키다
//min.css 파일이 훨씬 효율적으로 사용 가능하다. min.css(css 압축버전 파일이다)


//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
    direction: 'vertical',
    autoplay: true,
    loop:true
    //direction(방향), vertical(수직)
}); // new 생성자 (클래스);

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, //반복하겠다
    // autoplay: {
    //     delay: 5000
    // }
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable:true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    direction: 'horizontal', // 수평
    autoplay: true, // 자동 재생여부
    loop:true,  // 반복 여부
    spaceBetween: 30, // 간격
    slidesPerView: 5, // slidesPerView 한 화면에 몇개의 슬라이드를 보여줄 것이냐
    navigation: {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next',
    }
});






const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion  //!가 붙은 것을 반대의 값으로 반환 false => true
    if (isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});

 //반복 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

 function floatingObject (selector, delay, size) {
     // gsap.to(요소,시간,옵션);
     gsap.to(
         selector, random(1.5,2.5), 
         {  
            //옵션
            y: size,
            repeat: -1,
            yoyo: true, //위로 아래로 왔다갔다하는 애니메이션
            ease: Power1.easeInOut,
            delay: random(0, delay)
         }
     );
 }
 floatingObject('.floating1', 1, 15);
 floatingObject('.floating2', .5, 15);
 floatingObject('.floating3', 1.5, 20);


 const spyEls = document.querySelectorAll('section.scroll-spy');
 spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, //보여짐의 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
 });


 /**/

 const thisYear = document.querySelector('.this-year');
 thisYear.textContent = new Date().getFullYear(); //2021

// GitHub (버전 관리시스템)//
// 깃 컴퓨터 파일의 변경사항을 추적, 여러 사용자간의 해당 파일 작업 및 조율,
