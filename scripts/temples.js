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
    
    console.log('Menu button clicked');
    // if (menuButton.classList.contains('open')) {
    //     document.querySelector('#mobile-nav').style.display = 'flex';
    // } else {
    //     document.querySelector('#mobile-nav').style.display = 'none';
    // }
});