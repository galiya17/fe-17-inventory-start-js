const productTypeSelectElement = document.getElementById ("type-select");
const productProductNameElement = document.getElementById ("product-name");
const productProductCountElement = document.getElementById ("product-count");

const addProductButton = document.getElementsByClassName ("add-product")[0];
const clearProductListButton = document.getElementsByClassName ("clear-list")[0];
const productsListElement =document.getElementsByClassName ("products-list")[0];

const productList = [];

function fillProductList() {
    productsListElement.innerHTML = '';
    productList.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
            <p>Тип: ${product.type}</p>
            <p>Название: ${product.name}</p>
            <p>Количество: ${product.count}</p>
            <button onclick="removeProduct(${index})">Удалить</button>
        `;
        productsListElement.appendChild(productItem);
    });
}

function addProduct(){
    const product = {
        type: productTypeSelectElement.value,
        name: productProductNameElement.value,
        count: productProductCountElement.value,
};
productList.push(product);

fillProductList();

productTypeSelectElement.value = '';
    productProductNameElement.value = '';
    productProductCountElement.value = '';

    updateProductListUI();


}

function removeProduct(index) {
    productList.splice(index, 1);
    fillProductList();
}

function clearProductList(){
    productList.length = 0;
    const productListElement = document.getElementsByClassName("products-list")[0];
    productListElement.innerHTML = '';
    const message = document.createElement('p');
    message.textContent = 'Список продуктов очищен.';
    productListElement.appendChild(message);
}

addProductButton.addEventListener('click', addProduct);
clearProductListButton.addEventListener('click', clearProductList);