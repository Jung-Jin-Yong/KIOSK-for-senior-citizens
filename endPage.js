window.onload = function(){
  let effectArea = document.querySelector('.showEffect');
  let menuImg = document.querySelector('.menuImg');
  function showEffect(){
    menuImg.src = `images/${localStorage.selectingMenuForSearchingImage}.jpg`;
    saveToFile_Chrome("orderList.text", JSON.stringify(localStorage));
    localStorage.removeItem('firstStep');
    localStorage.removeItem('payCheck');
    localStorage.removeItem('payBy');
    localStorage.removeItem('wantingList');
    localStorage.removeItem('selectingMenuForSearchingImage');
    localStorage.removeItem('selectedMenuPrice');
    localStorage.removeItem('hereOrToGo');
    localStorage.removeItem('selectedMenu');
    localStorage.removeItem('PhoneNumber');

    setTimeout(()=>{
      location.href='index.html';
    },4000);
  }

  function saveToFile_Chrome(fileName, content) {
    var blob = new Blob([content], { type: 'text/plain' });
    objURL = window.URL.createObjectURL(blob);

    // 이전에 생성된 메모리 해제
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;
    var a = document.createElement('a');
    a.download = fileName;
    a.href = objURL;
    a.click();
  }

  showEffect();
}
