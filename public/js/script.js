function menu_mobile() {
    const list = document.getElementById('header__list');
    if (list.style.right == "-25rem") {
        list.style.right = "-1rem"
        list.style.transitionDuration = "0.5s"
    } else {
        list.style.right = "-25rem"
        list.style.transitionDuration = "0s"
    }
}