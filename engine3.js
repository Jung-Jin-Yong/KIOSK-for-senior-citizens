window.onload = function(){
  var menuButton3 = document.querySelectorAll('.menu');
  var pushButton = document.querySelectorAll('.push');
  var hatingMaterial = new Array();
  var checkNum = [0,0,0,0,0,0,0,0,0];

  menuButton3[0].addEventListener('click',()=>{
    if(checkNum[0] === 0){
      hatingMaterial.push('beef');
      checkNum[0] = 1;
      menuButton3[0].style.backgroundColor="blue";
      menuButton3[0].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='beef'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[0] = 0;
      menuButton3[0].style.backgroundColor="white";
      menuButton3[0].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });
  menuButton3[1].addEventListener('click',()=>{
    if(checkNum[1] === 0){
      hatingMaterial.push('pork');
      checkNum[1] = 1;
      menuButton3[1].style.backgroundColor="blue";
      menuButton3[1].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='pork'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[1] = 0;
      menuButton3[1].style.backgroundColor="white";
      menuButton3[1].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });
  menuButton3[2].addEventListener('click',()=>{
    if(checkNum[2] === 0){
      hatingMaterial.push('tomato');
      checkNum[2] = 1;
      menuButton3[2].style.backgroundColor="blue";
      menuButton3[2].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='tomato'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[2] = 0;
      menuButton3[2].style.backgroundColor="white";
      menuButton3[2].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });
  menuButton3[3].addEventListener('click',()=>{
    if(checkNum[3] === 0){
      hatingMaterial.push('shrimp');
      checkNum[3] = 1;
      menuButton3[3].style.backgroundColor="blue";
      menuButton3[3].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='shrimp'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[3] = 0;
      menuButton3[3].style.backgroundColor="white";
      menuButton3[3].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });
  menuButton3[4].addEventListener('click',()=>{
    if(checkNum[4] === 0){
      hatingMaterial.push('chicken');
      checkNum[4] = 1;
      menuButton3[4].style.backgroundColor="blue";
      menuButton3[4].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='chicken'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[4] = 0;
      menuButton3[4].style.backgroundColor="white";
      menuButton3[4].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });
  menuButton3[5].addEventListener('click',()=>{
    if(checkNum[5] === 0){
      hatingMaterial.push('cheeze');
      checkNum[5] = 1;
      menuButton3[5].style.backgroundColor="blue";
      menuButton3[5].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='cheeze'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[5] = 0;
      menuButton3[5].style.backgroundColor="white";
      menuButton3[5].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });
  menuButton3[6].addEventListener('click',()=>{
    if(checkNum[6] === 0){
      hatingMaterial.push('pickle');
      checkNum[6] = 1;
      menuButton3[6].style.backgroundColor="blue";
      menuButton3[6].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='pickle'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[6] = 0;
      menuButton3[6].style.backgroundColor="white";
      menuButton3[6].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });
  menuButton3[7].addEventListener('click',()=>{
    if(checkNum[7] === 0){
      hatingMaterial.push('egg');
      checkNum[7] = 1;
      menuButton3[7].style.backgroundColor="blue";
      menuButton3[7].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='egg'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[7] = 0;
      menuButton3[7].style.backgroundColor="white";
      menuButton3[7].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });
  menuButton3[8].addEventListener('click',()=>{
    if(checkNum[8] === 0){
      hatingMaterial.push('otherSeafood');
      checkNum[8] = 1;
      menuButton3[8].style.backgroundColor="blue";
      menuButton3[8].style.color="white";
      console.log('확인');
      console.log(hatingMaterial);
    } else {
      for(var i = 0; i < hatingMaterial.length; i++){
        if(hatingMaterial[i]==='otherSeafood'){
          hatingMaterial.splice(i,1);
        }
      }
      checkNum[8] = 0;
      menuButton3[8].style.backgroundColor="white";
      menuButton3[8].style.color="black";
      console.log('확인');
      console.log(hatingMaterial);
    }
  });

  pushButton[0].addEventListener('click',() => {
    localStorage.setItem('hatingList',hatingMaterial);
  });
  pushButton[1].addEventListener('click',() => {
    localStorage.removeItem('thirdStep');
  });
  pushButton[2].addEventListener('click',() => {
    localStorage.setItem('hatingList',hatingMaterial);
  });
}
