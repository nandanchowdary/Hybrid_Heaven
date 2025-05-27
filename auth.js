// auth.js - Include this in all pages that need authentication

// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser'));
    
    // Update navigation based on login status
    updateNavigation(isLoggedIn, userData);
    
    // For protected pages, redirect if not logged in
    if (window.location.pathname.includes('dashboard.html') || 
        window.location.pathname.includes('profile.html') ||
        window.location.pathname.includes('orders.html')) {
        if (!isLoggedIn) {
            window.location.href = "login.html";
        }
    }
});

function updateNavigation(isLoggedIn, userData) {
    const loginLink = document.getElementById('login-profile-link');
    const navLinks = document.querySelector('.nav-links');
    
    if (isLoggedIn && userData) {
        // Replace login link with profile/dashboard
        if (loginLink) {
            loginLink.innerHTML = `<i class="fas fa-user"></i> ${userData.name || 'Profile'}`;
            loginLink.href = "dashboard.html";
        }
        
        // Add logout button if not already present
        if (navLinks && !document.getElementById('logout-link')) {
            const logoutLi = document.createElement('li');
            logoutLi.innerHTML = '<a href="#" id="logout-link">Logout</a>';
            navLinks.appendChild(logoutLi);
            
            // Add logout functionality
            document.getElementById('logout-link').addEventListener('click', function(e) {
                e.preventDefault();
                sessionStorage.removeItem('loggedInUser');
                sessionStorage.removeItem('isLoggedIn');
                window.location.href = "Hybrid_Heaven_Home.html";
            });
        }
    }
}