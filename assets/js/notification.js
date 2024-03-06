function notification(errorMessage) {
    const notice = document.createElement('div');
    const p = document.createElement('p');
    p.innerHTML = errorMessage;
    notice.classList.add('notice');

    notice.appendChild(p);
    document.body.appendChild(notice);
}
