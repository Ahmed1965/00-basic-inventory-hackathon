var products = [
    { name: 'Laptop', quantity: 10, price: 1000 },
    { name: 'Phone', quantity: 15, price: 500 },
    { name: 'Tablet', quantity: 8, price: 300 }
];
// Function to display products in the table
function displayProducts() {
    var productTableBody = document.getElementById('product-list');
    productTableBody.innerHTML = ''; // Clear the table before inserting new rows
    products.forEach(function (product) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(product.name, "</td>\n            <td>").concat(product.quantity, "</td>\n            <td>").concat(product.price, "</td>\n        ");
        productTableBody.appendChild(row);
    });
}
// Function to add a new product to the array and update the table
function addProduct() {
    var nameInput = document.getElementById('productName');
    var quantityInput = document.getElementById('productQuantity');
    var priceInput = document.getElementById('productPrice');
    var name = nameInput.value;
    var quantity = Number(quantityInput.value);
    var price = Number(priceInput.value);
    if (name && quantity > 0 && price > 0) {
        var newProduct = {
            name: name,
            quantity: quantity,
            price: price
        };
        products.push(newProduct); // Add product to the array
        displayProducts(); // Update the table
        // Clear input fields
        nameInput.value = '';
        quantityInput.value = '';
        priceInput.value = '';
    }
    else {
        alert('Please enter valid product details.');
    }
}
// Set up event listener for the "Add Product" button
var addProductButton = document.getElementById('addProductButton');
addProductButton.addEventListener('click', addProduct);
// Initial display of products
displayProducts();
