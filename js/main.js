const products = [
    {id: 1, title: 'Notebook', price: 2000, numbers: 'one'},
    {id: 2, title: 'Mouse', price: 30, numbers: 'two'},
    {id: 3, title: 'Keyboard', price: 55, numbers: 'tree'},
    {id: 4, title: 'Gamepad', price: 75, numbers: 'for'},
];


const renderProduct = (title, price, numbers) => {
    return `<div class="product-item-${numbers}">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.numbers));
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);