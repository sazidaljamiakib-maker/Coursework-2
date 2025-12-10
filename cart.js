// ADD PRODUCT TO CART
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.qty += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}


// DISPLAY CART ITEMS
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let tableBody = document.getElementById("cart-table-body");
    tableBody.innerHTML = "";

    let grandTotal = 0;

    cart.forEach((item, index) => {
        let total = item.price * item.qty;
        grandTotal += total;

        tableBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
                <td>${total}</td>
                <td><button onclick="removeItem(${index})">X</button></td>
            </tr>
        `;
    });

    document.getElementById("grand-total").innerText = grandTotal;
}


// REMOVE ITEM FROM CART
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
