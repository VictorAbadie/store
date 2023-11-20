// Coffee: price_1OD9jHCR2R1tfU0OtvRAgEqK
// Sunglasses: price_1ODJxMCR2R1tfU0Odi7VLqIx
// Camera: price_1ODJyLCR2R1tfU0Oy5RhzSlG

const productsArray = [
    {
        id:"price_1OD9jHCR2R1tfU0OtvRAgEqK",
        title:"Coffee",
        price: 4.99
    },
    {
        id:"price_1ODJxMCR2R1tfU0Odi7VLqIx",
        title:"Sunglasses",
        price: 9.99
    },
    {
        id:"price_1ODJyLCR2R1tfU0Oy5RhzSlG",
        title:"Camera",
        price: 39.99
    },
]

// This is a helper function that loops through the data in the products array, if the product ID is not found, it'll return undefined.
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log ("Product data does not exist for ID: " + id)
        // You could remove the return statement right below this and return the same result, but for the sake of reading the logic, I'm leaving it here.
        return undefined;
    }

    return productData
}

export { productsArray, getProductData };