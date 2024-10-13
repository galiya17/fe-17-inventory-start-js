//Инпуты

let productType = document.getElementById("type-select")
let productName = document.getElementById("product-name")
let productCount = document.getElementById("product-count")

// Кнопки

let addBtn = document.querySelector(".add-product")
let clearBtn = document.querySelector(".clear-list")

//Список  
let productList = document.querySelector(".products-list")
let arrayProducts =[]


addBtn.addEventListener("click",addProduct)


function addProduct(){
    let productTypeValue= productType.value
    let productNameValue= productName.value
    let productCountValue = productCount.value

    let productItem= `
    <div class="product-item">
        Тип продукта ${productTypeValue} Название:${productNameValue} Количество:${productCountValue}
    </div>`
    let products =""
    arrayProducts.push(productItem)

    
    arrayProducts.forEach((e)=>{
        products=products+e
    })
    productList.innerHTML=products
}


