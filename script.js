document.addEventListener('DOMContentLoaded', () => {
    // --- Intro Animation Logic --- 
    setTimeout(() => {
        const overlay = document.getElementById('intro-overlay');
        if(overlay) {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            setTimeout(() => { overlay.remove(); }, 1000);
        }
    }, 2500);

    // --- State Management ---
    const state = {
        cart: [],
        user: null,
        location: 'New York',
        // Updated products with REAL persistent images and detailed metadata
        products: [
            {
                id: 1,
                title: "Sony WH-1000XM4 Wireless Noise Cancelling Overhead Headphones",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
                price: 248.00,
                category: "Electronics",
                brand: "Sony",
                rating: 4.5,
                reviews: 15402,
                features: [
                    "Industry-leading noise canceling with Dual Noise Sensor technology",
                    "Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo",
                    "Up to 30-hour battery life with quick charging",
                    "Touch Sensor controls to pause/play/skip tracks"
                ],
                isDeal: true
            },
            {
                id: 2,
                title: "Herman Miller Aeron Ergonomic Office Chair with Tilt Limiter",
                image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800",
                price: 1250.00,
                category: "Furniture",
                brand: "Herman Miller",
                rating: 5.0,
                reviews: 890,
                features: [
                    "Breathable Pellicle seating material that keeps you cool",
                    "Fully adjustable arms and lumbar support",
                    "Tilt limiter and seat angle adjustment",
                    "Made from recycled materials"
                ],
                isDeal: false
            },
            {
                id: 3,
                title: "Apple Watch Series 8 [GPS 45mm] Smart Watch",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
                price: 399.00,
                category: "Electronics",
                brand: "Apple",
                rating: 4.8,
                reviews: 5200,
                features: [
                    "Advanced sensors provide insights to help you better understand your health",
                    "Crash Detection and Fall Detection safety features",
                    "Always-On Retina display",
                    "Water resistant and crack resistant"
                ],
                isDeal: true
            },
            {
                id: 4,
                title: "Gildan Men's Crew T-Shirts, Multipack, Style G1100",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
                price: 18.99,
                category: "Clothing",
                brand: "Gildan",
                rating: 4.2,
                reviews: 45000,
                features: [
                    "100% Cotton; soft and breathable",
                    "Classic fit for loose comfort",
                    "Tag-free neck to prevent irritation",
                    "Machine washable"
                ],
                isDeal: false
            },
            {
                id: 5,
                title: "Canon EOS R6 Full-Frame Mirrorless Camera",
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
                price: 2299.00,
                category: "Electronics",
                brand: "Canon",
                rating: 4.9,
                reviews: 320,
                features: [
                    "High Image Quality featuring a new 20 Megapixel Full-frame CMOS Sensor",
                    "DIGIC X Image Processor with an ISO range of 100-102400",
                    "High-speed continuous shooting of up to 12 fps",
                    "Dual Pixel CMOS AF II covering approx. 100% area"
                ],
                isDeal: false
            },
            {
                id: 6,
                title: "Nike Men's Revolution 5 Running Shoe",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
                price: 65.00,
                category: "Clothing",
                brand: "Nike",
                rating: 4.6,
                reviews: 12000,
                features: [
                    "Lightweight knit textile wraps your foot in breathable comfort",
                    "Reinforced heel and overlays lend support and durability",
                    "Soft foam midsole delivers a smooth, stable ride",
                    "Rubber outsole offers durable traction"
                ],
                isDeal: true
            },
            {
                id: 7,
                title: "CeraVe Moisturizing Cream | Body and Face Moisturizer",
                image: "https://images.unsplash.com/photo-1612817288484-929134a7338c?auto=format&fit=crop&q=80&w=800",
                price: 17.78,
                category: "Beauty",
                brand: "CeraVe",
                rating: 4.8,
                reviews: 85000,
                features: [
                    "Provides 24-hour hydration and helps restore the protective skin barrier",
                    "Formulated with three essential ceramides (1, 3, 6-II)",
                    "Hyaluronic acid to retain skin's natural moisture",
                    "Fragrance-free and non-comedogenic"
                ],
                isDeal: false
            },
            {
                id: 8,
                title: "Keychron K2 Wireless Mechanical Keyboard",
                image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=800",
                price: 89.99,
                category: "Electronics",
                brand: "Keychron",
                rating: 4.7,
                reviews: 2300,
                features: [
                    "75% layout with 84 keys",
                    "Connects with up to 3 devices via Bluetooth",
                    "Gateron G Pro Blue Switches",
                    "Mac and Windows compatible"
                ],
                isDeal: true
            },
            {
                id: 9,
                title: "Mid-Century Modern Wood Coffee Table",
                image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=800",
                price: 189.99,
                category: "Furniture",
                brand: "Rivet",
                rating: 4.4,
                reviews: 450,
                features: [
                    "Minimalist design perfect for modern living rooms",
                    "Solid hardwood legs with walnut finish",
                    "Easy assembly in 15 minutes",
                    "Scratch-resistant surface"
                ],
                isDeal: false
            },
            {
                id: 10,
                title: "Ray-Ban Classic Polarized Aviator Sunglasses",
                image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
                price: 163.00,
                category: "Clothing",
                brand: "Ray-Ban",
                rating: 4.6,
                reviews: 9800,
                features: [
                    "100% UV protection coating",
                    "Metal frame with crystal lenses",
                    "Polarized to reduce glare",
                    "Made in Italy"
                ],
                isDeal: true
            },
            {
                id: 11,
                title: "Levi's Men's Trucker Jacket",
                image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=800",
                price: 89.50,
                category: "Clothing",
                brand: "Levi's",
                rating: 4.5,
                reviews: 14000,
                features: [
                    "100% Cotton non-stretch denim",
                    "Point collar and button closure",
                    "Wash and dry inside out with like colors",
                    "Standard fit"
                ],
                isDeal: false
            },
            {
                id: 12,
                title: "Hydro Flask Standard Mouth Water Bottle",
                image: "https://images.unsplash.com/photo-1602143407151-01114192003f?auto=format&fit=crop&q=80&w=800",
                price: 35.00,
                category: "Sports",
                brand: "Hydro Flask",
                rating: 4.8,
                reviews: 26000,
                features: [
                    "TempShield insulation keeps beverages cold up to 24 hours",
                    "Durable 18/8 Pro-Grade Stainless Steel construction",
                    "BPA-Free and Phthalate-Free",
                    "Lifetime Warranty"
                ],
                isDeal: true
            },
            {
                id: 13, 
                title: "Dune (Dune Chronicles, Book 1)",
                image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
                price: 14.99,
                category: "Books",
                brand: "Penguin Books",
                rating: 4.7,
                reviews: 65000,
                features: [
                    "Winner of the Hugo and Nebula Awards",
                    "Epic science fiction masterpiece",
                    "Now a major motion picture",
                    "Paperback edition"
                ],
                isDeal: false
            },
            {
                id: 14,
                title: "Timberland Men's Leather Wallet",
                image: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?auto=format&fit=crop&q=80&w=800",
                price: 19.99,
                category: "Clothing",
                brand: "Timberland",
                rating: 4.6,
                reviews: 18000,
                features: [
                    "100% Genuine Leather",
                    "Attached flip pocket",
                    "RFID Blocking security",
                    "Classic bi-fold design"
                ],
                isDeal: true
            },
            {
                id: 15,
                title: "Professional Makeup Brush Set",
                image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=800",
                price: 12.99,
                category: "Beauty",
                brand: "BS-MALL",
                rating: 4.5,
                reviews: 98000,
                features: [
                    "14 Pcs premium synthetic brushes",
                    "Soft and dense fibers",
                    "Rose gold handle design",
                    "Cruelty-free"
                ],
                isDeal: true
            },
            {
                id: 16,
                title: "Wilson NBA Forge Series Basketball",
                image: "https://images.unsplash.com/photo-1519861531473-920026393112?auto=format&fit=crop&q=80&w=800",
                price: 29.95,
                category: "Sports",
                brand: "Wilson",
                rating: 4.7,
                reviews: 3400,
                features: [
                    "Official NBA branding",
                    "Pure Feel Cover for pro-level feel",
                    "Real Grip coating",
                    "Inflation retention lining"
                ],
                isDeal: false
            }
        ]
    };

    // --- DOM Elements ---
    const productContainer = document.getElementById('product-container');
    const searchInput = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');
    const searchCategory = document.getElementById('search-category');
    const cartCountElement = document.querySelector('.cart-count');
    const sidebar = document.getElementById('sidebar-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    // --- Render Products Function ---
    function renderProducts(productList) {
        productContainer.innerHTML = '';
        if (productList.length === 0) {
            productContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.5rem; margin-top: 20px;">No products found.</p>';
            return;
        }

        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('box');
            
            // Format Price
            const price = product.price.toFixed(2);
            
            productCard.innerHTML = `
                <h2 class="box-title">${product.title}</h2>
                <img src="${product.image}" class="box-img" alt="${product.title}" loading="lazy">
                <div class="box-content">
                    <span class="box-price">$${price}</span>
                    <p style="font-size: 0.8rem; color: #565959; margin-top:5px;">FREE Delivery by Nexa Mart</p>
                </div>
                <button class="add-cart-btn" data-id="${product.id}">Add to Cart</button>
                <a class="box-link" data-id="${product.id}">See more</a>
            `;
            
            // Error Handling: Remove entire card if image fails to load
            const imgElement = productCard.querySelector('.box-img');
            imgElement.onerror = function() {
                productCard.style.display = 'none';
            };
            
            productContainer.appendChild(productCard);
        });

        // Attach Events
        document.querySelectorAll('.add-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => addToCart(parseInt(e.target.dataset.id), e.target));
        });

        document.querySelectorAll('.box-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openProductModal(parseInt(e.target.dataset.id));
            });
        });
    }

    // --- Core Functionality ---

    // 1. Search & Filter
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        const category = searchCategory.value;

        const filtered = state.products.filter(p => {
            const matchQuery = p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
            const matchCat = category === 'All' || p.category === category;
            return matchQuery && matchCat;
        });

        renderProducts(filtered);
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') performSearch(); });
    searchCategory.addEventListener('change', performSearch);

    // 2. Navigation Filters
    document.querySelectorAll('.nav-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterType = e.target.dataset.filter;
            if(filterType === 'Deals') {
                renderProducts(state.products.filter(p => p.isDeal));
                showToast("Showing Today's Deals!");
            } else if (filterType) {
                searchCategory.value = filterType;
                performSearch();
            }
        });
    });

    // 3. Cart Logic
    function addToCart(id, btnElement) {
        const product = state.products.find(p => p.id === id);
        state.cart.push(product);
        updateCartUI();
        
        // Button Feedback
        const originalText = btnElement.innerText;
        btnElement.innerText = 'Added!';
        btnElement.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.style.backgroundColor = '#ffd814';
        }, 1000);
    }

    function updateCartUI() {
        cartCountElement.innerText = state.cart.length;
        
        const container = document.getElementById('cart-items-container');
        const totalEl = document.getElementById('cart-total');
        
        if(state.cart.length === 0) {
            container.innerHTML = '<p>Your cart is empty.</p>';
            totalEl.innerText = '0.00';
        } else {
            container.innerHTML = '';
            let total = 0;
            state.cart.forEach((item, index) => {
                total += item.price;
                const div = document.createElement('div');
                div.classList.add('cart-item');
                div.innerHTML = `
                    <div>
                        <span class="cart-item-title">${item.title}</span>
                        <br><small>$${item.price.toFixed(2)}</small>
                    </div>
                    <span class="remove-item" data-index="${index}">Remove</span>
                `;
                container.appendChild(div);
            });
            totalEl.innerText = total.toFixed(2);

            document.querySelectorAll('.remove-item').forEach(el => {
                el.addEventListener('click', (e) => {
                    const idx = parseInt(e.target.dataset.index);
                    state.cart.splice(idx, 1);
                    updateCartUI();
                });
            });
        }
    }

    document.getElementById('nav-cart-btn').addEventListener('click', () => {
        updateCartUI();
        openModal('cart-modal');
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if(state.cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        if(!state.user) {
            closeModal('cart-modal');
            openModal('login-modal');
            showToast("Please sign in to checkout");
            return;
        }
        alert(`Thank you for your purchase, ${state.user}! Your order is being processed.`);
        state.cart = [];
        updateCartUI();
        closeModal('cart-modal');
    });

    // 4. Enhanced Product Details Modal
    function openProductModal(id) {
        const product = state.products.find(p => p.id === id);
        if (!product) return;

        // Set Image
        document.getElementById('detail-img').src = product.image;

        // Set Info
        document.getElementById('detail-title').innerText = product.title;
        document.getElementById('detail-brand').innerText = `Visit the ${product.brand} Store`;
        
        // Ratings Generation
        const starContainer = document.getElementById('detail-stars');
        starContainer.innerHTML = '';
        const fullStars = Math.floor(product.rating);
        const hasHalf = product.rating % 1 !== 0;
        for(let i=0; i<fullStars; i++) starContainer.innerHTML += '<i class="fa-solid fa-star"></i>';
        if(hasHalf) starContainer.innerHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
        for(let i=0; i<(5 - Math.ceil(product.rating)); i++) starContainer.innerHTML += '<i class="fa-regular fa-star"></i>';
        
        document.getElementById('detail-reviews').innerText = `${product.reviews.toLocaleString()} ratings`;

        // Price Split
        const priceStr = product.price.toFixed(2).split('.');
        document.getElementById('detail-price-whole').innerText = priceStr[0];
        document.getElementById('detail-price-fraction').innerText = priceStr[1];
        document.getElementById('detail-price-final').innerText = `$${product.price.toFixed(2)}`;

        // Features
        const featureList = document.getElementById('detail-features');
        featureList.innerHTML = '';
        if(product.features) {
            product.features.forEach(feat => {
                const li = document.createElement('li');
                li.innerText = feat;
                featureList.appendChild(li);
            });
        }

        // Button Logic
        const btn = document.getElementById('detail-add-btn');
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', () => {
             addToCart(product.id, newBtn);
        });

        openModal('product-modal');
    }

    // 5. Auth / Login
    document.getElementById('nav-signin-btn').addEventListener('click', () => {
        if(state.user) {
            if(confirm("Do you want to sign out?")) {
                state.user = null;
                document.getElementById('nav-user-hello').innerText = "Hello, sign in";
                document.getElementById('sidebar-user').innerText = "Hello, sign in";
                showToast("Signed out successfully");
            }
        } else {
            openModal('login-modal');
        }
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        if(username) {
            state.user = username;
            document.getElementById('nav-user-hello').innerText = `Hello, ${username}`;
            document.getElementById('sidebar-user').innerText = `Hello, ${username}`;
            closeModal('login-modal');
            showToast(`Welcome back, ${username}!`);
        }
    });

    // 6. Location
    document.getElementById('location-btn').addEventListener('click', () => {
        const city = prompt("Enter your city for delivery delivery estimates:", state.location);
        if(city) {
            state.location = city;
            document.getElementById('current-location').innerText = city;
            showToast(`Location updated to ${city}`);
        }
    });

    // 7. Orders / Returns
    document.getElementById('nav-orders-btn').addEventListener('click', () => {
        if(!state.user) {
            showToast("Please sign in to view orders");
            openModal('login-modal');
        } else {
            alert(`No past orders found for ${state.user}. Start shopping now!`);
        }
    });

    // 8. Sidebar / Panel
    const sidebarBtn = document.getElementById('panel-all-btn');
    sidebarBtn.addEventListener('click', () => {
        sidebar.style.width = "350px";
        sidebarOverlay.style.display = "block";
    });

    function closeSidebar() {
        sidebar.style.width = "0";
        sidebarOverlay.style.display = "none";
    }

    document.querySelector('.close-sidebar').addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = e.target.dataset.cat;
            if(cat) {
                searchCategory.value = cat;
                performSearch();
                closeSidebar();
                showToast(`Browsing ${cat}`);
            } else {
                closeSidebar();
                showToast("Feature coming soon!");
            }
        });
    });

    // 9. Toast Notifications
    function showToast(message) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        container.appendChild(toast);
        setTimeout(() => {
            if(toast.parentElement) toast.remove();
        }, 3000);
    }

    // 10. Footer & Dummy Links
    document.querySelectorAll('.nav-link-dummy, .footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('mailto:')) return;
            e.preventDefault();
            const msg = e.target.dataset.msg || "Redirecting to page...";
            showToast(msg);
        });
    });

    // 11. Back to Top
    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Helper Functions for Modals ---
    function openModal(id) {
        document.getElementById(id).style.display = 'flex';
    }

    function closeModal(id) {
        document.getElementById(id).style.display = 'none';
    }

    document.querySelectorAll('.close-modal').forEach(span => {
        span.addEventListener('click', (e) => closeModal(e.target.dataset.target));
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // --- Hero Slider ---
    const heroSection = document.querySelector('.hero-section');
    const heroImages = [
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=2000"
    ];
    let currentImageIndex = 0;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
    }, 5000);

    // Initial Render
    renderProducts(state.products);
});