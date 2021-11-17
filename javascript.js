

window.onload = function () {
    let images = document.querySelector("img");
    let headers = document.querySelector("h1");
    let colors = document.querySelectorAll("td");


    images.addEventListener("click", imageClicked);

    headers.addEventListener("click", headerClicked);


    for (let color of colors) {
        color.addEventListener("click", colorClicked);
    }
    

}

function imageClicked(event) {
    let target = event.currentTarget;

    if (target.classList.contains("expanded")) {
        target.classList.remove("expanded");
    } else {
        target.classList.add("expanded");
    }
}

function headerClicked(event) {
    let target = event.currentTarget;

    if (target.classList.contains("enlarged")) {
        target.classList.remove("enlarged");
    } else {
        target.classList.add("enlarged");
    }
}

function colorClicked(event) {
    let target = event.currentTarget;

    if (target.classList.contains("enlarged2")) {
        target.classList.remove("enlarged2");
    } else {
        target.classList.remove("enlarged2");
    }
}
