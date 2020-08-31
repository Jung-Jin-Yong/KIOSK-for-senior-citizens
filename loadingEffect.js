window.onload = function(){
  let effectArea = document.querySelector('.showEffect');

  function showEffect(){
    setTimeout(()=>{
      effectArea.innerHTML = '최적의 버거 탐색중.';
    },500);
    setTimeout(()=>{
      effectArea.innerHTML = '최적의 버거 탐색중..';
    },1000);
    setTimeout(()=>{
      effectArea.innerHTML = '최적의 버거 탐색중...';
    },1500);
    setTimeout(()=>{
      location.href='fourthStep.html';
    },2000);
  }

  showEffect();

}
