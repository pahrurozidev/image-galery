const img = document.querySelectorAll('.thumbnail img');
const imgLarge = document.querySelector('.container img');
img.forEach(value => {
    value.addEventListener('click', function (e) {
        const imgs = e.target.getAttribute('src');
        imgLarge.setAttribute('src', imgs);
    })
});