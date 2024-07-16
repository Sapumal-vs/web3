// var Responsive_icon_menu_active = document.getElementById('Responsive_icon-menu');
// var Resp_nav_js = document.getElementById('Nav');
//     Responsive_icon_menu_active.addEventListener('click', function(){
//         Resp_nav_js.classList.toggle('Nav_Move');
//     })

var responsivenave = document.getElementsByTagName('nav')[0];
var Responsive_icon_menu = document.getElementById('Responsive_icon-menu');
Responsive_icon_menu.addEventListener('click', function(){
    responsivenave.classList.toggle('responsive_nav_active');
    Responsive_icon_menu.classList.toggle('Responsive_icon_menu_active');
    })
   


    let www = document.getElementById('www');
    let ppp = document.getElementById('ppp');
    // let room = document.getElementById('room');

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        //  www.style.transform = `translateX(-${value * 0.2}px) translateY(${value * 0.5}px)`;
        www.style.left = value * -2 + 'px';
         www.style.top = value * .7 + 'px';

        ppp.style.top = value * 1 + 'px';
         ppp.style.top = value * 0.5 + 'px';

        //  room.style.top = value * .5 + 'px';
    })