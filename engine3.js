window.onload = function(){
  var menuButton3 = document.querySelectorAll('.menu');
  var pushButton = document.querySelectorAll('.push');
  var hatingMaterial = new Array();

  menuButton3[0].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('beef');
    console.log(hatingMaterial);
    menuButton3[0].style.backgroundColor="blue";
    menuButton3[0].style.color="white";
  });
  menuButton3[1].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('pork');
    console.log(hatingMaterial);
    menuButton3[1].style.backgroundColor="blue";
    menuButton3[1].style.color="white";
  });
  menuButton3[2].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('tomato');
    console.log(hatingMaterial);
    menuButton3[2].style.backgroundColor="blue";
    menuButton3[2].style.color="white";
  });
  menuButton3[3].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('shrimp');
    console.log(hatingMaterial);
    menuButton3[3].style.backgroundColor="blue";
    menuButton3[3].style.color="white";
  });
  menuButton3[4].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('chicken');
    console.log(hatingMaterial);
    menuButton3[4].style.backgroundColor="blue";
    menuButton3[4].style.color="white";
  });
  menuButton3[5].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('cheeze');
    console.log(hatingMaterial);
    menuButton3[5].style.backgroundColor="blue";
    menuButton3[5].style.color="white";
  });
  menuButton3[6].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('pickle');
    console.log(hatingMaterial);
    menuButton3[6].style.backgroundColor="blue";
    menuButton3[6].style.color="white";
  });
  menuButton3[7].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('egg');
    console.log(hatingMaterial);
    menuButton3[7].style.backgroundColor="blue";
    menuButton3[7].style.color="white";
  });
  menuButton3[8].addEventListener('click',()=>{
    console.log('확인');
    hatingMaterial.push('otherSeafood');
    console.log(hatingMaterial);
    menuButton3[8].style.backgroundColor="blue";
    menuButton3[8].style.color="white";
  });

  pushButton[0].addEventListener('click',() => {
    localStorage.setItem('thirdStep',hatingMaterial);
  });
  pushButton[1].addEventListener('click',() => {
    localStorage.setItem('thirdStep',hatingMaterial);
  });
  pushButton[2].addEventListener('click',() => {
    localStorage.setItem('thirdStep',hatingMaterial);
  });
}
