let i = 1;

function addTodo(todo) {
    let ul = document.querySelector(".list")
    let duplicate = document.querySelector(".initial").cloneNode(true)
    duplicate.className = `list-element item${i}`;
    div = duplicate.childNodes[3];
    div.childNodes[1].className = `form-check-input mt-0 checkbox item${i}`;
    div.childNodes[3].className = `item${i} delete`;
    duplicate.childNodes[1].innerText = todo;
    i++;
    console.log(duplicate.childNodes);
    ul.appendChild(duplicate);
    deleteFunc();


}


document.querySelector(".submit-button").addEventListener("click", (e) => {
    newTodo = document.querySelector(".input-text")
    if (newTodo.value != "") {
        addTodo(newTodo.value);
        resetField(newTodo);
    }
})

document.querySelector(".list").addEventListener("change", (e) => {
    selectedCheckbox = e.path[0].classList[3];
    nodeList = document.querySelectorAll(`.${selectedCheckbox}`);
    console.log(nodeList);
    if (nodeList[1].checked) {
        nodeList[0].style.textDecoration = "line-through";
        nodeList[0].style.color = "grey"


    }
    else {
        nodeList[0].style.textDecoration = null;
        nodeList[0].style.color = "black"

    }
})

function deleteFunc() {
    document.querySelectorAll(".delete").forEach((d) => {
        d.addEventListener("click", (e) => {
            document.querySelectorAll(`.${e.path[1].classList[0]}`).forEach((g) => {
                g.remove()
            });


        })
    })
}

function resetField(newTodo) {
    newTodo.value = null;
}


