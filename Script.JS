var todoform = document.getElementById("todoform");
var todoinput = document.getElementById("todoinput");
var todoitem = document.getElementById("todoitem");


todoform.addEventListener("submit",
    function(event){
        event.preventDefault();
        createItem(todoinput.value)
    }
)
function createItem(inputItems){
    var items = `<li>${inputItems}
    <button onclick="deleteElement(this)">Delete</button> </li>`;


    todoitem.insertAdjacentHTML("beforeend", items);
    todoinput.value = "";
    todoinput.focus();

}
function deleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}