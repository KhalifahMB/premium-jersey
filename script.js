const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const jerseyCards = document.querySelector('.jersey-cards');

const cartIcon = document.querySelector('.cart-icon');
const cartIconPosition = cartIcon.getBoundingClientRect();



const jerseys = [
    { name: "Premium Jersey 1", price: "$99.99", imageSrc: './images/jersey1.jpeg' },
    { name: "Premium Jersey 2", price: "$109.99", imageSrc: './images/jersey2.jpeg' },
    { name: "Premium Jersey 3", price: "$109.99", imageSrc: './images/jersey3.jpeg' },
    { name: "Premium Jersey 4", price: "$99.99", imageSrc: './images/jersey1.jpeg' },
    { name: "Premium Jersey 5", price: "$109.99", imageSrc: './images/jersey2.jpeg' },
    { name: "Premium Jersey 6", price: "$109.99", imageSrc: './images/jersey3.jpeg' },
    { name: "Premium Jersey 7", price: "$99.99", imageSrc: './images/jersey1.jpeg' },
    { name: "Premium Jersey 8", price: "$109.99", imageSrc: './images/jersey2.jpeg' },
    { name: "Premium Jersey 9", price: "$109.99", imageSrc: './images/jersey3.jpeg' },
];

jerseys.forEach(jersey => {
    const card = document.createElement('div');
    card.classList.add('jersey-card');

    const image = document.createElement('img');
    image.src = jersey.imageSrc;
    image.alt = jersey.name;
    image.classList.add('jersey-image');

    const name = document.createElement('h3');
    name.textContent = jersey.name;

    const price = document.createElement('p');
    price.textContent = jersey.price;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('add-to-cart-button');

    addToCartButton.addEventListener('click', (e) => {
        let target_parent = e.target.parentNode;
        target_parent.style.zIndex = "100";
        console.log(target_parent);
        let flying_img = image.cloneNode();
        flying_img.classList.add('flying-imgage');

        target_parent.appendChild(flying_img);
        const flying_img_pos = flying_img.getBoundingClientRect();
        const shopping_cart_pos = cartIcon.getBoundingClientRect();

        let data = {
            left: shopping_cart_pos.left - (shopping_cart_pos.width / 2 + flying_img_pos.left + flying_img_pos.width / 2),
            top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30
        }

        console.log(data);


        flying_img.style.cssText = `
                                --left : ${data.left.toFixed(2)}px;
                                --top : ${data.top.toFixed(2)}px;
                                `;

        setTimeout(() => {
            target_parent.style.zIndex = "";
            target_parent.removeChild(flying_img);
        }, 1000);

        updateCartCount(1);
    });

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(addToCartButton);

    jerseyCards.appendChild(card);
});

function updateCartCount(count) {
    const currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + count;
}
