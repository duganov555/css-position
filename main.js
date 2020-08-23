document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('' +
        '.container');

    var width = 500
    container.addEventListener('click',function () {
        width -= 10;
        container.style.width = width +'px';
    })
})