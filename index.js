$(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate(
        {
            scrollTop: $($.attr(this, "href")).offset().top,
        },
        700
    );
});

if (
    window.matchMedia &&
    !window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    document.documentElement.className = "light";
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        document.documentElement.className = event.matches ? "dark" : "light";
    });

const setTheme = () => {
    if (document.documentElement.className == "light") {
        document.documentElement.className = "dark";
    } else {
        document.documentElement.className = "light";
    }
};

let comments = "";

const thank = () => {
    if (document.getElementById("comment").value === "") {
        return;
    }
    const newComment = document.getElementById("comment").value;
    comments += '"' + newComment + '"<br>';
    const commentBox = document.getElementById("past-comments");
    commentBox.innerHTML = comments;
    if (!commentBox.classList.contains("past-comments")) {
        commentBox.classList.add("past-comments");
    }
    document.getElementById("thank-you").innerHTML =
        "Thank you for visiting my page!";
    document.getElementById("comment").value = "";
};
