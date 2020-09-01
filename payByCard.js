window.onload = function(){
  const pushButton = document.querySelectorAll('.push');
  const explanation = document.querySelectorAll('.explanation');

  pushButton[0].addEventListener('click',()=>{
    localStorage.setItem('payCheck','완료');
  });
  pushButton[1].addEventListener('click',()=>{
    localStorage.removeItem('payBy');
  });
  pushButton[2].addEventListener('click',()=>{
    localStorage.setItem('payCheck','완료');
  });

  explanation[1].innerHTML = `결제 금액 : ${localStorage.selectedMenuPrice}`;
}
