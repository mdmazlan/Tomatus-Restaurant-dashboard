const togglerIcon=document.querySelector('.topbar-toggler-icon img');
const sideBar=document.querySelector('.sidebar');
const mainBody=document.querySelector('.main');

togglerIcon.addEventListener('click',()=>{
    sideBar.classList.toggle('active');
    mainBody.classList.toggle('active');
})