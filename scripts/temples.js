// function toggleMenu() {
//     const menu = document.querySelector('#ham-menu');
    
//     if (menu.style.display === 'block') {
//         menu.style.display = 'none';
//         nav.classList.remove('open');
//     } else {
//         menu.style.display = 'block';
//         nav.classList.add('open');
//     }
// }

const menuButton = document.querySelector('#ham-menu');
const navList = document.querySelector('ul');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('open');
    menuButton.classList.toggle('active');
});