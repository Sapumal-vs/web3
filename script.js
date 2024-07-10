// var Resp_menu_js = document.getElementById('Resp_menu');
// var Resp_nav_js = document.getElementById('Nav');
//     Resp_menu_js.addEventListener('click', function(){
//         Resp_nav_js.classList.toggle('Nav_Move');
//     })

var Resp_menu_js = document.getElementById('Resp_menu');
var nvmm = document.getElementsByTagName('nav')[0];
Resp_menu_js.addEventListener('click', function(){
    Resp_menu_js.classList.toggle('Nav_Move');
    nvmm.classList.toggle('newcdd');
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