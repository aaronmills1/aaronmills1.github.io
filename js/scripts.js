




function pageTopHide() {
    var container = $('.masthead');
    if (container.length == 0)
        return;

        var scrollTop = $(window).scrollTop();
        var scale = scrollTop/window.screen.height;;
        if (scale > 1)
            scale = 1;

        container.css({opacity:1-scale, transform:'translate3d(0, '+(-scrollTop/2.5)+'px, 0)'})
        container.find('.masthead-avatar').css({transform: 'scale('+(1-(scale*2))+')'});
        container.find('.masthead-heading').css({transform: 'scale('+(1-scale/1.5)+')'});
        container.find('.page-nav').css({transform: 'scale('+(1-scale/2.5)+')'});

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