window.onload = function(){
  const pushButton = document.querySelectorAll(".push");

  pushButton[0].addEventListener('click', ()=>{
    localStorage.removeItem('firstStep');
    localStorage.removeItem('wantingList');
    localStorage.removeItem('hatingList');
    localStorage.removeItem('selectedMenu');
    localStorage.removeItem('hereOrToGo');
  });

  pushButton[1].addEventListener('click', ()=>{
    localStorage.setItem('hereOrToGo', '매장');
  });
  pushButton[2].addEventListener('click', ()=>{
    localStorage.setItem('hereOrToGo', '포장');
  });
}
