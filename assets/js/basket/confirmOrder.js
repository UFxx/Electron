const orderAllButton = document.querySelector('#total__button');
const confirmOrder = document.querySelector('.confirm-order');
const confirmOrderBackground = document.querySelector('.confirm-order-bg');

orderAllButton.addEventListener('click', () => {
    confirmOrderBackground.style.zIndex = 2;
    confirmOrderBackground.style.opacity = 100;

    setTimeout(() => {
        confirmOrder.style.bottom = '0';
    }, 300)
});

const changePaymentMethod = document.querySelector('#change-payment-method');
const choiseMethodContainer = document.querySelector('.payment-method-choice');

changePaymentMethod.addEventListener('click', () => {
    choiseMethodContainer.style.top = '-15%';
    changePaymentMethod.style.visibility = 'hidden';
});

// confirmOrderBackground.addEventListener('click', () => {
//     confirmOrder.style.top = '100%';
// })