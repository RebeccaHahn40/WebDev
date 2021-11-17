

window.onload = function () {
    let images = document.querySelector("img");
    images.addEventListener("click", imageClicked);

    let colors = document.querySelector("td");
    colors.addEventListener("mouseover", colorHovered);
}

function imageClicked(event) {
    let target = event.currentTarget;

    event.stopPropagation();
    if (target.classList.contains("expanded")) {
        target.classList.remove("expanded");
    } else {
        target.classList.add("expanded");
    }
}

function colorHovered(event) {
    let target = event.currentTarget;

    event.stopPropagation();
    if (target.classList.contains("hovered")) {
        target.classList.remove("hovered");
    } else {
        target.classList.remove("hovered");
    }
}
