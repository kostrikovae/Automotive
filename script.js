document.addEventListener("DOMContentLoaded",()=>{
    const burgerButton = document.getElementById('burger');
    const navbarNav = document.getElementById('navbar');

    burgerButton.addEventListener("click",()=>{
      navbarNav.classList.toggle('active')
    });
});