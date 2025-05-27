// search.js
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchBar = document.getElementById('search-bar');
    
    // Search terms and their corresponding URLs
    const searchData = {
        'mango banganapalle': 'Mango(Banganapalle)-Grafted.html',
        'water melon dark green': 'Water_Melon(Dark-Green).html',
        'jasmine white': 'Jasmine_White(Mallepuvu).html',
        'sapota kalapatti': 'Sapota(Kalapatti)-Grafted.html',
        'custard apple': 'Custard_Apple(Seetaphalam)-Grafted.html',
        'mango rasam': 'Mango(Rasam)-Grafted.html',
        'nuru varahalu pink': 'Nuru_Varahalu_Pink(Cainiksara).html',
        'kolkata guava': 'Kolkata_Guava(Jamakaya)-Grafted.html',
        'nuru varahalu yellow': 'Nuru_Varahalu_Yellow.html',
        'ranapala': 'Ranapala(Bryophyllum).html',
        'mulakkaya': 'Mulakkaya(Moringa oleifera).html',
        'watermelon puchakaya': 'Water_Melon(Puchakaya).html',
        'coconut': 'Coconut(Kobbarikaya).html',
        'water apple': 'WaterApple.html',
        'mango nelam': 'Mango(Nelam)-Grafted.html',
        'mango pedda rasalu': 'Mango(Pedda_Rasalu)-Grafted.html',
        'home': 'Hybrid_Heaven_Home.html',
        'plants': 'Hybrid_Heaven_Plants.html',
        'orders': 'Hybrid_Heaven_Orders.html',
        'about us': 'Hybrid_Heaven.html',
        'contact': 'Hybrid_Heaven_Contact.html',
        'feedback': 'Hybrid_Heaven_Feedback.html',
        'combos': 'Hybrid_Heaven_Combos.html',
        'grafted': 'Hybrid_Heaven_Grafted.html',
        'seeds': 'Hybrid_Heaven_Seeds.html',
        'fertilizers': 'Hybrid_Heaven_Fertilizers.html',
        'accessories': 'Hybrid_Heaven_Accessories.html',
        'pots': 'Hybrid_Heaven_Pots.html',
        'offers': 'Hybrid_Heaven_Offers.html',
        'track order': 'Hybrid_Heaven_Track_Order.html',
        'faqs': 'Hybrid_Heaven_Faqs.html',
        'rewards': 'Hybrid_Heaven_Rewards.html',
        'affiliate': 'Hybrid_Heaven_Affiliate.html',
        'privacy policy': 'Hybrid_Heaven_Privacy_Policy.html',
        'refund policy': 'Hybrid_Heaven_Refund_Policy.html',
        'shipping policy': 'Hybrid_Heaven_Shipping_Policy.html',
        'terms of service': 'Hybrid_Heaven_Terms_Of_Service.html',
        'jobs': 'Hybrid_Heaven_Jobs.html'
    };

    // Function to perform search
    function performSearch() {
        const searchTerm = searchBar.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            alert('Please enter a search term');
            return;
        }

        // Check for exact matches first
        if (searchData[searchTerm]) {
            window.location.href = searchData[searchTerm];
            return;
        }

        // Check for partial matches
        let found = false;
        for (const key in searchData) {
            if (key.includes(searchTerm)) {
                window.location.href = searchData[key];
                found = true;
                break;
            }
        }

        if (!found) {
            alert('No results found for: ' + searchTerm);
        }
    }

    // Event listeners
    searchBtn.addEventListener('click', performSearch);
    
    searchBar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});
// Add this to search.js after the searchData object
searchBar.addEventListener('input', function() {
    const term = this.value.toLowerCase().trim();
    if (term.length < 2) return;
    
    // Filter matching terms
    const matches = Object.keys(searchData).filter(key => 
        key.includes(term)
    ).slice(0, 5); // Show max 5 suggestions
    
    // Create and display suggestions (you'll need to style this)
    const suggestions = document.getElementById('search-suggestions') || 
        document.createElement('div');
    suggestions.id = 'search-suggestions';
    suggestions.innerHTML = matches.map(match => 
        `<div onclick="window.location.href='${searchData[match]}'">${match}</div>`
    ).join('');
    
    if (!document.getElementById('search-suggestions')) {
        searchBar.parentNode.appendChild(suggestions);
    }
});

// Hide suggestions when clicking elsewhere
document.addEventListener('click', function(e) {
    if (e.target.id !== 'search-bar' && e.target.id !== 'search-btn') {
        const suggestions = document.getElementById('search-suggestions');
        if (suggestions) suggestions.style.display = 'none';
    }
});