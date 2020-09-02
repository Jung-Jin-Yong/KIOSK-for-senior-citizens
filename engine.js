window.onload = function(){
  let pushButton = document.querySelector(".push");
  let menuButton1 = document.querySelectorAll(".menuButton1");

  pushButton.addEventListener('click',()=>{
    localStorage.removeItem('firstStep');
    localStorage.removeItem('wantingList');
    localStorage.removeItem('hatingList');
    localStorage.removeItem('selectedMenu');
    localStorage.removeItem('hereOrToGo');
    localStorage.removeItem('selectedMenuPrice');
  });

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
    localStorage.setItem('wantingList','a,b');
    console.log(localStorage);
  });
}
