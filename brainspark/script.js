let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list li a');

for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        mainImage.src = activeImage.href;

        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };
}
