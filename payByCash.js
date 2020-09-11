window.onload = function(){
  const explanation = document.querySelectorAll('.explanation');

  function nextStep(){
    setTimeout(()=>{
      location.href = 'cashReceipt.html';
    },4000);
    setTimeout(()=>{
      localStorage.setItem('payCheck', '완료');
    });
  }

  explanation[1].innerHTML = `결제 금액 : ${localStorage.selectedMenuPrice}`;
  nextStep();
}
