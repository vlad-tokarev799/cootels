document.querySelector('.header__burger-menu').onclick = function() {
    this.classList.toggle('header__burger-menu_open')
    document.querySelector('.top-nav').classList.toggle('top-nav_open')
}