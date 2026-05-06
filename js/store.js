const initialProducts = [
    {
        id: 1,
        name: "Luxe Rose Gold Chronograph",
        description: "A statement piece featuring a 42mm rose gold case and premium leather strap.",
        category: "Jewelry",
        priceINR: 15499,
        priceUSD: 189,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#"
    },
    {
        id: 2,
        name: "Noir Minimalist Earbuds",
        description: "Studio-grade sound in a sleek, charcoal matte finish. 40h battery life.",
        category: "Electronics",
        priceINR: 12999,
        priceUSD: 159,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#"
    },
    {
        id: 3,
        name: "Velvet Night Evening Gown",
        description: "Hand-stitched velvet gown with rose gold embroidery. Summer Sale exclusive.",
        category: "Ladies' Fashion",
        priceINR: 8999,
        priceUSD: 109,
        image: "https://images.unsplash.com/photo-1539109132314-34759616b408?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#"
    },
    {
        id: 4,
        name: "Pure Silk Serum - Glow Edition",
        description: "Advanced hydration formula for a radiant, healthy complexion.",
        category: "Beauty Products",
        priceINR: 3499,
        priceUSD: 42,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#"
    },
    {
        id: 5,
        name: "Chelsea Obsidian Boots",
        description: "Premium Italian leather boots with reinforced soles for urban exploration.",
        category: "Gents' Fashion",
        priceINR: 18499,
        priceUSD: 225,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#"
    },
    {
        id: 6,
        name: "Crystal Drop Earrings",
        description: "Swarovski crystal drops with 18k rose gold plating.",
        category: "Jewelry",
        priceINR: 5999,
        priceUSD: 73,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#"
    }
];

// Initialize localStorage if empty
if (!localStorage.getItem('fs_products')) {
    localStorage.setItem('fs_products', JSON.stringify(initialProducts));
}

// Function to get all products
function getProducts() {
    return JSON.parse(localStorage.getItem('fs_products'));
}

// Function to save products
function saveProducts(products) {
    localStorage.setItem('fs_products', JSON.stringify(products));
}
