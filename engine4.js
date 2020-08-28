window.onload = function(){
  const menuObject = [['bigMcSet','0','beef','tomato','빅맥 세트'],['doubleBeefBurgerSet','0','beef','tomato','더블 불고기버거세트'],['doubleCheezeBurgerSet','0','beef','cheeze','더블 치즈버거세트'],['eggBeefBurgerSet','0','beef','egg','에그불고기버거 세트'],['shshBurger','0','shrimp','tomato','슈슈 버거'],['beefBurgerSet','1','beef','tomato', '불고기 버거 세트'],['cheezeBurger','1','pork','cheeze','치즈버거 단품'],['burger1955Set','1','beef','cheeze','tomato', '1955버거 세트'],['MacChickenSet','1','chicken','tomato', '맥치킨 세트'],['oreoMcFlurry','2', '오레오 맥플러리'],['bananaOreoMcFlurry','2','바나나오레오 맥플러리'],['strawBerryOreoMcFlurry','2', '딸기 오레오 멕플러리'],['iceCreamCone','2', '아이스크림콘'],['ChocoCone','2', '초코콘'],['caramelSundayIceCream','2', '카라멜 선데이 아이스크림'],['appleFie','2', '애플파이']];

  const menuArray = [['bigMcSet', 'doubleBeefBurgerSet', 'doubleCheezeBurgerSet', 'eggBeefBurgerSet', 'shshBurger'], ['beefBurgerSet', 'cheezeBurger', 'burger1955Set', 'MacChickenSet']];
  const wantingList = localStorage.wantingList.split(',');
  const hatingList = localStorage.hatingList.split(',');
  const firstStep = localStorage.firstStep;
  const recommendMenuImage = document.getElementById('recommendMenuImage');
  const showMenuName = document.querySelector('#recommendMenu');
  let randomMenuList = [];
  let goodpoint = 0;
  let badpoint = 0;

  function selectingMenu(){
    for(var i = 0 ; i<wantingList.length; i++){
      for(var j = 0 ; j < menuObject.length ; j++){
        for(var k = 0 ; k < menuObject[j].length ; k++){
          if((firstStep===menuObject[j][1])&&(wantingList[i]===menuObject[j][k])){
            goodpoint++;
          }
        }
        if(goodpoint>0){
          randomMenuList.splice(0,0,menuObject[j][4]);
          goodpoint = 0;
        }
      }
    }
    console.log(randomMenuList);
    let randomNumber = Math.floor(Math.random()*randomMenuList.length);
    showMenuName.innerHTML = randomMenuList[randomNumber];

    recommendMenuImage.src = ``;
  }

  selectingMenu();
}
