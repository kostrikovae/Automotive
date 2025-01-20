// document.addEventListener("DOMContentLoaded",()=>{
//     const burgerButton = document.getElementById('burger');
//     const navbarNav = document.getElementById('navbar');

//     burgerButton.addEventListener("click",()=>{
//       navbarNav.classList.toggle('active')
//     });
// });

const burgerButton = document.querySelector('#burger');
const navbarNav = document.querySelector('.navbar');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('actively');
  navbarNav.classList.toggle('active');
});