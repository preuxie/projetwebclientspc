const button_icon = document.querySelector(".button-menu i");
const menu = document.getElementById("links-menu");

function display_menu(){
    if(menu.classList.contains("view")){
        menu.classList.remove("view")
        button_icon.classList.add("fa-bars")
        button_icon.classList.remove("fa-times")
    }
    else{
        menu.classList.add("view")
        button_icon.classList.remove("fa-bars")
        button_icon.classList.add("fa-times")
    }
}