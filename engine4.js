window.onload = function(){
  const menuObject = [['bigMcSet','0','beef','pork','tomato','7000원','빅맥 세트'],['doubleBeefBurgerSet','0','beef','tomato','6000원','더블 불고기버거세트'],['doubleCheezeBurgerSet','0','beef','cheeze','6500원','더블 치즈버거세트'],['eggBeefBurgerSet','0','beef','egg','5900원','에그불고기버거 세트'],['shshBurger','0','shrimp','tomato','5500원','슈슈 버거'],['beefBurgerSet','1','beef','tomato','4500원','불고기 버거 세트'],['cheezeBurger','1','pork','cheeze','4000원','치즈버거 단품'],['burger1955Set','1','pork','cheeze','tomato','4900원','1955버거 세트'],['MacChickenSet','1','chicken','tomato','4900원','맥치킨 세트'],['oreoMcFlurry','2','2500원','오레오 맥플러리'],['bananaOreoMcFlurry','2','2500원','바나나오레오 맥플러리'],['strawBerryOreoMcFlurry','2','2900원','딸기 오레오 멕플러리'],['iceCreamCone','2','1500원','아이스크림콘'],['ChocoCone','2','1500원','초코콘'],['caramelSundayIceCream','2','1500원','카라멜 선데이 아이스크림'],['applePie','2','2000원','애플파이']];
  //메뉴 객체 파트입니다. menuObject[0~8]까지는 버거포함 메뉴, menuObject[9]부터는 디저트 메뉴입니다.

  const wantingList = localStorage.wantingList.split(',');
  const firstStep = localStorage.firstStep;
  const pushButton = document.querySelectorAll('.push');
  const recommendMenuImage = document.getElementById('recommendMenuImage');
  const showMenuName = document.querySelector('#recommendMenu');
  const explanation = document.querySelectorAll('.explanation');
  let randomMenuList = [];
  let randomMenuListForSearchingImage = [];
  let randomMenuPrice = [];
  let goodpoint = 0;
  let badpoint = 0;

  function selectingMenu(){
    if(firstStep!=="2"){
      for(var i = 0 ; i<wantingList.length; i++){
        for(var j = 0 ; j < menuObject.length ; j++){
          for(var k = 0 ; k < menuObject[j].length ; k++){
            if((firstStep===menuObject[j][1])&&(wantingList[i]===menuObject[j][k])){
              goodpoint++;
            }
          }
          if(goodpoint>0){
            randomMenuList.splice(0,0,menuObject[j][menuObject[j].length-1]);
            randomMenuListForSearchingImage.splice(0,0,menuObject[j][0]);
            randomMenuPrice.splice(0,0,menuObject[j][menuObject[j].length-2]);
            goodpoint = 0;
          }
        }
      }
    }else{
      for(var i = 9; i<menuObject.length;i++){
        randomMenuList.splice(0,0,menuObject[i][menuObject[i].length-1]);
        randomMenuListForSearchingImage.splice(0,0,menuObject[i][0]);
        randomMenuPrice.splice(0,0,menuObject[i][menuObject[i].length-2]);
      }
    }
    console.log(randomMenuList);
    console.log(randomMenuListForSearchingImage);
    randomMenuRecommend();
  }

  function randomMenuRecommend(){
    let randomNumber = Math.floor(Math.random()*randomMenuList.length);
    if(randomMenuList[randomNumber]!==localStorage.selectedMenu){
      showMenuName.innerHTML = randomMenuList[randomNumber];
      explanation[1].innerHTML = `가격은 ${randomMenuPrice[randomNumber]}입니다!`
      recommendMenuImage.src = `images/${randomMenuListForSearchingImage[randomNumber]}.jpg`;
      localStorage.setItem('selectedMenu', randomMenuList[randomNumber]);
      localStorage.setItem('selectedMenuPrice',randomMenuPrice[randomNumber]);
      localStorage.setItem('selectingMenuForSearchingImage', randomMenuListForSearchingImage[randomNumber]);
    }else {
      randomMenuRecommend();
    }

  }

  selectingMenu();

  pushButton[0].addEventListener('click',() => {
    localStorage.removeItem('selectedMenu');
  });
  pushButton[3].addEventListener('click',() => {
    localStorage.removeItem('firstStep');
    localStorage.removeItem('wantingList');
    localStorage.removeItem('selectedMenu');
  });
}
