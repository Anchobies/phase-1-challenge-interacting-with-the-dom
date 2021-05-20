let count = 0;
let likeCount = 0;
let intervalID = 0;

let increaseCount = () => {
    count++;

    document.querySelector("#counter").textContent = count;
}

let decreaseCount = () => {
    count--;

    document.querySelector("#counter").textContent = count;
}

let addLike = () => {
    let element = document.querySelector(`[data-num="${count}"]`);

    if (element != null) {
        element.innerHTML = `${count} has been liked <span>${++likeCount}</span> times`;
    } else {
        let newElement = document.createElement("li");
        likeCount = 0;

        newElement.innerHTML = `${count} has been liked <span>${++likeCount}</span> time`;
        newElement.setAttribute("data-num", count);
        document.querySelector("ul").append(newElement);
    }
}

let submitComment = () => {
    let newComment = document.createElement("p");
    let inputField = document.querySelector("input");
    newComment.textContent = inputField.value;
    inputField.value = "";
    document.querySelector("#list").append(newComment);
}

document.addEventListener("DOMContentLoaded", function() {
    intervalID = window.setInterval(increaseCount, 1000);
})

document.addEventListener("click", function(e) {
    let thisButton = document.querySelector("button#pause");

    if (e.target === thisButton) {
        if (thisButton.textContent === " pause ") {
            window.clearInterval(intervalID);
            thisButton.textContent = " resume ";
            document.querySelector("button#plus").disabled = true;
            document.querySelector("button#minus").disabled = true;
            document.querySelector("button#heart").disabled = true;
            document.querySelector("button#submit").disabled = true;
        } else {
            intervalID = window.setInterval(increaseCount, 1000);
            thisButton.textContent = " pause ";
            document.querySelector("button#plus").disabled = false;
            document.querySelector("button#minus").disabled = false;
            document.querySelector("button#heart").disabled = false;
            document.querySelector("button#submit").disabled = false;
        }
    } else if (e.target === document.querySelector("button#plus")) {
        increaseCount();
    } else if (e.target === document.querySelector("button#minus")) {
        decreaseCount();
    } else if (e.target === document.querySelector("button#heart")) {
        addLike();
    } 
})

document.addEventListener("submit", function(e) {
    e.preventDefault();
    submitComment();
})
