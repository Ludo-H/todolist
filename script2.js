// Variables 
let form = document.querySelector("form");
let write = document.querySelector("input");
let list = document.querySelector("#liste");
let lign = document.querySelector("#liste > li");



// Fonctions
function locStor(){
    window.localStorage.todoList = list.innerHTML;
}

function getTodos(){
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = `<li>Mettez un max de Todos !`;
    }
}

window.addEventListener("load", getTodos);

// Evenements
form.addEventListener("submit", (e) => {
    e.preventDefault();

    list.innerHTML += `<li>${write.value}</li>`;
    write.value = "";
    locStor();
});

list.addEventListener("click", (e) => {
    if(e.target.classList.contains("checked")){
        e.target.remove();
    }else{
        e.target.classList.add("checked");
    }
    locStor();
});