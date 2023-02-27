var sliders = document.querySelectorAll('#slide li');
var current = 0;
var total = sliders.length - 1;

window.setInterval(function(){
    var index = current ? current - 1 : total;
    sliders[index].className = '';
    sliders[current].className = 'slideAtivo';
    current = current >= total ? 0 : current + 1;
}, 2000);