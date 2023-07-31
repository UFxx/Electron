// Crop items description text
const itemDescription = document.querySelectorAll('.item__description');

for (i = 0; i < itemDescription.length; i++) {
    let itemDescriptionArr = itemDescription[i].textContent.split('')
    if (itemDescriptionArr.length > 100) {
        itemDescriptionArr.length = 100;
        itemDescription[i].textContent = itemDescriptionArr.join('') + '...';
    }
}

// Item counter const's
const itemCountPlus = document.querySelectorAll('.fa-plus');
const itemCountMinus = document.querySelectorAll('.fa-minus');
const itemCounter = document.querySelectorAll('.item__counter');

// Count price item const
const price = document.querySelectorAll('.price__text');

// Delete item const's
const deleteIcon = document.querySelectorAll('.fa-trash');
const item = document.querySelectorAll('.item')

// Total price const's
const totalPrice = document.querySelector('.total__price');

// Set standart sum total price
let standartSum = 0;
for (i = 0; i < price.length; i++) {
    standartSum += price[i].textContent / 1;
    totalPrice.textContent = standartSum;
}

for (i = 0; i < 15; i++) {
    // Item sum price const's index
    const priceIndex = price[i];
    const startPrice = priceIndex.textContent / 1;

    // Counter const's
    const itemCounterIndex = itemCounter[i];
    const itemIndex = item[i];

    let counter = 1;
    // Plus counter
    itemCountPlus[i].addEventListener('click', () => {
        ++counter
        itemCounterIndex.textContent = counter;

        // Count item sum price  
        priceIndex.textContent = startPrice * counter;

        // Change total price
        let standartSum = 0;
        for (i = 0; i < price.length; i++) {
            standartSum += price[i].textContent / 1;
            totalPrice.textContent = standartSum;
        }
    })

    // Minus counter
    itemCountMinus[i].addEventListener('click', () => {
        --counter
        itemCounterIndex.textContent = counter;

        // Count item sum price  
        priceIndex.textContent = startPrice * counter;

        if (counter <= 0) {
            counter = 1;
            itemCounterIndex.textContent = 1;
            priceIndex.textContent = startPrice * counter;
        }

        // Change total price
        let standartSum = 0;
        for (i = 0; i < price.length; i++) {
            standartSum += price[i].textContent / 1;
            totalPrice.textContent = standartSum;
        }
    })

    deleteIcon[i].addEventListener('click', () => {
        itemIndex.style.transform = `translateX(${-window.innerWidth}px)`;
        setTimeout(() => {
            itemIndex.style.display = 'none';
        }, 300)
    })
}