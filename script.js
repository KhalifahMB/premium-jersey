const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const cartCount = document.querySelector('.cart-count');

cartIcon.addEventListener('click', () => {
    cartModal.classList.toggle('show');
});

// Sample data for jerseys (you can replace this with actual data)
const jerseys = [
    { name: "Premium Jersey 1", price: "$99.99", image: './images/jersey1.jpeg'},
    { name: "Premium Jersey 2", price: "$109.99", image: './images/jersey2.jpeg'},
    { name: "Premium Jersey 3", price: "$109.99", image: './images/jersey3.jpeg'},
    { name: "Premium Jersey 1", price: "$99.99", image: './images/jersey1.jpeg'},
    { name: "Premium Jersey 2", price: "$109.99", image: './images/jersey2.jpeg'},
    { name: "Premium Jersey 3", price: "$109.99", image: './images/jersey3.jpeg'},
    { name: "Premium Jersey 1", price: "$99.99", image: './images/jersey1.jpeg'},
    { name: "Premium Jersey 2", price: "$109.99", image: './images/jersey2.jpeg'},
    { name: "Premium Jersey 3", price: "$109.99", image: './images/jersey3.jpeg'},
    // Add more jerseys here
];

const jerseyCards = document.querySelector('.jersey-cards');

jerseys.forEach(jersey => {
    const card = document.createElement('div');
    card.classList.add('jersey-card');

    const image = document.createElement('img');
    image.src = jersey.image; // Replace with actual image URL
    image.alt = jersey.name;
    image.classList.add('jersey-image');

    const name = document.createElement('h3');
    name.textContent = jersey.name;

    const price = document.createElement('p');
    price.textContent = jersey.price;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('add-to-cart-button');
    
    addToCartButton.addEventListener('click', () => {
        updateCartCount(1); // Update cart count when item added
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
