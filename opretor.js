const btn = document.querySelectorAll('.box');
const body = document.querySelector("body");

btn.forEach(function(box) {
    box.addEventListener('click',function(color) {
        if(color.target.id === 'box1'){
            body.style.backgroundColor = 'red';
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = 'rgb(128, 0, 255)';
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = 'rgb(26, 255, 0)';
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = 'rgb(184, 244, 6)';
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = 'rgb(255, 0, 93)';
        }
    })
})