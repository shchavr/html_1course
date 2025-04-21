let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let mores = document.querySelectorAll('.more');
let cards = document.querySelector('.cards');
let cardButtonGrid = document.querySelector('.card-view-button-grid');
let cardButtonList = document.querySelector('.card-view-button-list');
let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
};

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
}

sansSerifFontButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
};

cardButtonGrid.addEventListener('click', () => {
    cardButtonGrid.classList.add('active');
    cardButtonList.classList.remove('active');
    cards.classList.remove('list');
})

cardButtonList.addEventListener('click', () => {
    cardButtonList.classList.add('active');
    cardButtonGrid.classList.remove('active');
    cards.classList.add('list');
})

for (const more of mores) {
    more.addEventListener('click', () => {
        more.previousElementSibling.classList.remove('blog-article-description');
        more.remove()
    })
}

for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        activePhoto.src = activeImage.href;

        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };
}