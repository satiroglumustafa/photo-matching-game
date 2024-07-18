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
                <img class="view-img" src="" data-id=${imgObjItem.imgId} data-title="${imgObjItem.imgTitle}">
            </a>
        </div>
    </div> 
`)
});



imgItem.forEach(item => {
   
    item.addEventListener('click',()=>{
        const imgItem = document.querySelectorAll(".img-item")
        const imgTitle = document.querySelectorAll(".view-img")
        
        imgTitle.forEach(element => {
            const titleText = element.dataset.title
            console.log(titleText)
        });

     
        
    })
});

}

export{matchAppFunct}