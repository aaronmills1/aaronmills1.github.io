// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 25;
const balls = [];
let stopped=false;
let header = document.getElementsByClassName("masthead")[0];
for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    header.appendChild(ball);
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    let size = `${Math.random()+0.5}em`
    ball.style.width = size;
    ball.style.height = size;
    balls.push(ball);
}
let isMouseHover = false
header.addEventListener("mouseleave", function (event) {
    isMouseHover = false
}, false);
header.addEventListener("mouseover", function (event) {
    isMouseHover = true
}, false);

let mousex = document.body.offsetWidth / 2
let mousey = document.body.offsetHeight / 2
$(document).mousemove(function (e) {
    if(isMouseHover&&!stopped){
        setTimeout(1000);
        let randuration = (Math.random() + 1) * 500; // random duration
        mousex = e.pageX - (window.innerWidth / 2)
        mousey = e.pageY - (window.innerHeight / 2)
        balls.forEach((el, i, ra) => {
            el.animate(
                [
                    {transform: `translate(${el.positionY}, ${el.positionY})`},
                    {transform: `translate(${mousex}px, ${mousey}px)`}
                ],
                {
                    duration: randuration,
                    direction: "alternate",
                    fill: "both",
                    //iterations: Infinity,
                    easing: "ease-in-out"
                }
            );
        });
    }

});


function pageTopHide() {
    var container = $('.masthead');

    var scrollTop = $(window).scrollTop();
    var scale = scrollTop / window.screen.height;
    ;
    if (scale > 1)
        scale = 1;
    container.find('.masthead-avatar').css({transform: 'scale(' + (1 - (scale * 2)) + ')'});
    container.find('.masthead-heading').css({transform: 'scale(' + (1 - scale / 1.5) + ')'});
    container.find('.page-nav').css({transform: 'scale(' + (1 - scale / 2.5) + ')'});

}

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    let scrollElements = document.querySelectorAll(".skills");
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
    pageTopHide();
});