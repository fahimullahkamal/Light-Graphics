'use strict';
const btn1 = document.querySelector('.next-1');
const btn2 = document.querySelector('.next-2');
const btn3 = document.querySelector('.next-3');
const image1 = document.querySelector('.first_img');
const upbtn = document.querySelector('.more-info-icon');
const logbtn1 = document.querySelector('.login-btn1');
const logbtn2 = document.querySelector('.login-btn2');
const mor_text =document.querySelector('.mor_iformationtext');
const mor_btn =document.querySelector('.morinfo1');
const services_btn =document.querySelector('.services_btn');
const pic_hide =document.querySelector('.mainn1');
const mainnn =document.querySelector('.mainn');
const close_about_btn =document.querySelector('.close_about');
const about_section =document.querySelector('.about_on_click');
const about_btn = document.querySelector('.about_btn');
const about_btn_nav = document.querySelector('.about_btn_nav');


const todayDate = document.querySelector('.date_p');

const today = new Date();

todayDate.textContent =`${today.getFullYear()}-${today.getMonth()}-${today.getDay()}:${today.getMinutes()}:${today.getSeconds()}`;


about_btn.addEventListener('click',function(){
    about_section.style.display='block'
})
about_btn_nav.addEventListener('click',function(){
    about_section.style.display='block'
})

close_about_btn.addEventListener('click',function(){
    about_section.style.display='none';
})


services_btn.addEventListener('click',function(){
    mor_text.style.display= 'block';
    mor_btn.style.display ='none';
    upbtn.style.display ='block';
     mainnn.classList.add('main_mode');

})
mor_btn.addEventListener('click', function(){
    upbtn.style.display ='block';
    mor_text.style.display= 'block';
    mor_btn.style.display ='none';
    mainnn.classList.toggle('main_mode');

})
upbtn.addEventListener('click', function(){
    mor_text.style.display= 'none';
    mor_btn.style.display ='block';
    upbtn.style.display ='none';
    mainnn.classList.toggle('main_mode');
})

// btn1.addEventListener('click', function() {
//     image1.src = images[0];
// })

// btn2.addEventListener('click', function() {
//     image1.src = images[1];
// })
// btn3.addEventListener('click', function() {
//     image1.src = images[2];
// })

// //const images = ['images/animation/1.png','images/animation/2.png','images/animation/3.png','images/animation/4.png'];
// let currentIndex = 0;

// const changeImage = function() {
//     currentIndex = (currentIndex + 1) % images.length;

//     image1.src = images[currentIndex];
//     if (currentIndex == 1){
//         btn1.style.backgroundColor='rgb(15, 6, 91)';
//         btn2.style.backgroundColor = 'rgba(15, 6, 91, 0.347)';
//         btn3.style.backgroundColor = 'rgba(15, 6, 91, 0.347)';
//     } else if (currentIndex == 2) {
//         btn2.style.backgroundColor = 'rgb(15, 6, 91)';
//         btn1.style.backgroundColor = 'rgba(15, 6, 91, 0.347)';
//         btn3.style.backgroundColor = 'rgba(15, 6, 91, 0.347)';
       
//     } else {
//         btn3.style.backgroundColor = 'rgb(15, 6, 91)';
//         btn1.style.backgroundColor = 'rgba(15, 6, 91, 0.347)';
//         btn2.style.backgroundColor = 'rgba(15, 6, 91, 0.347)';
//     }
// }

setInterval(changeImage, 1300);

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }