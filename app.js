// Pastelaria São José - App & Cart Engine (Onira Labs Master Template)

const CLIENT_WHATSAPP = '555432234075';
const CLIENT_PIX_KEY = '(54) 3223-4075';

const PRODUCTS = [
    // Pastéis Salgados Especiais
    {
        id: 'sj-esp',
        title: 'Pastel São José Especial',
        category: 'especiais',
        price: 16.00,
        desc: 'O carro-chefe da casa! Carne de panela desfiada e temperada, queijo colonial derretido, ovo picado e azeitonas verdes fatiadas em massa crocante.',
        image: 'assets/pastel_carne.png',
        badge: 'Mais Pedido ★',
        rating: '5.0'
    },
    {
        id: 'sj-carne',
        title: 'Pastel de Carne Tradicional',
        category: 'especiais',
        price: 13.00,
        desc: 'Receita tradicional São José. Carne moída de primeira refogada com temperos caseiros, cebola e alho, frito na hora douradinho.',
        image: 'assets/pastel1.jpg',
        badge: 'Tradicional',
        rating: '4.9'
    },
    {
        id: 'sj-queijo',
        title: 'Pastel de Queijo Colonial',
        category: 'especiais',
        price: 13.00,
        desc: 'Recheio farto de queijo colonial típico da Serra Gaúcha, derretendo a cada mordida em uma massa sequinha.',
        image: 'assets/pastel_queijo.png',
        badge: 'Favorito',
        rating: '4.9'
    },
    {
        id: 'sj-frango',
        title: 'Pastel de Frango com Catupiry',
        category: 'especiais',
        price: 15.00,
        desc: 'Peito de frango desfiado temperado com ervas finas e generosa camada de Catupiry cremoso original.',
        image: 'assets/pastel2.jpg',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'sj-calabresa',
        title: 'Pastel de Calabresa com Queijo',
        category: 'especiais',
        price: 14.00,
        desc: 'Calabresa fatiada e salteada com queijo colonial e pitada de orégano.',
        image: 'assets/pastel3.jpg',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'sj-bauru',
        title: 'Pastel de Bauru São José',
        category: 'especiais',
        price: 14.00,
        desc: 'Presunto de alta qualidade, queijo derretido, rodelas de tomate fresco e tempero especial.',
        image: 'assets/pastel1.jpg',
        badge: '',
        rating: '4.7'
    },
    {
        id: 'sj-alho-poro',
        title: 'Pastel de Queijo com Alho-Poró',
        category: 'especiais',
        price: 15.00,
        desc: 'Combinação refinada de queijo colonial derretido com alho-poró suavemente refogado na manteiga.',
        image: 'assets/pastel_queijo.png',
        badge: 'Destaque',
        rating: '4.9'
    },
    {
        id: 'sj-veg',
        title: 'Pastel Vegetariano Especial',
        category: 'especiais',
        price: 15.00,
        desc: 'Palmito nobre picado, milho verde, ervilhas frescas, queijo colonial e tomates fatiados.',
        image: 'assets/pastel2.jpg',
        badge: 'Opção Veggie',
        rating: '4.8'
    },

    // Bolos Fritos da Casa
    {
        id: 'bolo-carne',
        title: 'Bolo de Carne Tradicional São José',
        category: 'bolos',
        price: 12.00,
        desc: 'Especialidade histórica da São José! Porção de bolo de carne moída temperada, empanada com casquinha crocante e frita na hora.',
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80',
        badge: 'Especialidade da Casa ★',
        rating: '5.0'
    },
    {
        id: 'bolo-queijo',
        title: 'Bolo de Queijo Colonial',
        category: 'bolos',
        price: 12.00,
        desc: 'Bolo artesanal empanado recheado com queijo gaúcho selecionado, frito bem dourado e quentinho.',
        image: 'assets/empanadas.jpeg',
        badge: 'Imperdível',
        rating: '4.9'
    },

    // Pastéis Doces
    {
        id: 'sj-choc-morango',
        title: 'Pastel de Chocolate com Morango',
        category: 'doces',
        price: 15.00,
        desc: 'Massa crocante recheada com bastante chocolate ao leite cremoso e morangos frescos fatiados.',
        image: 'assets/pastel_doce.png',
        badge: 'Doce Mais Pedido',
        rating: '5.0'
    },
    {
        id: 'sj-doce-leite-banana',
        title: 'Pastel Doce de Leite com Banana & Canela',
        category: 'doces',
        price: 14.00,
        desc: 'Doce de leite artesanal gaúcho com pedaços de banana e um toque de canela polvilhada.',
        image: 'assets/doce.jpg',
        badge: '',
        rating: '4.9'
    },
    {
        id: 'sj-romeu-julieta',
        title: 'Pastel Romeu & Julieta',
        category: 'doces',
        price: 14.00,
        desc: 'A clássica combinação de goiabada cascão cremosa com queijo colonial derretido.',
        image: 'assets/pastel_doce.png',
        badge: '',
        rating: '4.8'
    },

    // Porções
    {
        id: 'porcao-mini-pasteis',
        title: 'Porção de Mini Pastéis Mistos (10 un.)',
        category: 'porcoes',
        price: 28.00,
        desc: '10 mini pastéis crocantes fritos na hora com recheios sortidos (carne, queijo e frango). Acompanha molho da casa.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
        badge: 'Para Compartilhar',
        rating: '4.9'
    },
    {
        id: 'porcao-fritas',
        title: 'Porção de Batata Frita Crocante (400g)',
        category: 'porcoes',
        price: 20.00,
        desc: 'Batatas palito sequinhas e crocantes com salmoura na medida certa. Acompanha maionese temperada artesanal.',
        image: 'assets/fritas.jpg',
        badge: '',
        rating: '4.8'
    },

    // Caldo de Cana & Bebidas
    {
        id: 'caldo-cana-puro',
        title: 'Caldo de Cana Geladinho (400ml)',
        category: 'bebidas',
        price: 8.00,
        desc: 'Moído na hora a partir de cana-de-açúcar fresca e servido trincando de gelado. O par perfeito do pastel!',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
        badge: 'Combinação Perfeita ★',
        rating: '5.0'
    },
    {
        id: 'caldo-cana-limao',
        title: 'Caldo de Cana com Limão (400ml)',
        category: 'bebidas',
        price: 9.00,
        desc: 'Garapa de cana moída na hora com toque de limão taiti espremido na hora. Refrescante!',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
        badge: 'Refrescante',
        rating: '4.9'
    },
    {
        id: 'suco-natural',
        title: 'Suco Natural da Fruta (400ml)',
        category: 'bebidas',
        price: 10.00,
        desc: 'Opções de Laranja natural, Morango com água ou Abacaxi com hortelã. Feito na hora.',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'cerveja-latao',
        title: 'Cerveja Gelada Latão (473ml)',
        category: 'bebidas',
        price: 9.00,
        desc: 'Skol, Brahma ou Antarctica trincando de gelada para acompanhar seu pastel.',
        image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'refrigerante-lata',
        title: 'Refrigerante Lata (350ml)',
        category: 'bebidas',
        price: 7.00,
        desc: 'Coca-Cola, Coca Zero, Guaraná Antarctica ou Sprite lata trincando.',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.7'
    }
];

// State
let cart = [];
let fulfillmentType = 'delivery'; // 'delivery' or 'pickup'
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Render Catalog Products
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filtered = currentCategory === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === currentCategory);

    grid.innerHTML = filtered.map(p => `
        <div class="product-card" data-id="${p.id}">
            <div class="card-img-box">
                <img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy">
                ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ''}
                <div class="card-rating"><i data-lucide="star"></i> ${p.rating}</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${p.title}</h3>
                <p class="card-desc">${p.desc}</p>
                <div class="card-bottom">
                    <div class="card-price">
                        <span class="price-lbl">Valor:</span>
                        <span class="price-val">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button class="add-btn" onclick="addToCart('${p.id}')">
                        <i data-lucide="plus"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Category Filtering
window.filterCategory = function(cat, element) {
    currentCategory = cat;
    document.querySelectorAll('.cat-pill').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');
    renderProducts();
};

// Cart Operations
window.addToCart = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`🥟 <strong>${product.title}</strong> foi adicionado ao seu carrinho!`);
};

window.updateQty = function(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

// --- CLAEM MASTER TEMPLATE CART LOGIC FOR SÃO JOSÉ ---
let fulfillmentType = 'delivery';
let selectedPayment = 'Pix (Chave Copia e Cola)';
const deliveryFee = 6.00;
const CLIENT_WHATSAPP_SAO_JOSE = '555432234075';
const PIX_KEY_SAO_JOSE = '(54) 3223-4075';

// Add Item to Cart
window.addToCart = function(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    const size = selectedSizes[itemId] || 'P';
    const price = item.prices ? item.prices[size] : item.price;
    const sizeLabel = size === 'P' ? 'Médio' : 'Grande';

    const itemTitle = item.title + (item.hasSizes !== false ? ` (${sizeLabel})` : '');
    const existing = cart.find(c => c.id === itemId && c.size === sizeLabel);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            title: itemTitle,
            size: sizeLabel,
            price: price,
            quantity: 1,
            notes: ''
        });
    }

    updateCartUI();
    openCart();
    showToast(`🥟 <strong>${itemTitle}</strong> foi adicionado ao seu carrinho!`);
};

function updateItemNotes(index, val) {
    if (cart[index]) {
        cart[index].notes = val;
    }
}
window.updateItemNotes = updateItemNotes;

function changeQuantity(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    }
}
window.changeQuantity = changeQuantity;

function setupCartDrawerListeners() {
    const fulfillmentBtns = document.querySelectorAll('.del-btn');
    fulfillmentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            fulfillmentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            fulfillmentType = btn.dataset.type || 'delivery';
            
            const addressBox = document.getElementById('address-box');
            if (addressBox) {
                addressBox.style.display = fulfillmentType === 'delivery' ? 'block' : 'none';
            }
            updateCartUI();
        });
    });

    const paymentBtns = document.querySelectorAll('.pay-btn');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            paymentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPayment = btn.dataset.pay || 'Pix (Chave Copia e Cola)';
            
            const cashChangeBox = document.getElementById('cash-change-box');
            const pixInfoBox = document.getElementById('pix-lock-box');
            
            const isCash = selectedPayment.toLowerCase().includes('dinheiro');
            const isPix = selectedPayment.toLowerCase().includes('pix');

            if (cashChangeBox) cashChangeBox.style.display = isCash ? 'block' : 'none';
            if (pixInfoBox) pixInfoBox.style.display = isPix ? 'block' : 'none';
            
            updateCartUI();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
        }
    });
}

function updateCartUI() {
    const totalQuantity = cart.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? (subtotal > 0 ? deliveryFee : 0) : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) cartCountEl.innerText = totalQuantity;
    
    const cartTotalHeader = document.getElementById('cart-total-header');
    if (cartTotalHeader) cartTotalHeader.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    const cartSubtotalEl = document.getElementById('cart-subtotal');
    const cartDeliveryFeeEl = document.getElementById('cart-delivery-fee');
    const cartGrandTotalEl = document.getElementById('cart-grand-total');

    if (cartSubtotalEl) cartSubtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (cartDeliveryFeeEl) {
        cartDeliveryFeeEl.innerText = fulfillmentType === 'delivery' 
            ? `R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}` 
            : 'Grátis (Balcão)';
    }
    if (cartGrandTotalEl) cartGrandTotalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

    const pixLockedAmount = document.getElementById('pix-locked-amount');
    if (pixLockedAmount) {
        pixLockedAmount.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    }

    const pixQrImg = document.getElementById('pix-qr-img');
    if (pixQrImg) {
        const qrData = encodeURIComponent(`Chave Pix São José: ${CLIENT_WHATSAPP_SAO_JOSE} | Valor: R$ ${finalTotal.toFixed(2).replace('.', ',')}`);
        pixQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrData}`;
    }

    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty" style="text-align: center; padding: 40px 20px; color: #A1A1AA;">
                <i data-lucide="shopping-bag" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.5;"></i>
                <p style="font-weight: 700; color: #FFF; margin-bottom: 4px;">Seu carrinho está vazio.</p>
                <span style="font-size: 0.85rem;">Escolha os melhores pastéis e bolos no cardápio acima!</span>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    container.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>R$ ${item.price.toFixed(2).replace('.', ',')} un.</p>
                <input type="text" class="cart-item-note-input" placeholder="Obs: ex. sem cebola, bem frito..." value="${item.notes || ''}" onchange="updateItemNotes(${idx}, this.value)">
                <span class="cart-item-price">Total: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="cart-controls">
                <button type="button" class="cart-qty-btn" onclick="changeQuantity(${idx}, -1)" aria-label="Diminuir quantidade">-</button>
                <span class="cart-qty-num">${item.quantity} un</span>
                <button type="button" class="cart-qty-btn" onclick="changeQuantity(${idx}, 1)" aria-label="Aumentar quantidade">+</button>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function openCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.add('active', 'open');
    if (overlay) overlay.classList.add('active', 'open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.remove('active', 'open');
    if (overlay) overlay.classList.remove('active', 'open');
    document.body.style.overflow = 'auto';
}

function toggleCartDrawer(show = true) {
    if (show) openCart();
    else closeCart();
}
window.openCart = openCart;
window.closeCart = closeCart;
window.closeCartDrawer = closeCart;
window.toggleCartDrawer = toggleCartDrawer;

function copyPixKey() {
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? deliveryFee : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    const copyBtn = document.getElementById('btn-copy-pix-key');

    const handleSuccess = () => {
        showToast(`Chave Pix (${PIX_KEY_SAO_JOSE}) copiada! Valor: R$ ${finalTotal.toFixed(2).replace('.', ',')}`);
        
        if (copyBtn) {
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = `<i data-lucide="check" style="width:14px; height:14px;"></i> <span>✓ Chave Pix Copiada!</span>`;
            if (window.lucide) window.lucide.createIcons();

            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = `<i data-lucide="copy" style="width:14px; height:14px;"></i> <span>Copiar Chave Pix</span>`;
                if (window.lucide) window.lucide.createIcons();
            }, 2500);
        }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CLIENT_WHATSAPP_SAO_JOSE).then(handleSuccess).catch(handleSuccess);
    } else {
        handleSuccess();
    }
}
window.copyPixKey = copyPixKey;

function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-box';
        document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
window.showToast = showToast;

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! Adicione pelo menos um item antes de finalizar.');
        return;
    }

    const customerName = document.getElementById('cust-name') ? document.getElementById('cust-name').value.trim() : '';
    const customerAddress = document.getElementById('cust-address') ? document.getElementById('cust-address').value.trim() : '';
    const cashChange = document.getElementById('cash-change-val') ? document.getElementById('cash-change-val').value.trim() : '';

    if (fulfillmentType === 'delivery' && !customerAddress) {
        alert('Por favor, informe seu endereço completo de entrega!');
        if (document.getElementById('cust-address')) document.getElementById('cust-address').focus();
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? deliveryFee : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    let msg = `🥟 *NOVO PEDIDO - PASTELARIA SÃO JOSÉ*\n`;
    msg += `------------------------------------\n`;
    msg += `📦 *Tipo:* ${fulfillmentType === 'delivery' ? '🛵 Delivery em Domicílio' : '🛍️ Retirada no Balcão'}\n`;
    if (customerName) msg += `👤 *Cliente:* ${customerName}\n`;
    if (fulfillmentType === 'delivery' && customerAddress) {
        msg += `🏠 *Endereço:* ${customerAddress}\n`;
    }
    msg += `\n*🛒 ITENS DO PEDIDO:*\n`;

    cart.forEach((i, idx) => {
        const itemSum = i.price * i.quantity;
        msg += `${idx + 1}. *${i.title}*\n`;
        msg += `   Qtd: ${i.quantity}x • R$ ${itemSum.toFixed(2).replace('.', ',')}\n`;
        if (i.notes) msg += `   _Obs: ${i.notes}_\n`;
        msg += `\n`;
    });

    msg += `------------------------------------\n`;
    msg += `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    msg += `🛵 *Taxa de Entrega:* ${fulfillmentType === 'delivery' ? `R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis (Balcão)'}\n`;
    msg += `💰 *TOTAL FINAL:* R$ ${finalTotal.toFixed(2).replace('.', ',')}\n\n`;

    msg += `💳 *FORMA DE PAGAMENTO:*\n`;
    const isCash = selectedPayment.toLowerCase().includes('dinheiro');
    const isPix = selectedPayment.toLowerCase().includes('pix');

    if (isPix) {
        msg += `⚡ *PIX (Chave: ${PIX_KEY_SAO_JOSE} - Valor: R$ ${finalTotal.toFixed(2).replace('.', ',')})*\n`;
        msg += `_Anexando o comprovante em seguida!_\n`;
    } else if (isCash) {
        msg += `💵 *Dinheiro* ${cashChange ? `(Troco para R$ ${cashChange})` : '(Sem troco)'}\n`;
    } else {
        msg += `💳 *Cartão de Crédito/Débito (Levar maquininha)*\n`;
    }

    msg += `\n_Pedido enviado pelo Site Oficial Pastelaria São José_`;

    const url = `https://wa.me/${CLIENT_WHATSAPP_SAO_JOSE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}
window.sendWhatsAppOrder = sendWhatsAppOrder;
window.submitOrderWhatsApp = sendWhatsAppOrder;

// Call listeners setup on init
document.addEventListener('DOMContentLoaded', () => {
    setupCartDrawerListeners();
});
