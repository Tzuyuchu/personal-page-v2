$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
});

const setTheme = () => {
    if(document.documentElement.className == "light") {
        document.documentElement.className = "dark";
    } else {
        document.documentElement.className = "light"
    }
};
