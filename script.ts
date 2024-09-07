interface Product {
    name: string;
    quantity: number;
    price: number;
}

const products: Product[] = [
    { name: 'Laptop', quantity: 10, price: 1000 },
    { name: 'Phone', quantity: 15, price: 500 },
    { name: 'Tablet', quantity: 8, price: 300 }
];

// Function to display products in the table
function displayProducts() {
    const productTableBody = document.getElementById('product-list') as HTMLTableSectionElement;
    productTableBody.innerHTML = ''; // Clear the table before inserting new rows

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
        `;
        productTableBody.appendChild(row);
    });
}

// Function to add a new product to the array and update the table
function addProduct() {
    const nameInput = document.getElementById('productName') as HTMLInputElement;
    const quantityInput = document.getElementById('productQuantity') as HTMLInputElement;
    const priceInput = document.getElementById('productPrice') as HTMLInputElement;

    const name = nameInput.value;
    const quantity = Number(quantityInput.value);
    const price = Number(priceInput.value);

    if (name && quantity > 0 && price > 0) {
        const newProduct: Product = {
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
    } else {
        alert('Please enter valid product details.');
    }
}

// Set up event listener for the "Add Product" button
const addProductButton = document.getElementById('addProductButton') as HTMLButtonElement;
addProductButton.addEventListener('click', addProduct);

// Initial display of products
displayProducts();
