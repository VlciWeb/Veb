const asideButton = document.querySelector('.aside-button');
const aside = document.querySelector('.aside');
const info = document.querySelector('.info');
const asideIcon = document.querySelector('.aside-icon');

asideButton.addEventListener('click', () => {
    if (!aside.classList.contains('off')) {
        aside.classList.add('off');
        info.classList.add('off');
        asideButton.classList.add('off');
        asideIcon.innerHTML = '<strong><</strong>';
    } else if (aside.classList.contains('off')) {
        aside.classList.remove('off');
        info.classList.remove('off');
        asideButton.classList.remove('off');
        asideIcon.innerHTML = '<strong>></strong>';
    }
});