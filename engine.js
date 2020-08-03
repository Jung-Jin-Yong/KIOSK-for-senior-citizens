window.onload = function(){
  var menuButton1 = document.querySelectorAll(".menuButton1");
  var menuButton2 = document.querySelectorAll('.menu2');

  menuButton1[0].addEventListener('click',()=>{
    console.log('확인');
    localStorage.setItem(`firstStep`,`0`);
  });
  menuButton1[1].addEventListener('click',()=>{
    console.log('확인');
    localStorage.setItem(`firstStep`,`1`);
  });
  menuButton1[2].addEventListener('click',()=>{
    console.log('확인');
    localStorage.setItem(`firstStep`,`2`);
  });
}
