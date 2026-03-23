// Write your code here

// The products array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product
function logFirstProduct() {
    console.log(products[0]);
}

// Function to update product name at a specific index
function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    }
}

// Function to remove the last product
function removeLastProduct() {
    products.pop();
}

// Function to add a new product
function addProduct(newProduct) {
    products.push(newProduct);
}

// Export the functions and array for testing
module.exports = {
    products,
    logFirstProduct,
    updateProductName,
    removeLastProduct,
    addProduct
};


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
