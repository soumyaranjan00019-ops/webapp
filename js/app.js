// Render Products Function
function renderFeed(container, products) {
    if (!container) return;
    container.innerHTML = '';
    
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="product-image-wrapper">
                <span class="category-tag">${product.category}</span>
                <img data-src="${product.image}" alt="${product.name}" class="product-image lazy">
                <button class="share-btn" onclick="shareProduct('${product.name}', '${product.affiliateLink}')">
                    <i data-lucide="share-2"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="price-container">
                    <span class="price-inr">₹${product.priceINR.toLocaleString()}</span>
                    <span class="price-usd">$${product.priceUSD}</span>
                </div>
                <button class="cta-button" onclick="handleBuy('${product.id}', '${product.affiliateLink}')">
                    Buy Now
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });

    // Initialize Lucide icons for new elements
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    // Setup Lazy Loading
    setupLazyLoading();
}

// Lazy Loading Implementation
function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('.product-image.lazy');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.onload = () => img.classList.add('loaded');
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// Global Handlers
function shareProduct(title, url) {
    if (navigator.share) {
        navigator.share({
            title: `Check out this ${title} on Fashion Scrolling!`,
            text: `I found this amazing ${title}. Take a look!`,
            url: window.location.href,
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(`${title}: ${window.location.href}`);
        alert('Product link copied to clipboard!');
    }
}

function handleBuy(productId, link) {
    logClick(productId);
    window.open(link, '_blank');
}

function logClick(productId) {
    const clicks = JSON.parse(localStorage.getItem('fs_clicks') || '[]');
    clicks.push({
        productId,
        timestamp: new Date().toISOString(),
        deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
    });
    localStorage.setItem('fs_clicks', JSON.stringify(clicks));
}

// Robust Initialization
function init() {
    const productFeed = document.getElementById('product-feed');
    if (!productFeed) return;
    
    const products = getProducts();
    renderFeed(productFeed, products);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
