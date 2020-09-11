window.onload = function (){
  const numberButton = document.querySelectorAll(".menu2");
  let numberBlank = document.querySelector("#numberBlank");
  let numberArray = [];
  const pushButton = document.querySelectorAll(".push");

  numberButton[0].addEventListener("click", ()=>{
    numberArray.push('0');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[1].addEventListener("click", ()=>{
    numberArray.push('1');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[2].addEventListener("click", ()=>{
    numberArray.push('2');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[3].addEventListener("click", ()=>{
    numberArray.push('3');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[4].addEventListener("click", ()=>{
    numberArray.push('4');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[5].addEventListener("click", ()=>{
    numberArray.push('5');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[6].addEventListener("click", ()=>{
    numberArray.push('6');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[7].addEventListener("click", ()=>{
    numberArray.push('7');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[8].addEventListener("click", ()=>{
    numberArray.push('8');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[9].addEventListener("click", ()=>{
    numberArray.push('9');
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[10].addEventListener("click", ()=>{
    numberArray.splice(numberArray.length-1,1);
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });
  numberButton[11].addEventListener("click", ()=>{
    numberArray.splice(0,numberArray.length);
    numberBlank.innerHTML = `${numberArray.join('')}`;
  });

  pushButton[0].addEventListener("click",()=>{
    localStorage.setItem('PhoneNumber',`${numberArray.join('')}`);
  });
  pushButton[2].addEventListener("click", ()=>{
    localStorage.setItem('PhoneNumber',`${numberArray.join('')}`);
  });
  pushButton[3].addEventListener("click", ()=>{
    localStorage.removeItem('firstStep');
    localStorage.removeItem('payCheck');
    localStorage.removeItem('payBy');
    localStorage.removeItem('wantingList');
    localStorage.removeItem('selectingMenuForSearchingImage');
    localStorage.removeItem('selectedMenuPrice');
    localStorage.removeItem('hereOrToGo');
    localStorage.removeItem('selectedMenu');
  })
}
