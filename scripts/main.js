const form = document.querySelector('.setting__form');
const url = document.querySelector('.demo__link');
const img = document.querySelector('.demo__img');
const title = document.querySelector('.demo__title');
const more = document.querySelector('.demo__more');
const item = document.querySelector('.demo__item');

form.addEventListener('input', (e) => {
    const value = e.target.value;
    const name = e.target.name;
    switch (true) {
        case name === 'img':
            img.src = value;
            break;
        case name === 'url':
            url.href = value;
            break;
        case name === 'title':
            title.innerText = value;
            break;
        case name === 'more':
            more.innerText = value;
            break;
        case name === 'width':
            img.style.width = value + 'px';
            break;
        case name === 'height':
            img.style.height = value + 'px';
            url.style.height = value + 'px';
            // more.style.padding = (+value - 81) + 'px';
            break;
        case name === 'radius':
            item.style.borderRadius = value + '%';
            break;
        case name === 'border':
            item.style.borderStyle = value;
            break;
        case name === 'borderWidth':
            item.style.borderWidth = value + 'px';
            break;
        case name === 'borderColor':
            item.style.borderColor = value;
            break;
    }
})