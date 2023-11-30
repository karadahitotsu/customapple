function createProductHTML(product) {
    var productDiv = document.createElement("div");
    productDiv.classList.add("product");
  
    var productImagesDiv = document.createElement("div");
    productImagesDiv.classList.add("productimages");

    var thumbnailImg = document.createElement("img");
    thumbnailImg.classList.add("thumbnail");
    thumbnailImg.src = byteArrayToDataURL(product.image); // Здесь используйте данные из product.image
    
    var previewImg = document.createElement("img");
    previewImg.classList.add("preview");
    previewImg.src = byteArrayToDataURL(product.imagePreview); // Здесь используйте данные из product.imagePreview

    productImagesDiv.appendChild(thumbnailImg);
    productImagesDiv.appendChild(previewImg);

    var productFlexDiv = document.createElement("div");
    productFlexDiv.classList.add("productflex");

    var productNameDiv = document.createElement("div");
    productNameDiv.classList.add("productname");
    var productName = document.createElement("p");
    productName.textContent = product.name; // Здесь используйте данные из product.name
    productNameDiv.appendChild(productName);
    var productPricesDiv = document.createElement("div");
    productPricesDiv.classList.add("productprices");
    var classicPrice = document.createElement("p");
    classicPrice.classList.add("classicprice");
    classicPrice.textContent = product.price;
    productPricesDiv.appendChild(classicPrice);
    var productButtonsDiv = document.createElement("div");
    productButtonsDiv.classList.add("productbuttons");
    var buyButton = document.createElement("button");
    buyButton.classList.add("productbuy");
    buyButton.textContent = "Добавить в корзину"; // Устанавливаем текст для кнопки Добавить в корзину
    productButtonsDiv.appendChild(buyButton);

    // Другие элементы вашего продукта (описание, цены, кнопки и т.д.)
  
    productFlexDiv.appendChild(productNameDiv);
    productFlexDiv.appendChild(productPricesDiv);
    productFlexDiv.appendChild(productButtonsDiv);

    // Добавьте другие элементы вашего продукта в productFlexDiv

    productDiv.appendChild(productImagesDiv);
    productDiv.appendChild(productFlexDiv);

    return productDiv;
}
function kataloggeneration(products){
var container = document.getElementById("products"); // Замените на ваш идентификатор контейнера
// Пройдитесь по всем продуктам и создайте HTML для каждого из них
for (var key in products.products) {
  var product = products.products[key];
  var productHTML = createProductHTML(product);

  container.appendChild(productHTML);
}
}
function byteArrayToDataURL(byteArray) {
    return "data:image/jpg;base64," + byteArray;
}
function customFetch(filters) {
    // Преобразование массива фильтров в строку с параметрами для URL
    const params = new URLSearchParams();
    if (filters && filters.length > 0) {
        filters.forEach(filter => {
            params.append('filters', filter);
        });
    }
    var container = document.getElementById("products");
    container.innerHTML=''

    // Формирование URL с параметрами фильтров
    const url = new URL('http://5.39.32.179:8080/katalog');
    url.search = params.toString();
    fetch(url, {
        method: 'GET'
    }).then(response => {
        // Проверяем статус ответа
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Извлекаем содержимое ответа в формате JSON
        return response.json();
    }).then(data => {
        // Обработка данных, полученных в формате JSON
        console.log('Ответ от сервера получен', data);
        kataloggeneration(data);
    })
    .catch(error => {
        // Обработка ошибок
        console.error('Ошибка при отправке запроса:', error);
    });





};