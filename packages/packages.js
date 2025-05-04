document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const packageBox = this.closest('.package-box');
            const packageName = packageBox.querySelector('h2').textContent;
            const packagePrice = packageBox.querySelector('.price').textContent;
            
            // Add package to cart
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push({
                name: packageName,
                price: packagePrice
            });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
            // Update cart count
            const cartCount = document.querySelector('.nav-cart-count');
            cartCount.textContent = cartItems.length;
            cartCount.style.display = 'flex';
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Added to cart!';
            packageBox.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.remove();
            }, 2000);
        });
    });

    // Add hover effect to package boxes
    const packageBoxes = document.querySelectorAll('.package-box');
    
    packageBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}); 