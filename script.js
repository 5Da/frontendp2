const menuIcon = document.querySelector('.fa-bars')
const navList = document.querySelector('.navlist')

menuIcon.addEventListener('click', () => {
    console.log(menuIcon)
    navList.classList.toggle('open')
    console.log(navList)
})