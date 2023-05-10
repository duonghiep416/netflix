const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const swipeLeft = $(".slider__swipe-left");
const swipeRight = $(".slider__swipe-right");
const slideMain = $(".slider-main");
let positionX = 0;
let index = 0;

const sliderInfos = [
    {
        name: "Spider-man: No Way Home",
        src: "./assets/img/spiderman-banner.jpg",
    },
    {
        name: "Doctor Strange",
        src: "./assets/img/doctorStrange-banner.jpg",
    },
    {
        name: "Thor: Love And Thunder",
        src: "./assets/img/thor.png",
    },
    {
        name: "Avengers Endgame",
        src: "./assets/img/endgame.png",
    },
    {
        name: "Wednesday",
        src: "./assets/img/wednesday.jpg",
    },
];

function render() {
    sliderInfos.forEach((sliderInfo) => {
        console.log(sliderInfo.src);
        slideMain.insertAdjacentHTML(
            "beforeend",
            `<div class="slider-item">
        <img
            src=${sliderInfo.src}
            alt=""
            class="slider-item__img"
        />
        <div class="slider-info">
            <p class="slider-film__name">
                ${sliderInfo.name}
            </p>
            <button class="btn watchBtn">Watch</button>
            <button class="btn addListBtn">
                My list
                <i class="ri-add-line"></i>
            </button>
        </div>
    </div>`
        );
    });
}

function active() {
    const slideItem = $$(".slider-item");

    swipeLeft.addEventListener("click", function () {
        handleChangeSlide(1);
    });
    swipeRight.addEventListener("click", function () {
        handleChangeSlide(-1);
    });

    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            index--;
            positionX += 100;
            slideMain.style.left = `${positionX}%`;
        } else if (direction === -1) {
            if (index >= slideItem.length - 1) {
                index = slideItem.length - 1;
                return;
            }
            positionX -= 100;
            slideMain.style.left = `${positionX}%`;
            index++;
        }
    }
    setInterval(function () {
        handleChangeSlide(-1);
    }, 5000);
}
function start() {
    render();
    active();
}
start();
