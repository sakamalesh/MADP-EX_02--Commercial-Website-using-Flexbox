document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountSpan = document.getElementById('cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartCountSpan.textContent = cartCount;
            const productId = this.closest('.product-card').dataset.id;
            // In a real application, you would send this productId to a server
            // or store it in local storage to manage the actual cart.
            console.log(`Product ${productId} added to cart.`);
        });
    });

    // Basic form submission handling (replace with actual backend integration)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your message has been sent! (This is a simulated submission)');
            this.reset(); // Clear the form
        });
    }

    // Mobile navigation toggle
    const burgerIcon = document.createElement('div');
    burgerIcon.classList.add('burger-icon');
    burgerIcon.innerHTML = '<div></div><div></div><div></div>';
    const nav = document.querySelector('nav');
    const navUl = nav.querySelector('ul');

    if (nav && navUl) {
        nav.insertBefore(burgerIcon, navUl);

        burgerIcon.addEventListener('click', () => {
            navUl.classList.toggle('active');
            burgerIcon.classList.toggle('open');
        });
    }
});