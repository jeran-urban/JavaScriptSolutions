window.onload = function addButtonsOnPageLoad() {
    var parentElementForContent = document.getElementById("buttonHolder");
    for (let index = 1; index < 21; index++){
        let newButton = createNewButtonWithIndexAttribute(index);
        parentElementForContent.appendChild(newButton);
    }
}

function createNewButtonWithIndexAttribute(index){
    let newButton = document.createElement('button');
    newButton.setAttribute("onclick", "alertIndexFromButton(this)");
    newButton.setAttribute("id", index);
    newButton.innerHTML = `button #${index}`;
    return newButton;
}

function alertIndexFromButton(event) {
    alert(event.id);
}
