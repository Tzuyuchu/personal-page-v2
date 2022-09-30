$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
});

if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.className = "light";
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    document.documentElement.className = event.matches ? "dark" : "light";
});

const setTheme = () => {
    if(document.documentElement.className == "light") {
        document.documentElement.className = "dark";
    } else {
        document.documentElement.className = "light"
    }
};
