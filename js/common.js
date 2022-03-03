/* header */

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





/* footer */


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021

// GitHub (버전 관리시스템)//
// 깃 컴퓨터 파일의 변경사항을 추적, 여러 사용자간의 해당 파일 작업 및 조율,