const nav = document.querySelector('.navbar');

window.addEventListener("scroll", function(event){
    var scrolling = this.scrollY;

    if (scrolling > 0) {
        nav.style.setProperty('background-color', '#11151C');
    }
    else {
        nav.style.setProperty('background-color', 'rgba(0, 0, 0, 0)');
    }
});