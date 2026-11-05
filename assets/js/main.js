/**
 * PREMIUM JAGGERY & NATURAL SWEETENERS STORE — CORE JAVASCRIPT
 * Universal E-commerce Cart Drawer, Modals, Theme Toggle & Interactive Engine
 */

(function () {
  'use strict';

  // Storage Keys
  const CART_KEY = 'jaggery_store_cart_v1';
  const THEME_KEY = 'jaggery_store_theme_v1';
  const RTL_KEY = 'jaggery_store_rtl_v1';

  // Centralized Products Database for Interactive Operations
  const CATALOG = [
    {
      id: 'prod-1',
      name: 'Artisan Sugarcane Jaggery Cubes',
      category: 'cane-jaggery',
      categoryName: 'Traditional Jaggery',
      price: 140,
      image: 'images/image-1.png',
      weights: ['250g', '500g', '1kg'],
      rating: 4.9,
      reviews: 128,
      stock: 'In Stock',
      desc: 'Heirloom sugarcane juice slow-boiled in iron pans and set into uniform golden cubes without chemical clarifiers.',
      ingredients: '100% Heirloom Sugarcane Juice',
      storage: 'Store in an airtight glass container in a cool, dry pantry.'
    },
    {
      id: 'prod-2',
      name: 'Organic Cane Jaggery (Round)',
      category: 'cane-jaggery',
      categoryName: 'Traditional Jaggery',
      price: 130,
      image: 'images/image-2.png',
      weights: ['500g', '1kg'],
      rating: 4.8,
      reviews: 94,
      stock: 'In Stock',
      desc: 'Naturally crystallized golden-brown round lumps rich in authentic country aroma and natural minerals.',
      ingredients: 'Pure Sugarcane Juice',
      storage: 'Keep away from moisture and direct sunlight.'
    },
    {
      id: 'prod-3',
      name: 'Natural Jaggery Powder (Shakkar)',
      category: 'powders',
      categoryName: 'Jaggery Powder',
      price: 180,
      image: 'images/image-3.png',
      weights: ['500g', '1kg'],
      rating: 4.9,
      reviews: 210,
      stock: 'In Stock',
      desc: 'Free-flowing, fine unrefined jaggery powder that dissolves effortlessly in hot tea, coffee, porridge, and baking.',
      ingredients: 'Single-origin unbleached sugarcane jaggery powder',
      storage: 'Store in a clean, airtight ceramic jar or moisture-lock pouch.'
    },
    {
      id: 'prod-4',
      name: 'Traditional Palm Jaggery (Karupatti)',
      category: 'palm-jaggery',
      categoryName: 'Palm Jaggery',
      price: 240,
      image: 'images/image-4.png',
      weights: ['250g', '500g', '1kg'],
      rating: 5.0,
      reviews: 312,
      stock: 'In Stock',
      desc: 'Hand-tapped wild palmyra palm neera simmered over woodfire, wrapped in fresh palm leaves. Deep mineral profile.',
      ingredients: '100% Wild Palmyra Palm Sap (Neera)',
      storage: 'Store in a cool dry area. Do not refrigerate.'
    },
    {
      id: 'prod-5',
      name: 'Organic Golden Jaggery Cubes',
      category: 'cane-jaggery',
      categoryName: 'Traditional Jaggery',
      price: 145,
      image: 'images/image-5.png',
      weights: ['500g', '1kg'],
      rating: 4.8,
      reviews: 87,
      stock: 'In Stock',
      desc: 'Uniform golden-amber cubes crafted for exact daily portioning in beverages and culinary preparations.',
      ingredients: 'Natural sugarcane extract',
      storage: 'Keep in an airtight container.'
    },
    {
      id: 'prod-10',
      name: 'Artisan Jaggery Powder (1kg)',
      category: 'powders',
      categoryName: 'Jaggery Powder',
      price: 180,
      image: 'images/image-10.png',
      weights: ['1kg'],
      rating: 4.9,
      reviews: 145,
      stock: 'In Stock',
      desc: 'Freshly pulverized golden shakkar prepared in small farmer-owned batches for uncompromised flavour.',
      ingredients: 'Crushed raw jaggery',
      storage: 'Keep dry at room temperature.'
    },
    {
      id: 'prod-11',
      name: 'Authentic Palm Karupatti Kottan',
      category: 'palm-jaggery',
      categoryName: 'Palm Jaggery',
      price: 260,
      image: 'images/image-11.png',
      weights: ['500g', '1kg'],
      rating: 4.9,
      reviews: 178,
      stock: 'In Stock',
      desc: 'Solid dome-shaped dark palm karupatti presented in a traditional woven palm-leaf basket (kottan).',
      ingredients: 'Palmyra palm sap',
      storage: 'Store in dry pantry away from moisture.'
    },
    {
      id: 'prod-12',
      name: 'Organic Coconut Blossom Jaggery',
      category: 'palm-jaggery',
      categoryName: 'Palm Jaggery',
      price: 260,
      image: 'images/image-12.png',
      weights: ['250g', '500g'],
      rating: 4.8,
      reviews: 62,
      stock: 'In Stock',
      desc: 'Tapped from organic coconut inflorescence. Low glycemic index with subtle toasted caramel undertones.',
      ingredients: '100% Coconut blossom sap',
      storage: 'Store in airtight container.'
    },
    {
      id: 'prod-16',
      name: 'Liquid Jaggery Syrup (Nolen Gur)',
      category: 'syrups',
      categoryName: 'Natural Syrups',
      price: 220,
      image: 'images/image-16.png',
      weights: ['350ml', '500ml'],
      rating: 4.9,
      reviews: 195,
      stock: 'In Stock',
      desc: 'Luscious, pourable date palm liquid jaggery syrup. Irresistible drizzled over waffles, parathas, and ice cream.',
      ingredients: 'Pure liquid date palm jaggery',
      storage: 'Refrigerate after opening.'
    },
    {
      id: 'prod-22',
      name: 'Udangudi Origin Karupatti',
      category: 'palm-jaggery',
      categoryName: 'Palm Jaggery',
      price: 290,
      image: 'images/image-22.png',
      weights: ['500g', '1kg'],
      rating: 5.0,
      reviews: 240,
      stock: 'In Stock',
      desc: 'World-renowned GI-tagged dark palm karupatti from Udangudi, Tamil Nadu. Renowned medicinal and culinary heritage.',
      ingredients: 'Single-origin Palmyra Neera',
      storage: 'Airtight dry container.'
    },
    {
      id: 'prod-24',
      name: 'Pure Date Nectar Syrup',
      category: 'syrups',
      categoryName: 'Natural Syrups',
      price: 240,
      image: 'images/image-24.png',
      weights: ['400ml'],
      rating: 4.8,
      reviews: 80,
      stock: 'In Stock',
      desc: '100% whole Medjool date nectar squeezed in an ergonomic bottle. Gluten-free, vegan natural everyday sweetener.',
      ingredients: '100% Pure Date Extract',
      storage: 'Keep in a cool dry cupboard.'
    },
    {
      id: 'prod-25',
      name: 'Unrefined Country Sugar (Nattu Sakkarai)',
      category: 'powders',
      categoryName: 'Country Sugar',
      price: 160,
      image: 'images/image-25.png',
      weights: ['500g', '1kg'],
      rating: 4.9,
      reviews: 165,
      stock: 'In Stock',
      desc: 'Coarse, golden unrefined country sugar rich in molasses aroma. Ideal 1:1 replacement for white refined sugar.',
      ingredients: 'Evaporated sugarcane juice',
      storage: 'Airtight canister.'
    },
    {
      id: 'prod-61',
      name: 'Dark Sugarcane Kakvi Syrup',
      category: 'syrups',
      categoryName: 'Natural Syrups',
      price: 190,
      image: 'images/image-61.png',
      weights: ['450ml'],
      rating: 4.7,
      reviews: 58,
      stock: 'In Stock',
      desc: 'Traditional concentrated liquid sugarcane syrup extracted before final crystallization. Full-bodied rustic flavour.',
      ingredients: 'Concentrated sugarcane syrup',
      storage: 'Store in cool place.'
    },
    {
      id: 'prod-67',
      name: 'Pure Palm Candy (Panakarkandu)',
      category: 'powders',
      categoryName: 'Palm Candy',
      price: 210,
      image: 'images/image-67.png',
      weights: ['250g', '500g'],
      rating: 4.9,
      reviews: 140,
      stock: 'In Stock',
      desc: 'Slowly crystallized unrefined palm rock candy. Cherished in Ayurveda for soothing throat comfort and digestion.',
      ingredients: '100% Crystallized Palm Sap',
      storage: 'Store in dry glass jar.'
    },
    {
      id: 'prod-21',
      name: 'Organic Coconut Palm Sugar Powder',
      category: 'powders',
      categoryName: 'Jaggery Powder',
      price: 220,
      image: 'images/image-21.png',
      weights: ['500g', '1kg'],
      rating: 4.9,
      reviews: 104,
      stock: 'In Stock',
      desc: 'Low-glycemic golden granular sweetener tapped from coconut palm blossom nectar. Warm caramel-toffee taste that dissolves smoothly in hot drinks and baking.',
      ingredients: '100% Organic Coconut Blossom Sap',
      storage: 'Keep in an airtight container away from moisture.'
    },
    {
      id: 'prod-71',
      name: 'Moisture-Lock Pantry Jaggery Powder',
      category: 'powders',
      categoryName: 'Jaggery Powder',
      price: 195,
      image: 'images/image-71.png',
      weights: ['500g', '1kg'],
      rating: 4.8,
      reviews: 88,
      stock: 'In Stock',
      desc: 'Fine-mesh filtered chemical-free jaggery powder packed in a multi-barrier resealable kraft pouch to prevent clumping in humid kitchens.',
      ingredients: '100% Single-Origin Sugarcane Jaggery Powder',
      storage: 'Reseal tightly after each use. Store in a dry cupboard.'
    },
    {
      id: 'prod-74',
      name: 'Sesame Jaggery Laddus (Til Laddu)',
      category: 'sweets',
      categoryName: 'Traditional Sweets',
      price: 160,
      image: 'images/image-74.png',
      weights: ['350g', '500g'],
      rating: 5.0,
      reviews: 189,
      stock: 'In Stock',
      desc: 'Hand-rolled white sesame seeds bound with slow-cooked organic cane jaggery and a pinch of green cardamom.',
      ingredients: 'White sesame seeds, Cane jaggery, Cardamom, Pure ghee',
      storage: 'Consume within 30 days. Store in airtight container.'
    },
    {
      id: 'prod-75',
      name: 'Coconut Jaggery Laddus (Nariyal)',
      category: 'sweets',
      categoryName: 'Traditional Sweets',
      price: 180,
      image: 'images/image-75.png',
      weights: ['300g'],
      rating: 4.9,
      reviews: 114,
      stock: 'In Stock',
      desc: 'Freshly grated coconut roasted in pure A2 ghee and simmered with dark jaggery into luscious melt-in-mouth balls.',
      ingredients: 'Fresh coconut, Cane jaggery, Cow ghee, Cardamom',
      storage: 'Consume within 15 days.'
    },
    {
      id: 'prod-76',
      name: 'Crunchy Peanut Chikki Slabs',
      category: 'sweets',
      categoryName: 'Traditional Sweets',
      price: 150,
      image: 'images/image-76.png',
      weights: ['400g'],
      rating: 5.0,
      reviews: 280,
      stock: 'In Stock',
      desc: 'Slow-roasted groundnuts encased in crunchy, brittle golden jaggery. Free from liquid glucose and preservatives.',
      ingredients: 'Roasted peanuts, Cane jaggery',
      storage: 'Keep in an airtight jar to preserve crispiness.'
    },
    {
      id: 'prod-77',
      name: 'Festive Jaggery Adhirasam',
      category: 'sweets',
      categoryName: 'Traditional Sweets',
      price: 210,
      image: 'images/image-77.png',
      weights: ['400g (8 pcs)'],
      rating: 4.9,
      reviews: 95,
      stock: 'In Stock',
      desc: 'Heirloom South Indian festival sweet made from aged raw rice flour, crushed cardamom, and dark jaggery syrup.',
      ingredients: 'Raw rice flour, Palm jaggery, Ghee, Cardamom, Dry ginger',
      storage: 'Airtight container. Best within 20 days.'
    },
    {
      id: 'prod-78',
      name: 'Traditional Jaggery Mysore Pak',
      category: 'sweets',
      categoryName: 'Traditional Sweets',
      price: 220,
      image: 'images/image-78.png',
      weights: ['350g'],
      rating: 4.8,
      reviews: 73,
      stock: 'In Stock',
      desc: 'A healthier twist on the royal dessert: roasted gram flour and generous pure ghee sweetened purely with jaggery.',
      ingredients: 'Besan (gram flour), Cow ghee, Cane jaggery',
      storage: 'Keep in a cool dry place.'
    },
    {
      id: 'prod-82',
      name: 'Black Sesame & Peanut Chikki',
      category: 'sweets',
      categoryName: 'Traditional Sweets',
      price: 160,
      image: 'images/image-82.png',
      weights: ['300g'],
      rating: 4.9,
      reviews: 88,
      stock: 'In Stock',
      desc: 'Nutrient-rich winter treat blending roasted black sesame seeds and crunchy peanuts with caramelized jaggery.',
      ingredients: 'Black sesame, Peanuts, Jaggery',
      storage: 'Store in airtight container.'
    },
    {
      id: 'prod-93',
      name: 'Traditional Jaggery Modak',
      category: 'sweets',
      categoryName: 'Traditional Sweets',
      price: 190,
      image: 'images/image-93.png',
      weights: ['6 pcs', '12 pcs'],
      rating: 4.9,
      reviews: 130,
      stock: 'In Stock',
      desc: 'Festive steamed modak dumplings stuffed with freshly grated coconut, cardamom, and aromatic cane jaggery.',
      ingredients: 'Rice flour, Grated coconut, Jaggery, Nutmeg, Cardamom',
      storage: 'Fresh sweet. Consume within 3 days.'
    },
    {
      id: 'prod-101',
      name: 'Spiced Sukku Karupatti Cubes',
      category: 'palm-jaggery',
      categoryName: 'Palm Jaggery',
      price: 220,
      image: 'images/image-101.png',
      weights: ['400g'],
      rating: 5.0,
      reviews: 160,
      stock: 'In Stock',
      desc: 'Infused with sun-dried ginger (sukku), black pepper, and coriander seeds. Ideal for winter wellness teas.',
      ingredients: 'Palm jaggery, Dry ginger, Black pepper, Coriander seeds',
      storage: 'Keep in dry container.'
    },
    {
      id: 'prod-104',
      name: 'Gourmet Rose Nut Chikki',
      category: 'sweets',
      categoryName: 'Traditional Sweets',
      price: 240,
      image: 'images/image-104.png',
      weights: ['350g'],
      rating: 5.0,
      reviews: 92,
      stock: 'In Stock',
      desc: 'Luxury dry-fruit brittle loaded with almonds, cashews, pistachios and fragrant edible organic pink rose petals.',
      ingredients: 'Almonds, Cashews, Pistachios, Cane jaggery, Organic rose petals',
      storage: 'Store in airtight box.'
    },
    {
      id: 'prod-105',
      name: 'Winter Date Palm Jaggery (Khejur Gur)',
      category: 'palm-jaggery',
      categoryName: 'Palm Jaggery',
      price: 320,
      image: 'images/image-105.png',
      weights: ['800g'],
      rating: 5.0,
      reviews: 185,
      stock: 'In Stock',
      desc: 'Seasonal winter Bengali Khejur Gur Patali. Intense smoky caramel aroma tapped from wild date palm trees.',
      ingredients: '100% Date Palm Sap',
      storage: 'Store in airtight container or refrigerator.'
    },
    {
      id: 'prod-106',
      name: 'Organic Blue Agave Nectar',
      category: 'syrups',
      categoryName: 'Natural Syrups',
      price: 280,
      image: 'images/image-106.png',
      weights: ['350ml'],
      rating: 4.8,
      reviews: 64,
      stock: 'In Stock',
      desc: 'Golden organic agave syrup with a low-glycemic index. Dissolves instantly in iced teas, lime juices, and dressing.',
      ingredients: '100% Organic Agave Nectar',
      storage: 'Store at room temperature.'
    },
    {
      id: 'prod-47',
      name: 'Heritage Palm Karupatti Nectar',
      category: 'syrups',
      categoryName: 'Natural Syrups',
      price: 260,
      image: 'images/image-47.png',
      weights: ['350ml', '500ml'],
      rating: 4.9,
      reviews: 118,
      stock: 'In Stock',
      desc: 'Traditional liquid palm jaggery simmered from fresh dawn neera sap. Rich in iron, magnesium, and subtle woodfire caramel essence.',
      ingredients: '100% Pure Wild Palmyra Palm Sap',
      storage: 'Store in a cool dry area away from direct sunlight.'
    },
    {
      id: 'prod-43',
      name: 'Artisan Raw Wildflower Honey',
      category: 'syrups',
      categoryName: 'Natural Syrups',
      price: 310,
      image: 'images/image-43.png',
      weights: ['340g', '500g'],
      rating: 5.0,
      reviews: 142,
      stock: 'In Stock',
      desc: 'Single-origin unfiltered raw forest honey cold-extracted from wild hives. Rich in live enzymes, propolis, and delicate floral nectar.',
      ingredients: '100% Raw Wildflower Honey',
      storage: 'Store in an airtight glass jar at room temperature. Do not refrigerate.'
    }
  ];

  // Helper: Format Currency (INR)
  function formatMoney(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
  }

  // =========================================================================
  // CART STATE MANAGEMENT
  // =========================================================================
  function getCart() {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed reading cart:', e);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      updateCartUI();
    } catch (e) {
      console.error('Failed saving cart:', e);
    }
  }

  function addToCart(product, weight, qty) {
    qty = parseInt(qty, 10) || 1;
    weight = weight || (product.weights && product.weights[0]) || '500g';

    const cart = getCart();
    // Unique key = product id + weight variant
    const existingIndex = cart.findIndex(item => item.id === product.id && item.weight === weight);

    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        weight: weight,
        categoryName: product.categoryName || 'Natural Sweetener',
        qty: qty
      });
    }

    saveCart(cart);
    showToast(`✓ Added ${product.name} (${weight}) to your cart!`);

    // Bump cart icon badge
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(b => {
      b.classList.remove('bump');
      void b.offsetWidth; // trigger reflow
      b.classList.add('bump');
    });
  }

  function updateQuantity(id, weight, delta) {
    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === id && item.weight === weight);

    if (itemIndex > -1) {
      cart[itemIndex].qty += delta;
      if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
        showToast('Item removed from cart');
      }
      saveCart(cart);
    }
  }

  function removeFromCart(id, weight) {
    let cart = getCart();
    cart = cart.filter(item => !(item.id === id && item.weight === weight));
    saveCart(cart);
    showToast('Item removed from cart');
  }

  function getCartTotals() {
    const cart = getCart();
    let count = 0;
    let subtotal = 0;

    cart.forEach(item => {
      count += item.qty;
      subtotal += item.price * item.qty;
    });

    const delivery = subtotal > 499 || subtotal === 0 ? 0 : 40;
    const total = subtotal + delivery;

    return { count, subtotal, delivery, total };
  }

  function updateCartUI() {
    const totals = getCartTotals();

    // Update all badge elements across page
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = totals.count;
    });

    renderCartDrawerContent();
  }

  // =========================================================================
  // CART DRAWER RENDERING
  // =========================================================================
  function renderCartDrawerContent() {
    const drawerBody = document.getElementById('cartDrawerBody');
    const drawerFooter = document.getElementById('cartDrawerFooter');
    const drawerCountPill = document.getElementById('cartHeaderCount');

    if (!drawerBody || !drawerFooter) return;

    const cart = getCart();
    const totals = getCartTotals();

    if (drawerCountPill) {
      drawerCountPill.textContent = `${totals.count} item${totals.count === 1 ? '' : 's'}`;
    }

    if (cart.length === 0) {
      drawerBody.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <h4>Your cart is empty</h4>
          <p>Discover traditional jaggery varieties, palm sweets, and natural sweeteners.</p>
          <a href="products.html" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Explore Products</a>
        </div>
      `;
      drawerFooter.style.display = 'none';
      return;
    }

    drawerFooter.style.display = 'flex';

    let html = '<div class="cart-items-list">';
    cart.forEach(item => {
      const itemSubtotal = item.price * item.qty;
      html += `
        <div class="cart-item">
          <div class="cart-item-img-wrap">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-weight">Variant: <strong>${item.weight}</strong></div>
            <div class="cart-item-price">${formatMoney(item.price)} × ${item.qty} = ${formatMoney(itemSubtotal)}</div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" type="button" onclick="window.storeApp.updateQty('${item.id}', '${item.weight}', -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-input">${item.qty}</span>
              <button class="qty-btn" type="button" onclick="window.storeApp.updateQty('${item.id}', '${item.weight}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove-btn" type="button" onclick="window.storeApp.removeItem('${item.id}', '${item.weight}')">
              Remove
            </button>
          </div>
        </div>
      `;
    });
    html += '</div>';

    drawerBody.innerHTML = html;

    // Render footer values
    drawerFooter.innerHTML = `
      <div class="cart-summary-row">
        <span>Items Subtotal:</span>
        <strong id="cartSubtotalText">${formatMoney(totals.subtotal)}</strong>
      </div>
      <div class="cart-summary-row">
        <span>Delivery:</span>
        <span>${totals.delivery === 0 ? '<strong style="color:var(--color-fresh-green)">FREE (Demo)</strong>' : formatMoney(totals.delivery)}</span>
      </div>
      <div class="cart-summary-row total-row">
        <span>Estimated Total:</span>
        <strong class="text-gradient">${formatMoney(totals.total)}</strong>
      </div>
      <div class="cart-cta-actions">
        <button class="btn btn-primary" style="width:100%" type="button" onclick="window.storeApp.proceedToCheckout()">
          PROCEED TO ORDER
        </button>
        <button class="btn btn-secondary" style="width:100%" type="button" onclick="window.storeApp.closeCart()">
          CONTINUE SHOPPING
        </button>
      </div>
      <p style="font-size:0.75rem; text-align:center; color:var(--text-muted); margin-top:4px;">
        🔒 Demo Checkout — Submits an order enquiry directly to our team.
      </p>
    `;
  }

  function openCartDrawer() {
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) {
      updateCartUI();
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // =========================================================================
  // TOAST NOTIFICATIONS
  // =========================================================================
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // =========================================================================
  // ORDER ENQUIRY & BULK MODAL
  // =========================================================================
  function openOrderModal(presetProductName, presetCategory) {
    closeCartDrawer();
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    const modal = document.getElementById('orderModal');
    if (!modal) return;

    const prodSelect = document.getElementById('orderProductSelect');
    const catSelect = document.getElementById('orderCategorySelect');
    const msgText = document.getElementById('orderMessage');

    // Populate catalog options in dropdown if empty
    if (prodSelect && prodSelect.options.length <= 1) {
      CATALOG.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.name;
        opt.textContent = `${p.name} (${formatMoney(p.price)})`;
        prodSelect.appendChild(opt);
      });
    }

    if (prodSelect && presetProductName) {
      prodSelect.value = presetProductName;
    }

    if (catSelect && presetCategory) {
      catSelect.value = presetCategory;
    }

    // Check if opened from Cart "Proceed to Order"
    const cart = getCart();
    if (!presetProductName && cart.length > 0 && msgText) {
      const summaryList = cart.map(i => `${i.name} [${i.weight}] × ${i.qty}`).join('\n');
      const totals = getCartTotals();
      msgText.value = `Order Enquiry from Cart:\n${summaryList}\n\nEstimated Total: ${formatMoney(totals.total)}`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function handleOrderSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Basic validation
    const name = form.querySelector('[name="fullName"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();

    if (!name || !phone || !email) {
      alert('Please fill in your name, phone number and email address.');
      return;
    }

    const orderRef = 'ENQ-' + Math.floor(100000 + Math.random() * 900000);

    // Show confirmation inside modal body
    const modalBody = form.closest('.modal-body');
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="text-align:center; padding: 40px 20px;">
          <div style="width:72px; height:72px; border-radius:50%; background:var(--badge-bg); color:var(--color-forest-green); display:flex; align-items:center; justify-content:center; margin:0 auto 20px;">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 style="font-size:1.6rem; margin-bottom:10px;">Order Enquiry Received!</h3>
          <p style="color:var(--text-secondary); max-width:440px; margin:0 auto 16px;">
            Thank you, <strong>${name}</strong>. Your enquiry reference is <strong style="color:var(--accent-gold);">${orderRef}</strong>.
          </p>
          <div style="padding:14px; background:var(--bg-secondary); border-radius:var(--radius-md); max-width:400px; margin:0 auto 24px; font-size:0.875rem;">
            Our store specialist will contact you on <strong>${phone}</strong> or <strong>${email}</strong> shortly with pricing and dispatch details.
          </div>
          <button class="btn btn-primary" type="button" onclick="window.storeApp.closeOrderModal()">Done</button>
        </div>
      `;
    }

    // Clear cart if submitted from Cart
    saveCart([]);
    showToast(`✓ Order enquiry ${orderRef} submitted successfully!`);
  }

  // =========================================================================
  // PRODUCT QUICK-VIEW MODAL
  // =========================================================================
  function openProductModal(productId) {
    const modal = document.getElementById('productDetailModal');
    if (!modal) return;

    const product = CATALOG.find(p => p.id === productId);
    if (!product) return;

    const modalBody = modal.querySelector('.modal-body');
    if (!modalBody) return;

    let weightsHtml = '';
    if (product.weights && product.weights.length > 0) {
      weightsHtml = product.weights.map((w, idx) => `
        <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer; padding:6px 14px; border:1px solid var(--border-medium); border-radius:var(--radius-pill); font-size:0.8125rem; font-weight:600;">
          <input type="radio" name="modalWeight" value="${w}" ${idx === 0 ? 'checked' : ''}>
          <span>${w}</span>
        </label>
      `).join('');
    }

    modalBody.innerHTML = `
      <div style="display:grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap:28px; align-items:start;">
        <div style="border-radius:var(--radius-md); overflow:hidden; aspect-ratio:1/1; background:var(--bg-secondary);">
          <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div>
          <span class="card-category-tag">${product.categoryName}</span>
          <h3 style="font-size:1.6rem; margin-bottom:8px;">${product.name}</h3>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
            <span style="font-size:1.5rem; font-weight:800; color:var(--color-forest-green);">${formatMoney(product.price)}</span>
            <span class="product-weight-badge">${product.stock}</span>
          </div>
          <p style="color:var(--text-secondary); font-size:0.9375rem; margin-bottom:18px; line-height:1.6;">
            ${product.desc}
          </p>

          <div style="margin-bottom:16px;">
            <div style="font-size:0.8125rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">Available Weights:</div>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              ${weightsHtml}
            </div>
          </div>

          <div style="margin-bottom:20px; font-size:0.8125rem; color:var(--text-muted); line-height:1.5;">
            <div><strong>Ingredients:</strong> ${product.ingredients || 'Natural & Unadulterated'}</div>
            <div><strong>Storage:</strong> ${product.storage || 'Cool, dry place away from direct sunlight.'}</div>
          </div>

          <div style="display:flex; gap:12px; align-items:center;">
            <div class="qty-stepper" style="height:44px;">
              <button class="qty-btn" type="button" onclick="this.nextElementSibling.stepDown()" style="width:36px; font-size:1.1rem;">−</button>
              <input type="number" id="quickModalQty" value="1" min="1" max="50" class="qty-input" style="width:40px; font-size:1rem;">
              <button class="qty-btn" type="button" onclick="this.previousElementSibling.stepUp()" style="width:36px; font-size:1.1rem;">+</button>
            </div>
            <button class="btn btn-primary" type="button" style="flex:1;" onclick="window.storeApp.addFromModal('${product.id}')">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    const modal = document.getElementById('productDetailModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function addFromModal(productId) {
    const product = CATALOG.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productDetailModal');
    const selectedWeightInput = modal ? modal.querySelector('input[name="modalWeight"]:checked') : null;
    const qtyInput = modal ? modal.querySelector('#quickModalQty') : null;

    const weight = selectedWeightInput ? selectedWeightInput.value : (product.weights && product.weights[0]) || '500g';
    const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;

    addToCart(product, weight, qty);
    closeProductModal();
  }

  // =========================================================================
  // THEME ENGINE (LIGHT & DARK MODE)
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(savedTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
      });
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // =========================================================================
  // RTL (RIGHT-TO-LEFT) FULL SYSTEM CONTROLLER
  // =========================================================================
  function initRTL() {
    const savedDir = localStorage.getItem(RTL_KEY) || 'ltr';
    applyDirection(savedDir, false);

    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
        const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        applyDirection(nextDir, true);
        localStorage.setItem(RTL_KEY, nextDir);
      });
    });
  }

  function applyDirection(dir, notify = false) {
    document.documentElement.setAttribute('dir', dir);
    const isRtl = dir === 'rtl';

    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      if (isRtl) {
        btn.classList.add('is-active');
        const textSpan = btn.querySelector('.rtl-toggle-text');
        if (textSpan) textSpan.textContent = 'LTR';
        const indicator = btn.querySelector('.rtl-indicator');
        if (indicator) indicator.textContent = 'RTL (Active)';
        btn.setAttribute('title', 'Switch direction to LTR');
        btn.setAttribute('aria-label', 'Switch to LTR');
      } else {
        btn.classList.remove('is-active');
        const textSpan = btn.querySelector('.rtl-toggle-text');
        if (textSpan) textSpan.textContent = 'RTL';
        const indicator = btn.querySelector('.rtl-indicator');
        if (indicator) indicator.textContent = 'LTR (Active)';
        btn.setAttribute('title', 'Switch direction to RTL');
        btn.setAttribute('aria-label', 'Switch to RTL');
      }
    });

    if (notify) {
      showToast(isRtl ? 'RTL Mode Enabled (Right-to-Left Layout)' : 'LTR Mode Enabled (Left-to-Right Layout)');
    }
  }

  // =========================================================================
  // NAVBAR DROPDOWN INTERACTION
  // =========================================================================
  function initNavDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (!toggle) return;

      // Click to toggle on touch devices or small viewports
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 1080) {
          e.preventDefault();
          dropdown.classList.toggle('open');
          const isExpanded = dropdown.classList.contains('open');
          toggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        }
      });
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        dropdowns.forEach(d => {
          d.classList.remove('open');
          const t = d.querySelector('.nav-dropdown-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  // =========================================================================
  // MOBILE NAVIGATION DRAWER
  // =========================================================================
  function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const closeBtn = document.getElementById('mobileNavClose');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    if (drawer) {
      // Mobile Home Dropdown Toggle
      const mobileDropdownToggle = drawer.querySelector('.mobile-dropdown-toggle');
      if (mobileDropdownToggle) {
        mobileDropdownToggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const dropdownWrap = mobileDropdownToggle.closest('.mobile-nav-dropdown');
          const dropdownMenu = dropdownWrap ? dropdownWrap.querySelector('.mobile-dropdown-menu') : null;
          if (dropdownWrap && dropdownMenu) {
            dropdownWrap.classList.toggle('open');
            dropdownMenu.classList.toggle('show');
            const isOpen = dropdownWrap.classList.contains('open');
            mobileDropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          }
        });
      }

      // Close drawer on clicking page links (excluding dropdown toggle)
      drawer.querySelectorAll('.mobile-nav-link:not(.mobile-dropdown-toggle), .mobile-sublink').forEach(link => {
        link.addEventListener('click', () => {
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        });
      });

      drawer.addEventListener('click', (e) => {
        if (e.target === drawer) {
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }
  }

  // =========================================================================
  // GLOBAL LISTENERS (ESC KEY & OUTSIDE CLICKS)
  // =========================================================================
  function initGlobalListeners() {
    // Escape key closes modals and drawers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeOrderModal();
        closeProductModal();
        const mobileDrawer = document.getElementById('mobileNavDrawer');
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Cart trigger clicks
    document.querySelectorAll('.cart-trigger-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
      });
    });

    // Cart overlay backdrop click
    const cartOverlay = document.getElementById('cartDrawerOverlay');
    if (cartOverlay) {
      cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
          closeCartDrawer();
        }
      });
    }

    // Modal overlays backdrop clicks
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });

    // Forms submission delegation
    const orderForm = document.getElementById('orderEnquiryForm');
    if (orderForm) {
      orderForm.addEventListener('submit', handleOrderSubmit);
    }

    // Newsletter subscription form
    const newsForm = document.getElementById('newsletterForm');
    if (newsForm) {
      newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsForm.querySelector('input[type="email"]');
        if (input && input.value) {
          showToast(`✓ Subscribed ${input.value} to our organic newsletter!`);
          input.value = '';
        }
      });
    }
  }

  // =========================================================================
  // PRODUCTS PAGE FILTER & SEARCH ENGINE
  // =========================================================================
  function initProductsPage() {
    const searchInput = document.getElementById('productSearchInput');
    const sortSelect = document.getElementById('productSortSelect');
    const categoryPills = document.querySelectorAll('.category-pill');
    const productGrid = document.getElementById('productsCatalogGrid');

    if (!productGrid) return; // Not on products page

    let activeCategory = 'all';

    // Parse URL parameters for category or search navigation
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let catParam = urlParams.get('cat');
      const searchParam = urlParams.get('search') || urlParams.get('q');

      if (catParam) {
        catParam = catParam.toLowerCase().trim();
        // Map friendly aliases to available catalogue categories
        if (catParam === 'country-sugar' || catParam === 'palm-candy') {
          catParam = 'powders';
        }
        activeCategory = catParam;
        if (categoryPills) {
          categoryPills.forEach(p => {
            if (p.getAttribute('data-category') === catParam) {
              categoryPills.forEach(other => other.classList.remove('active'));
              p.classList.add('active');
            }
          });
        }
      }

      if (searchParam && searchInput) {
        searchInput.value = searchParam;
      }
    } catch (e) {
      console.warn('URL param error:', e);
    }

    function filterAndRender() {
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const sortVal = sortSelect ? sortSelect.value : 'default';

      let filtered = CATALOG.filter(p => {
        const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchesQuery = !query || p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query) || p.categoryName.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
      });

      if (sortVal === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortVal === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortVal === 'name-az') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      renderProductsGrid(filtered, productGrid);
    }

    if (categoryPills) {
      categoryPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          categoryPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          activeCategory = pill.getAttribute('data-category') || 'all';
          filterAndRender();
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', filterAndRender);
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', filterAndRender);
    }

    // Initial render
    filterAndRender();
  }

  function renderProductsGrid(products, container) {
    if (products.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:60px 20px;">
          <h4 style="font-size:1.4rem; margin-bottom:8px;">No matching products found</h4>
          <p style="color:var(--text-muted); margin-bottom:16px;">Try adjusting your search terms or filter selection.</p>
          <button class="btn btn-secondary btn-sm" onclick="location.reload()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = products.map(product => `
      <div class="store-card">
        <div class="card-media">
          <img src="${product.image}" alt="${product.name}" class="card-img" loading="lazy">
        </div>
        <div class="card-content">
          <span class="card-category-tag">${product.categoryName}</span>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-desc">${product.desc}</p>
          
          <div class="card-footer-action">
            <div class="product-price-wrap">
              <span class="product-price">${formatMoney(product.price)}</span>
              <span class="product-weight-badge">${product.weights[0] || '500g'}</span>
            </div>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">★ ${product.rating}</span>
          </div>

          <div class="product-card-actions">
            <button class="btn btn-secondary btn-sm" type="button" onclick="window.storeApp.viewDetails('${product.id}')">
              View Details
            </button>
            <button class="btn btn-primary btn-sm" type="button" onclick="window.storeApp.quickAdd('${product.id}')">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Quick add from card
  function quickAdd(productId) {
    const product = CATALOG.find(p => p.id === productId);
    if (product) {
      addToCart(product, product.weights[0] || '500g', 1);
    }
  }

  // =========================================================================
  // PUBLIC API EXPOSURE
  // =========================================================================
  window.storeApp = {
    addToCart,
    quickAdd,
    updateQty: updateQuantity,
    removeItem: removeFromCart,
    openCart: openCartDrawer,
    closeCart: closeCartDrawer,
    proceedToCheckout: () => openOrderModal(),
    openOrderModal,
    closeOrderModal,
    viewDetails: openProductModal,
    closeProductModal,
    addFromModal,
    showToast,
    toggleRTL: () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(nextDir, true);
      localStorage.setItem(RTL_KEY, nextDir);
    }
  };

  // Interactive Advantage Showcase (About Page Section 05)
  function initAdvantageShowcase() {
    const tabs = document.querySelectorAll('.advantage-tab');
    const previews = document.querySelectorAll('.advantage-preview');
    if (!tabs.length || !previews.length) return;

    tabs.forEach(tab => {
      function activateTab() {
        tabs.forEach(t => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        previews.forEach(p => p.classList.remove('is-active'));

        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        const targetId = tab.getAttribute('data-target');
        const targetPreview = document.getElementById(targetId);
        if (targetPreview) {
          targetPreview.classList.add('is-active');
        }
      }

      tab.addEventListener('click', activateTab);
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateTab();
        }
      });
    });
  }

  // Initialize Drop to Top (Back to Top) Button
  function initBackToTop() {
    let btn = document.getElementById('backToTopBtn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'backToTopBtn';
      btn.className = 'back-to-top-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Scroll back to top');
      btn.innerHTML = '<svg class="back-to-top-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
      document.body.appendChild(btn);
    }

    const toggleBtn = () => {
      if (window.scrollY > 280) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    };

    window.addEventListener('scroll', toggleBtn, { passive: true });
    toggleBtn();

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRTL();
    initNavDropdowns();
    initMobileNav();
    initGlobalListeners();
    updateCartUI();
    initProductsPage();
    initAdvantageShowcase();
    initBackToTop();
  });
})();

