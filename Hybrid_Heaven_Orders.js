// Initialize orders from localStorage or create empty array
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Function to render orders
function renderOrders() {
    const ordersContent = document.getElementById('orders-content');
    
    if (orders.length === 0) {
        ordersContent.innerHTML = `
            <div class="empty-orders">
                <img src="project_images/empty-orders.png" alt="No Orders">
                <h2>You haven't placed any orders yet</h2>
                <p>Start shopping to see your orders here</p>
                <a href="Hybrid_Heaven_Plants.html" class="btn btn-success">Shop Now</a>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    // Sort orders by date (newest first)
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    orders.forEach((order, index) => {
        let itemsHtml = '';
        let orderTotal = 0;
        
        order.items.forEach(item => {
            const subtotal = item.price * item.quantity;
            orderTotal += subtotal;
            
            itemsHtml += `
                <tr>
                    <td data-label="Product">
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <span>${item.name}</span>
                    </td>
                    <td data-label="Price">₹${item.price.toFixed(2)}</td>
                    <td data-label="Quantity">${item.quantity}</td>
                    <td data-label="Subtotal">₹${subtotal.toFixed(2)}</td>
                </tr>
            `;
        });
        
        // Determine status class
        let statusClass = '';
        switch(order.status.toLowerCase()) {
            case 'processing':
                statusClass = 'status-processing';
                break;
            case 'shipped':
                statusClass = 'status-shipped';
                break;
            case 'delivered':
                statusClass = 'status-delivered';
                break;
            case 'cancelled':
                statusClass = 'status-cancelled';
                break;
            default:
                statusClass = 'status-processing';
        }
        
        html += `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <strong>Order #${order.orderId}</strong>
                        <span>Placed on ${new Date(order.date).toLocaleDateString()}</span>
                    </div>
                    <div>
                        <span class="order-status ${statusClass}">${order.status}</span>
                    </div>
                </div>
                
                <div class="order-body">
                    <table class="order-items">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                        </tbody>
                    </table>
                    
                    <div class="order-summary">
                        <div class="summary-row">
                            <span>Subtotal:</span>
                            <span>₹${orderTotal.toFixed(2)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Shipping:</span>
                            <span>₹${order.shippingFee.toFixed(2)}</span>
                        </div>
                        <div class="summary-row total-row">
                            <span>Total:</span>
                            <span>₹${(orderTotal + order.shippingFee).toFixed(2)}</span>
                        </div>
                        
                        <div class="order-actions">
                            <button class="action-btn track-btn" onclick="trackOrder('${order.orderId}')">
                                <i class="fas fa-truck"></i> Track Order
                            </button>
                            ${order.status.toLowerCase() === 'processing' ? `
                            <button class="action-btn cancel-btn" onclick="cancelOrder('${order.orderId}', ${index})">
                                <i class="fas fa-times"></i> Cancel Order
                            </button>
                            ` : ''}
                            <button class="action-btn reorder-btn" onclick="reorderItems(${index})">
                                <i class="fas fa-shopping-cart"></i> Reorder
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    ordersContent.innerHTML = html;
}

// Function to track order
function trackOrder(orderId) {
    alert(`Tracking order #${orderId}. In a real application, this would redirect to a tracking page.`);
}

// Function to cancel order
function cancelOrder(orderId, index) {
    if (confirm(`Are you sure you want to cancel order #${orderId}?`)) {
        orders[index].status = 'Cancelled';
        localStorage.setItem('orders', JSON.stringify(orders));
        renderOrders();
        alert(`Order #${orderId} has been cancelled.`);
    }
}

// Function to reorder items
function reorderItems(orderIndex) {
    const order = orders[orderIndex];
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Add items to cart
    order.items.forEach(item => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        
        if (existingItemIndex >= 0) {
            // Item already in cart, update quantity
            cartItems[existingItemIndex].quantity += item.quantity;
        } else {
            // Add new item to cart
            cartItems.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            });
        }
    });
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Items have been added to your cart!');
    window.location.href = 'cart.html';
}

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // If we're coming from the cart page after placing an order
    const justOrdered = sessionStorage.getItem('justOrdered');
    if (justOrdered === 'true') {
        alert('Order placed successfully! Thank you for shopping with us.');
        sessionStorage.removeItem('justOrdered');
    }
    
    renderOrders();
});

function Subscribe(){
    alert("We will contact you soon");
}