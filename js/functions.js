import {imgList} from "./data.js";


const matchAppFunct = ()=>{

const rootElement = document.querySelector("#root")
const newElement  = document.createElement('div')
newElement.classList.add('img-box-list')
rootElement.appendChild(newElement)


const originalArray = imgList
const shuffledArray = originalArray.sort(() => Math.random() - 0.5);

shuffledArray.forEach(imgObjItem => {
    newElement.insertAdjacentHTML("beforeend",
`
    <div class="img-item">
        <div class="front-img">
            <a href="javascript:;">
                <img src="https://via.placeholder.com/150x150?text=?">
            </a>
        </div>
        <div class="back-img">
            <a href="javascript:;">
                <img class="view-img" src="${imgObjItem.imgSource}" data-id=${imgObjItem.imgId} data-title="${imgObjItem.imgTitle}">
            </a>
        </div>
    </div> 
`)
});


const imgItems = document.querySelectorAll('.img-item');

imgItems.forEach(item => {
    item.addEventListener('click', handleCardClick);
});

function handleCardClick() {
    const backImg = this.querySelector('.back-img');
    backImg.classList.add('active');
    
    if (backImg.classList.contains('active')) {
        setTimeout(() => {
            backImg.classList.remove('active');
              
             const allClosed = document.querySelectorAll('.back-img.active').length === 0;
             if (allClosed) {
                 imgItems.forEach(item => {
                     item.addEventListener('click', handleCardClick);
                 });
             }
        }, 3000);
    }

    const openedCards = document.querySelectorAll('.back-img.active');
  

    if (openedCards.length === 2) {
        imgItems.forEach(item => {
            item.removeEventListener('click', handleCardClick);
        });
    }
     
}


}

export{matchAppFunct}