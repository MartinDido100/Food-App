const menuButton = document.querySelector('.nav__menu');
const navUl = document.querySelector('.nav__ul');
const closeIcon = document.getElementById('closeIcon');


menuButton.addEventListener("click",()=>{
    navUl.classList.add('active');
});

closeIcon.addEventListener('click',()=>{
    navUl.classList.remove('active');
})