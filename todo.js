let list = document.getElementById("list");
let removedDisplay = document.getElementById("removed");
let removedCountDisplay = document.getElementById("removedCount");

let removedCount = 0;

function updateColours() {

    let items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {

        if (i % 2 === 0) {
            items[i].style.backgroundColor = "white";
        } else {
            items[i].style.backgroundColor = "yellow";
        }

    }

}

document.getElementById("add").addEventListener("click", function () {

    let input = document.getElementById("item");
    let text = input.value.trim();

    if (text !== "") {

        let words = text.split(" ");

        for (let i = 0; i < words.length; i++) {

            let li = document.createElement("li");
            li.textContent = words[i];
            list.appendChild(li);

        }

    }

    updateColours();
    input.value = "";

});

document.getElementById("remove").addEventListener("click", function () {

    let input = document.getElementById("item");
    let text = input.value.trim().toLowerCase();

    let items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {

        if (items[i].textContent.toLowerCase() === text) {

            let removedItem = items[i].textContent;

            list.removeChild(items[i]);

            removedDisplay.innerHTML += "<div style='color:red;font-weight:bold'>" + removedItem + "</div>";

            removedCount++;

            removedCountDisplay.innerHTML =
                "<span style='color:green'>" + removedCount + " item(s) removed</span>";

            break;

        }

    }

    updateColours();
    input.value = "";

});
