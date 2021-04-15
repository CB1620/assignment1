const theme = document.querySelectorAll("#noteBtn, #cancelBtn, #darkBtn, #saveBtn, #textarea, #sideBar")
const cancel = document.querySelectorAll("#cancelBtn, #saveBtn, #textarea")
const reverse = document.querySelectorAll("#cancelBtn, #saveBtn, #textarea")
const notesArray = [{
    title:"note one", 
    body:"this is my first note",
}]


function toggle()
{
    for (let id of theme){
        id.classList.toggle("changed");
    };

};

function changeText() {
    var x = document.getElementById("darkBtn");
    if (x.innerHTML === "Light Theme") {
        x.innerHTML = "Dark Theme";
        } else {
            x.innerHTML = "Light Theme";
        }
}

  function remove()
{
    for (let id of cancel){
        id.classList.toggle("removed");
    };

};

  function reappear()
{
    for (let id of reverse){
        id.classList.toggle("reappear");
    };

};

function savePrompt()
{
    let title = prompt("What do you want to call this note?");
    let body = document.getElementById("textarea").value;
    notesArray.push({
        title, body
    })
    list(title);
};

function list(header)
{
    let li = document.createElement('LI');
    let note = document.createTextNode(header);
    li.appendChild(note);
    document.getElementById("notes").appendChild(li);

}


darkBtn.addEventListener("click", toggle);
cancelBtn.addEventListener("click", remove);
noteBtn.addEventListener("click", reappear);


