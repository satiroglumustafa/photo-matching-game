import {imgList} from "./data.js";

const matchAppFunct = () => {
    const rootElement = document.querySelector("#root")
    const newElement = document.createElement('div')
    newElement.classList.add('img-box-list')
    rootElement.appendChild(newElement)
    rootElement.insertAdjacentHTML('beforeend',
        `
        <div class="matched-text"> Eşleşen Kart Sayısı: <div class="matched-count">0</div></div>
        `
    )

    const matchedCount = document.querySelector('.matched-count')

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
        
        const openedCards = document.querySelectorAll('.back-img.active');

        if (openedCards.length === 2) {
            const firstCard = openedCards[0];
            const secondCard = openedCards[1];
            const firstTitle = firstCard.querySelector('.view-img').getAttribute('data-title');
            const secondTitle = secondCard.querySelector('.view-img').getAttribute('data-title');

            if (firstTitle === secondTitle) {

                setTimeout(() => {
                    firstCard.classList.add('matched');
                    secondCard.classList.add('matched');
                    firstCard.classList.remove('active');
                    secondCard.classList.remove('active');
                    let count = Number(matchedCount.textContent);
                    matchedCount.textContent = count + 1;
                }, 500);
            } else {
     
                setTimeout(() => {
                    firstCard.classList.remove('active');
                    secondCard.classList.remove('active');
                }, 500);
            }

            imgItems.forEach(item => {
                item.addEventListener('click', handleCardClick);
            });
        }
    }
}

export { matchAppFunct }
