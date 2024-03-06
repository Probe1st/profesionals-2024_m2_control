// добавления слушателя на документ, чтобы вручную обрабатывать ссылки
document.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.tagName === 'A') {
        changePage(e.target.href.split('/').at(-1).split('.')[0]);
    }
});

// добавление слушателя на кнопки форм, который будет переключать страницу
document.querySelectorAll('form button').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();

        changePage(e.target.closest('form').getAttribute('data-page'));
    })
});

let currentPageName = 'index';

// переключение страниц
function changePage(nextPageName) {
    if (nextPageName == '') nextPageName = 'index';
    // поиск нод страниц
    const nextPage = document.querySelector('#' + nextPageName);
    const currPage = document.querySelector('#' + currentPageName);

    // сокрытие текущей страницы и открытие новой
    currPage.setAttribute('hidden', true);
    nextPage.removeAttribute('hidden');

    document.querySelector('title').innerHTML = nextPageName;

    // изменение текущей переменной
    currentPageName = nextPageName;
}

changePage(currentPageName)
const host = window.localStorage.getItem('backendHost');
