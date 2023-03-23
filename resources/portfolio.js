let profileImage = document.querySelector("#menu");

function showSubMenu() {
    let subMenu = document.getElementsByClassName("sub-menu-wrap")[0];
    
    if (subMenu.style.maxHeight === "400px") {
        subMenu.style.maxHeight = "0";
    } else {
        subMenu.style.maxHeight = "400px";
    }
}

profileImage.onclick = showSubMenu;
