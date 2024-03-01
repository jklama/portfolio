const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
let showMenu = false
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav_item')
const click = document.querySelector('.clickme')

click.onClick = () => {
  console.log('clicked')
}

menuBtn.onClick = () => {
  toggleMenu()
}

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
    // navItems.forEach(item => item.classList.add('open'));
    console.log(showMenu)
    showMenu = true
  } else {
    hamburger.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    // navItems.forEach(item => item.classList.remove('open'));
    showMenu = false
  }
}
