window.onload = function(){
  var menuButton2 = document.querySelectorAll('.menu2');
  var pushButton = document.querySelectorAll('.push');
  var wantingMaterial = new Array();
  var checkNum = [0,0,0,0,0,0];
  var selectedNothingCheck = 0;

  menuButton2[0].addEventListener('click',()=>{
    if(checkNum[0] === 0){
      wantingMaterial.push('beef');
      checkNum[0] = 1;
      menuButton2[0].style.backgroundColor="blue";
      menuButton2[0].style.color="white";
      selectedNothingCheck++;
      console.log('확인');
      console.log(wantingMaterial);
    } else {
      for(var i = 0; i < wantingMaterial.length; i++){
        if(wantingMaterial[i]==='beef'){
          wantingMaterial.splice(i,1);
        }
      }
      checkNum[0] = 0;
      selectedNothingCheck--;
      menuButton2[0].style.backgroundColor="white";
      menuButton2[0].style.color="black";
      console.log('확인');
      console.log(wantingMaterial);
    }
  });
  menuButton2[1].addEventListener('click',()=>{
    if(checkNum[1] === 0){
      wantingMaterial.push('pork');
      checkNum[1] = 1;
      menuButton2[1].style.backgroundColor="blue";
      menuButton2[1].style.color="white";
      selectedNothingCheck++;
      console.log('확인');
      console.log(wantingMaterial);
    } else {
      for(var i = 0; i < wantingMaterial.length; i++){
        if(wantingMaterial[i]==='pork'){
          wantingMaterial.splice(i,1);
        }
      }
      checkNum[1] = 0;
      selectedNothingCheck--;
      menuButton2[1].style.backgroundColor="white";
      menuButton2[1].style.color="black";
      console.log('확인');
      console.log(wantingMaterial);
    }
  });
  menuButton2[2].addEventListener('click',()=>{
    if(checkNum[2] === 0){
      wantingMaterial.push('tomato');
      checkNum[2] = 1;
      menuButton2[2].style.backgroundColor="blue";
      menuButton2[2].style.color="white";
      selectedNothingCheck++;
      console.log('확인');
      console.log(wantingMaterial);
    } else {
      for(var i = 0; i < wantingMaterial.length; i++){
        if(wantingMaterial[i]==='tomato'){
          wantingMaterial.splice(i,1);
        }
      }
      checkNum[2] = 0;
      selectedNothingCheck--;
      menuButton2[2].style.backgroundColor="white";
      menuButton2[2].style.color="black";
      console.log('확인');
      console.log(wantingMaterial);
    }
  });
  menuButton2[3].addEventListener('click',()=>{
    if(checkNum[3] === 0){
      wantingMaterial.push('shrimp');
      checkNum[3] = 1;
      menuButton2[3].style.backgroundColor="blue";
      menuButton2[3].style.color="white";
      selectedNothingCheck++;
      console.log('확인');
      console.log(wantingMaterial);
    } else {
      for(var i = 0; i < wantingMaterial.length; i++){
        if(wantingMaterial[i]==='shrimp'){
          wantingMaterial.splice(i,1);
        }
      }
      checkNum[3] = 0;
      selectedNothingCheck--;
      menuButton2[3].style.backgroundColor="white";
      menuButton2[3].style.color="black";
      console.log('확인');
      console.log(wantingMaterial);
    }
  });
  menuButton2[4].addEventListener('click',()=>{
    if(checkNum[4] === 0){
      wantingMaterial.push('chicken');
      checkNum[4] = 1;
      menuButton2[4].style.backgroundColor="blue";
      menuButton2[4].style.color="white";
      selectedNothingCheck++;
      console.log('확인');
      console.log(wantingMaterial);
    } else {
      for(var i = 0; i < wantingMaterial.length; i++){
        if(wantingMaterial[i]==='chicken'){
          wantingMaterial.splice(i,1);
        }
      }
      checkNum[4] = 0;
      selectedNothingCheck--;
      menuButton2[4].style.backgroundColor="white";
      menuButton2[4].style.color="black";
      console.log('확인');
      console.log(wantingMaterial);
    }
  });
  menuButton2[5].addEventListener('click',()=>{
    if(checkNum[5] === 0){
      wantingMaterial.push('cheeze');
      checkNum[5] = 1;
      menuButton2[5].style.backgroundColor="blue";
      menuButton2[5].style.color="white";
      selectedNothingCheck++;
      console.log('확인');
      console.log(wantingMaterial);
    } else {
      for(var i = 0; i < wantingMaterial.length; i++){
        if(wantingMaterial[i]==='cheeze'){
          wantingMaterial.splice(i,1);
        }
      }
      checkNum[5] = 0;
      selectedNothingCheck--;
      menuButton2[5].style.backgroundColor="white";
      menuButton2[5].style.color="black";
      console.log('확인');
      console.log(wantingMaterial);
    }
  });

  pushButton[0].addEventListener('click',() => {
    if(selectedNothingCheck>0){
      localStorage.setItem('wantingList',wantingMaterial);
      location.href = "loading.html";
    }else {
      alert('재료 하나 이상을 선택해주세요!');
    }
  });
  pushButton[1].addEventListener('click',() => {
    localStorage.removeItem('wantingList');
  });
  pushButton[2].addEventListener('click',() => {
    localStorage.setItem('wantingList',wantingMaterial);
    if(selectedNothingCheck>0){
      localStorage.setItem('wantingList',wantingMaterial);
      location.href = "loading.html";
    }else {
      alert('재료 하나 이상을 선택해주세요!');
    }
  });
  pushButton[3].addEventListener('click',() => {
    localStorage.removeItem('wantingList');
    localStorage.removeItem('firstStep');
  })
}
