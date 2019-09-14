const menuButton = document.querySelector('#burger');
const nav = document.querySelector('nav');
let isNavOpen = false
const navLinksContainer = document.querySelector('nav .nav-links')
const navItems = document.querySelectorAll('.nav-links .nav-item')
menuButton.addEventListener('click', () => {
    nav.style = isNavOpen ? 'height: 10vh' : 'height: 35vh'
    navLinksContainer.style = !isNavOpen && 'display: flex'
    isNavOpen = !isNavOpen
})