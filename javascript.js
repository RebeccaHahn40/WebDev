

window.onload = function () {
    let images = document.querySelectorAll("img");
    let headers = document.querySelector("h1");
    let toggles = document.querySelectorAll("input[type=checkbox]");

    for (let image of images) {
        image.addEventListener("click", imageClicked);
    }

    headers.addEventListener("click", headerClicked);

    for (let toggle of toggles) {
        toggle.addEventListener("click", toggleFlipped);
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

function toggleFlipped(event) {
    let toggle = event.target;
    let list = [];
    let shoppingList1 = document.getElementById('outputBasket1');
    let shoppingList2 = document.getElementById('outputBasket2');
    let shoppingList3 = document.getElementById('outputBasket3');
    let shoppingList4 = document.getElementById('outputBasket4');
    let shoppingList5 = document.getElementById('outputBasket5');
    let shoppingList6 = document.getElementById('outputBasket6');


    switch (toggle.getAttribute("id")) {
        case "add-krispies":
            if (document.getElementById("add-krispies").checked == true) {
                shoppingList1.innerHTML = "$2.39 - Krispies";
            } else {
                shoppingList1.innerHTML = "";
            }
            break;
        case "add-life":
            if (document.getElementById("add-life").checked == true) {
                shoppingList2.innerHTML = "$2.99 - Life";
            } else {
                shoppingList2.innerHTML = "";
            }
            break;
        case "add-luckycharms":
            if (document.getElementById("add-luckycharms").checked == true) {
                shoppingList3.innerHTML = "$3.59 - Lucky Charms";
            } else {
                shoppingList3.innerHTML = "";
            }
            break;
        case "add-oreos":
            if (document.getElementById("add-oreos").checked == true) {
                shoppingList4.innerHTML = "$1.29 - Oreos";
            } else {
                shoppingList4.innerHTML = "";
            }
            break;
        case "add-ricekrispies":
            if (document.getElementById("add-ricekrispies").checked == true) {
                shoppingList5.innerHTML = "$3.39 - Rice Krispies";
            } else {
                shoppingList5.innerHTML = "";
            }
            break;
        case "add-booberry":
            if (document.getElementById("add-booberry").checked == true) {
                shoppingList6.innerHTML = "$1.99 - Boo Berry";
            } else {
                shoppingList6.innerHTML = "";
            }
            break;
    }
}
