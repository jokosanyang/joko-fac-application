function scrollAppear() {
    var text = document.querySelectorAll(".text");
    var scrollPosition = window.innerHeight / 2;
    if (text[0].getBoundingClientRect().top < scrollPosition) {
        text[0].classList.add('visible');
    }
    if (text[1].getBoundingClientRect().top < scrollPosition) {
        text[1].classList.add('visible');
    }
    if (text[2].getBoundingClientRect().top < scrollPosition) {
        text[2].classList.add('visible');
    }
    if (text[3].getBoundingClientRect().top < scrollPosition) {
        text[3].classList.add('visible');
    }
}
window.addEventListener('scroll', scrollAppear);