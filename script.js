// Créer un form pour taper les todos

// Ajouter sur le dom ce qui est tapé dans l'input à la validation du form, monImpunt.value

// Supprimer un todo lorsque l'on click dessus 

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter les todos

// Variables
let form = document.querySelector("form");
let input = document.querySelector("input");
let container = document.querySelector(".container");
let liste = document.querySelector("#liste");



// Fonctions
function storeList(){
    window.localStorage.todoList = liste.innerHTML;
}

function getTodos(){
    if(window.localStorage.todoList){
        liste.innerHTML = window.localStorage.todoList;
    }else{
        liste.innerHTML = `<li>Cliquez sur un Todo pour le supprimer</li>`;
    }
   
}

window.addEventListener("load", getTodos);


// Evenements
form.addEventListener("submit", (e) => {
    e.preventDefault();
    liste.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
    storeList();
});

liste.addEventListener("click", (e) => {
    if(e.target.classList.contains("checked")){
        e.target.remove();
    }else{
    e.target.classList.add("checked");
    }
    storeList();
})