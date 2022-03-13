//Selectors
const addButton = document.querySelector(".add-button");
const addInput = document.querySelector(".add-input");
const beforeNotes = document.querySelector(".before-notes");
const noteContainer = document.querySelector(".notes-container");
const newNote = document.getElementsByClassName("new-note");
const saveButton = document.querySelector(".save-button");
// Event Listeners
addButton.addEventListener("click",addNotes);
addInput.addEventListener('keypress',checkEnterKey);
noteContainer.addEventListener('click',deleteNote);
noteContainer.addEventListener('click',editNote);
document.addEventListener("DOMContentLoaded",getNotes);
// Functions
function addNotes() {
    if(addInput.value!=""){
    beforeNotes.style.display = "none";
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    const noteDiv = document.createElement('div');
    noteDiv.classList.add("new-note");
    noteDiv.style.border = "1px solid #"+randomColor;

    const noteDetails = document.createElement('div');
    noteDetails.classList.add("note-details");
    noteDetails.innerText = addInput.value;
    noteDetails.style.borderBottom= "1px solid #"+randomColor;

    let noteStorage;
    if(localStorage.getItem("noteStorage")===null){
        noteStorage=[];
    }
    else {
        noteStorage = JSON.parse(localStorage.getItem("noteStorage"));
    }
    noteStorage.push(addInput.value);
    localStorage.setItem("noteStorage",JSON.stringify(noteStorage));

    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    const editButton = document.createElement('button');
    editButton.classList.add("edit-button");
    editButton.innerText = "Edit";

    noteDiv.appendChild(noteDetails); 
    noteDiv.appendChild(deleteButton);
    noteDiv.appendChild(editButton);
    noteContainer.appendChild(noteDiv);
    addInput.value="";
}
}
function checkEnterKey(e){
    if(e.keyCode==13){
        addNotes();
    }
}
function deleteNote(e){
    const item = e.target;
    if(item.classList[0]=="delete-button"){
        item.parentElement.remove();
        deleteNoteStorage(item);
    }
    if(newNote.length==0){
        beforeNotes.style.display="flex";
    }
}

function editNote(e){
    let noteStorage;
    if(localStorage.getItem("noteStorage"===null)){
        noteStorage=[];
    }
    else {
        noteStorage = JSON.parse(localStorage.getItem("noteStorage"));
    }
    const item = e.target;
    if(item.classList[0]=="edit-button"){
        addInput.value = item.parentElement.children[0].innerText;
        const index =item.parentElement.children[0].innerText;
        saveButton.onclick =function() {
            if(addInput.value!=""){
            item.parentElement.children[0].innerText = addInput.value;
            noteStorage[noteStorage.indexOf(index)]=addInput.value;
            localStorage.setItem("noteStorage",JSON.stringify(noteStorage));
            }
            addInput.value="";
        }
    }
}
function getNotes() {
    let noteStorage;
    if(localStorage.getItem("noteStorage"===null)){
        noteStorage=[];
    }
    else {
        noteStorage = JSON.parse(localStorage.getItem("noteStorage"));
    }
    noteStorage.forEach(function(e){
    beforeNotes.style.display = "none";
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    const noteDiv = document.createElement('div');
    noteDiv.classList.add("new-note");
    noteDiv.style.border = "1px solid #"+randomColor;

    const noteDetails = document.createElement('div');
    noteDetails.classList.add("note-details");
    noteDetails.innerText = e;
    noteDetails.style.borderBottom= "1px solid #"+randomColor;


    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    const editButton = document.createElement('button');
    editButton.classList.add("edit-button");
    editButton.innerText = "Edit";

    noteDiv.appendChild(noteDetails); 
    noteDiv.appendChild(deleteButton);
    noteDiv.appendChild(editButton);
    noteContainer.appendChild(noteDiv);
    })
}
function deleteNoteStorage(e){
    let noteStorage;
    if(localStorage.getItem("noteStorage"===null)){
        noteStorage=[];
    }
    else {
        noteStorage = JSON.parse(localStorage.getItem("noteStorage"));
    }
    const index = e.parentElement.children[0].innerText;
    noteStorage.splice(noteStorage.indexOf(index),1);
    localStorage.setItem("noteStorage",JSON.stringify(noteStorage));
}