var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

var numSlide = document.querySelectorAll(".slide").length;
var numDots = document.querySelectorAll(".dot").length;
console.log(numDots);

let timoutID;

let currentSlide = 1;
let curerntDot = 1;

next.addEventListener("click", () => {
    currentSlide++;
    curerntDot++;
    clearTimeout(timoutID);
    updateImg();
})

prev.addEventListener("click", () => {
    currentSlide--;
    curerntDot--;
    clearTimeout(timoutID);
    updateImg();
})

var slides = document.querySelector(".slides");

function updateImg(){
    if (currentSlide > numSlide){
        currentSlide = 1;
        curerntDot = 1;
    }
    else if (currentSlide < 1){
        currentSlide = numSlide;
        curerntDot = numDots;
    }

    slides.style.transform = `translateX(-${(currentSlide - 1) * 100}vw)`;

    if (currentSlide == 1){
        document.getElementById('dot1').style.backgroundColor = "#fff";
        document.getElementById('dot2').style.backgroundColor = "#888888";
    }
    else{
        document.getElementById('dot1').style.backgroundColor = "#888888";
        document.getElementById('dot2').style.backgroundColor = "#fff";
    }

    timoutID = setTimeout(() => {
        currentSlide++;
        updateImg();
    }, 5000);
}

updateImg();