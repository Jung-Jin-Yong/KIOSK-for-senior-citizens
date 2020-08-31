window.onload = function(){
  let menuButton1 = document.querySelectorAll(".menuButton1");
  menuButton1[0].addEventListener('click',()=>{
    console.log('확인');
    localStorage.setItem(`firstStep`,`0`);
    console.log(localStorage);
  });
  menuButton1[1].addEventListener('click',()=>{
    console.log('확인');
    localStorage.setItem(`firstStep`,`1`);
    console.log(localStorage);
  });
  menuButton1[2].addEventListener('click',()=>{
    console.log('확인');
    localStorage.setItem(`firstStep`,`2`);
    console.log(localStorage);
  });
}
