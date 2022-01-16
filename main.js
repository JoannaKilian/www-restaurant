const upperBaner = document.querySelector("section.bannerFixed");
const coursesSection = document.querySelector("section.course");
const courseButton = document.querySelector(".course button");
const courseCover = document.querySelector("div.course2")

let arrow= true;
let buttonOn= true;

function moveBaner() {
    const scrollWindow = window.scrollY;
    const coursesSectionTop = coursesSection.offsetTop;
    
    if(scrollWindow > coursesSectionTop - 70 & arrow) {
        upperBaner.classList.toggle("visible");
        arrow = !arrow
    }
    if(scrollWindow <= coursesSectionTop - 70 & !arrow) {
        upperBaner.classList.toggle("visible");
        arrow = !arrow;
    }
}
window.addEventListener("scroll", moveBaner);

courseButton.addEventListener("click", function(){
    
    if(buttonOn) {
        courseCover.classList.add("visibleCourse2");
        courseButton.innerHTML = "Show less";
        buttonOn = !buttonOn
    }
    else if(!buttonOn) {
        courseCover.classList.remove("visibleCourse2");
        courseButton.innerHTML = "Show more";
        buttonOn = !buttonOn;
    }
    
})