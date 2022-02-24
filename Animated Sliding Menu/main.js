function toggleNav() {
    var updateElement = document.getElementById("menu-icon");
    //toggle adds a class if it's not there or removes it if it is.
    updateElement.classList.toggle("open")

    var updateElement = document.getElementById("sidebar");
    //toggle adds a class if it's not there or removes it if it is.
    updateElement.classList.toggle("sidebar");

    var updateElement = document.getElementById("under");
    //toggle adds a class if it's not there or removes it if it is.
    updateElement.classList.toggle("under");
}