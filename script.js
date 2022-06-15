let offset = 0; //смещение от левой стороны
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 350;
    if (offset > 700) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 350;
    if (offset < 0) {
        offset = 700;
    }
    sliderLine.style.left = -offset + 'px';
    
});