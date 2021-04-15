// 1st function: dark theme
//     when user clicks dark theme button,
//         body background change to darker color
//         text area change to dark color
//         buttons change to dark color

const theme = document.querySelectorAll("#noteBtn, #cancelBtn, #darkBtn, #saveBtn, #textarea, #sideBar")
const cancel = document.querySelectorAll("#cancelBtn, #saveBtn, #textarea")

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


darkBtn.addEventListener("click", toggle);
cancelBtn.addEventListener("click", remove);





// 2nd function: light (original) theme
//     when user clicks light theme button,
//         body, buttons, textarea return to original colors

// 3rd function: cancel
//     make textarea dissappear
//     make save, cancel buttons dissappear (target with class and just delete from page?)

// 4th function: new note
//     if "cancel" changes are in effect,
//     new note button pressed =
//     revert cancel changes

