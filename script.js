let basket = [];

function toggleSizes(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function addToBasket(perfume, size) {
    basket.push({ perfume, size });
    updateBasket();
}

function updateBasket() {
    const basketList = document.getElementById('basket-list');
    basketList.innerHTML = '';
    basket.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = ${item.perfume} - ${item.size};
        basketList.appendChild(listItem);
    });
}

function viewBasket() {
    if (basket.length === 0) {
        alert('Ваша корзина пуста.');
    } else {
        alert('Ваша корзина: ' + basket.map(item => `${item.perfume} - ${item.size}`).join(', '));
    }
}
