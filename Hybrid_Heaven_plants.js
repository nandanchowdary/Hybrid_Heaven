// Function to handle adding items to cart
function addToCart(productId, productName, productPrice, productImage) {
    // Get existing cart items from localStorage or initialize empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        // If item exists, increment quantity
        existingItem.quantity += 1;
    } else {
        // If item doesn't exist, add new item
        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    
    // Save back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Show confirmation
    alert(`${productName} has been added to your cart!`);
    
    // Update cart icon (optional visual feedback)
    updateCartCount();
}

// Function to update cart count indicator
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    // Get the cart icon element and update it
    const cartIcon = document.querySelector('.cart-icon');
    if (totalItems > 0) {
        cartIcon.innerHTML = `🛒 <span class="cart-count">${totalItems}</span>`;
    } else {
        cartIcon.innerHTML = '🛒';
    }
}

// Initialize cart count when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Add click event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.plant-card');
            const productId = productCard.dataset.id;
            const productName = productCard.querySelector('.span1').textContent;
            const productPrice = parseFloat(productCard.querySelector('.span3').textContent.replace('₹', ''));
            const productImage = productCard.querySelector('img').src;
            
            addToCart(productId, productName, productPrice, productImage);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get search elements
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');
    const plantCards = document.querySelectorAll('.plant-card');
    
    // Function to filter plants based on search input
    function filterPlants() {
        const searchTerm = searchBar.value.toLowerCase().trim();
        
        plantCards.forEach(card => {
            const plantName = card.querySelector('.span1').textContent.toLowerCase();
            const plantId = card.getAttribute('data-id').toLowerCase();
            
            if (plantName.includes(searchTerm) || plantId.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Event listeners
    searchBtn.addEventListener('click', filterPlants);
    
    searchBar.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterPlants();
        }
    });
    
    // Clear search when clicking the logo or home
    document.querySelector('.logo').addEventListener('click', function() {
        searchBar.value = '';
        plantCards.forEach(card => {
            card.style.display = 'block';
        });
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plantCard = this.closest('.plant-card');
            const plantId = plantCard.getAttribute('data-id');
            const plantName = plantCard.querySelector('.span1').textContent;
            const plantPrice = plantCard.querySelector('.span3').textContent.split('₹')[1].split(' ')[0];
            
            // In a real implementation, you would add to cart storage or send to server
            alert(`Added to cart: ${plantName} for ₹${plantPrice}`);
            
            // For actual implementation, you might use:
            // addToCart(plantId, plantName, plantPrice);
        });
    });
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button based on scroll position
window.onscroll = function() {
    const goTopBtn = document.getElementById('goTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
};
