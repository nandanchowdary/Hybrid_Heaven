<?php
$dbhost = 'localhost';  
$dbuser = 'root';       
$dbpass = '';           
$dbname = "HYBRID_HEAVEN_SEARCHED";       

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $searchTerm = strtolower(trim($_POST['search_name']));

   
    $sql = "INSERT INTO search_table (searched_for) VALUES ('$searchTerm')";
    mysqli_query($conn, $sql);

    // Mapping search terms to their respective pages
    $searchData = [
        'mango banganapalle' => 'Mango(Banganapalle)-Grafted.html',
        'water melon dark green' => 'Water_Melon(Dark-Green).html',
        'jasmine white' => 'Jasmine_White(Mallepuvu).html',
        'sapota kalapatti' => 'Sapota(Kalapatti)-Grafted.html',
        'custard apple' => 'Custard_Apple(Seetaphalam)-Grafted.html',
        'mango rasam' => 'Mango(Rasam)-Grafted.html',
        'nuru varahalu pink' => 'Nuru_Varahalu_Pink(Cainiksara).html',
        'kolkata guava' => 'Kolkata_Guava(Jamakaya)-Grafted.html',
        'nuru varahalu yellow' => 'Nuru_Varahalu_Yellow.html',
        'ranapala' => 'Ranapala(Bryophyllum).html',
        'mulakkaya' => 'Mulakkaya(Moringa oleifera).html',
        'watermelon puchakaya' => 'Water_Melon(Puchakaya).html',
        'coconut' => 'Coconut(Kobbarikaya).html',
        'water apple' => 'WaterApple.html',
        'mango nelam' => 'Mango(Nelam)-Grafted.html',
        'mango pedda rasalu' => 'Mango(Pedda_Rasalu)-Grafted.html',
        'home' => 'Hybrid_Heaven_Home.html',
        'plants' => 'Hybrid_Heaven_Plants.html',
        'orders' => 'Hybrid_Heaven_Orders.html',
        'about us' => 'Hybrid_Heaven.html',
        'contact' => 'Hybrid_Heaven_Contact.html',
        'feedback' => 'Hybrid_Heaven_Feedback.html',
        'combos' => 'Hybrid_Heaven_Combos.html',
        'grafted' => 'Hybrid_Heaven_Grafted.html',
        'seeds' => 'Hybrid_Heaven_Seeds.html',
        'fertilizers' => 'Hybrid_Heaven_Fertilizers.html',
        'accessories' => 'Hybrid_Heaven_Accessories.html',
        'pots' => 'Hybrid_Heaven_Pots.html',
        'offers' => 'Hybrid_Heaven_Offers.html',
        'track order' => 'Hybrid_Heaven_Track_Order.html',
        'faqs' => 'Hybrid_Heaven_Faqs.html',
        'rewards' => 'Hybrid_Heaven_Rewards.html',
        'affiliate' => 'Hybrid_Heaven_Affiliate.html',
        'privacy policy' => 'Hybrid_Heaven_Privacy_Policy.html',
        'refund policy' => 'Hybrid_Heaven_Refund_Policy.html',
        'shipping policy' => 'Hybrid_Heaven_Shipping_Policy.html',
        'terms of service' => 'Hybrid_Heaven_Terms_Of_Service.html',
        'jobs' => 'Hybrid_Heaven_Jobs.html'
    ];

    // Exact match
    if (array_key_exists($searchTerm, $searchData)) {
        header("Location: " . $searchData[$searchTerm]);
        exit();
    }

    // Partial match
    foreach ($searchData as $key => $value) {
        if (strpos($key, $searchTerm) !== false) {
            header("Location: " . $value);
            exit();
        }
    }

    // If no match found, redirect back to previous page with query string
    $referer = $_SERVER['HTTP_REFERER'] ?? 'Hybrid_Heaven_Home.html';
    $redirectUrl = $referer . (strpos($referer, '?') === false ? '?' : '&') . 'noresult=true';
    header("Location: $redirectUrl");
    exit();
}

mysqli_close($conn);
?>
