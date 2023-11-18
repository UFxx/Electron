const itemsImg = document.querySelectorAll('.item__img-container img');
const itemsTitle = document.querySelectorAll('.item__title');
const itemsDescr = document.querySelectorAll('.item__description');
const itemCount = document.querySelectorAll('.item__counter');
const itemPrice = document.querySelectorAll('.price__text');

function itemElements(arr) {
    arr.forEach(el => {
        console.log(el);
        const createItem = document.createElement('div');
        createItem.classList.add('confirm-order-item');
        const createImg = document.querySelector('.')
    });
}
itemElements(itemsImg);
itemElements(itemsTitle);
itemElements(itemsDescr);
itemElements(itemCount);
itemElements(itemPrice);