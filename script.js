function redirectToWhatsApp() {
    var phoneNumber = "7610198871";
    var whatsappLink = "https://wa.me/" + phoneNumber;
    window.location.href = whatsappLink;
}

var cart = {}; // Object to store cart items and quantities

function addToCart(itemName, itemPrice) {
    // Check if the item is already in the cart
    if (cart.hasOwnProperty(itemName)) {
        cart[itemName]++;
    } else {
        cart[itemName] = 1;
    }

    // Log the message to the console
    console.log(`Added ${itemName} to the cart. Price: ${itemPrice} rs`);

    // Update the cart display
    updateCartDisplay();
}

function deleteFromCart(itemName) {
    // Check if the item is in the cart
    if (cart.hasOwnProperty(itemName)) {
        if (cart[itemName] > 1) {
            cart[itemName]--;
        } else {
            delete cart[itemName];
        }

        // Log the message to the console
        console.log(`Deleted ${itemName} from the cart.`);

        // Update the cart display
        updateCartDisplay();
    } else {
        console.log(`${itemName} is not in the cart.`);
    }
}

function updateCartDisplay() {
    // Implement the logic to update the cart display (e.g., show item quantities)
    console.log('Cart:', cart);

    // Update the cart value on the webpage
    var cartValueElement = document.getElementById('cart-value');
    if (cartValueElement) {
        var cartItemCount = Object.values(cart).reduce((total, count) => total + count, 0);
        cartValueElement.textContent = cartItemCount;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons with the class 'add-to-cart-btn'
    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var itemName = button.getAttribute('data-item-name');
            var itemPrice = parseFloat(button.getAttribute('data-item-price')); // Ensure valid price

            addToCart(itemName, itemPrice);
        });
    });

    // Select all buttons with the class 'delete-from-cart-btn'
    var deleteFromCartButtons = document.querySelectorAll('.delete-from-cart-btn');
    deleteFromCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var itemName = button.getAttribute('data-item-name');
            deleteFromCart(itemName);
        });
    });
});