document.addEventListener("DOMContentLoaded", function() {
    const sectionSelector = '.bip-section';
    const section = document.querySelector(sectionSelector);
    if(!section) return;

    const bipArea = document.querySelector('.bip-area');
    const bipMessage = document.querySelector('.bip-message');
    if(!(bipArea && bipMessage)) return;

    let timeout;
    const createTimeout = () => {
        timeout = setTimeout(() => {
            bipMessage.classList.contains('show') && bipMessage.classList.remove('show');
        }, 1000)
    }

    const resetTimeout = () => {
        timeout && clearTimeout(timeout);
        createTimeout();
    }

    bipArea.addEventListener('click', () => {
        !bipMessage.classList.contains('show') && bipMessage.classList.add('show');
        resetTimeout()
    })
})