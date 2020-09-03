window.onload = function(){
  let effectArea = document.querySelector('.showEffect');

  function showEffect(){
    setTimeout(()=>{
      effectArea.innerHTML = '결제중입니다.';
    },500);
    setTimeout(()=>{
      effectArea.innerHTML = '결제중입니다..';
    },1000);
    setTimeout(()=>{
      effectArea.innerHTML = '결제중입니다...';
    },1500);
    setTimeout(()=>{
      location.href='endPage.html';
    },2000);
  }

  showEffect();

}
