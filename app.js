// Pastelaria São José - App & Cart Engine (Onira Labs Master Template)

const CLIENT_WHATSAPP = '555432234075';
const CLIENT_PIX_KEY = '(54) 3223-4075';

const PRODUCTS = [
    // Pastéis de Carne
    {
        id: 'sj-carne-p',
        title: 'Pastel de Carne (P)',
        category: 'carne',
        price: 12.50,
        desc: 'Recheio farto de carne moída de primeira refogada com temperos caseiros, cebola e alho, tamanho Pequeno.',
        image: 'assets/pastel_carne.png',
        badge: 'Tradicional',
        rating: '4.9'
    },
    {
        id: 'sj-carne-m',
        title: 'Pastel de Carne (M)',
        category: 'carne',
        price: 14.50,
        desc: 'Recheio farto de carne moída de primeira refogada com temperos caseiros, cebola e alho, tamanho Médio.',
        image: 'assets/pastel_carne.png',
        badge: 'Mais Pedido ★',
        rating: '5.0'
    },

    // Pastéis Salgados Especiais (Tamanho M)
    {
        id: 'sj-carne-queijo',
        title: 'Pastel de Carne e Queijo',
        category: 'especiais',
        price: 17.90,
        desc: 'Deliciosa carne moída temperada combinada com generosa camada de queijo colonial derretido.',
        image: 'assets/pastel1.jpg',
        badge: 'Favorito',
        rating: '4.9'
    },
    {
        id: 'sj-carne-azeitona',
        title: 'Pastel de Carne e Azeitona',
        category: 'especiais',
        price: 17.90,
        desc: 'Carne moída refogada com tempero artesanal e azeitonas verdes fatiadas.',
        image: 'assets/pastel_carne.png',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'sj-queijo',
        title: 'Pastel de Queijo',
        category: 'especiais',
        price: 17.90,
        desc: 'Recheio farto de queijo derretido a cada mordida em massa crocante e sequinha.',
        image: 'assets/pastel_queijo.png',
        badge: 'Clássico',
        rating: '4.9'
    },
    {
        id: 'sj-queijo-presunto',
        title: 'Pastel de Queijo c/ Presunto',
        category: 'especiais',
        price: 17.90,
        desc: 'Fatias de presunto de primeira com queijo colonial derretido.',
        image: 'assets/pastel3.jpg',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'sj-frango',
        title: 'Pastel de Frango',
        category: 'especiais',
        price: 17.90,
        desc: 'Peito de frango desfiado bem temperado na massa douradinha e crocante.',
        image: 'assets/pastel2.jpg',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'sj-frango-queijo',
        title: 'Pastel de Frango e Queijo',
        category: 'especiais',
        price: 17.90,
        desc: 'Frango desfiado suculento envolvido por queijo colonial derretido.',
        image: 'assets/pastel2.jpg',
        badge: 'Sucesso',
        rating: '4.9'
    },
    {
        id: 'sj-palmito',
        title: 'Pastel de Palmito',
        category: 'especiais',
        price: 17.90,
        desc: 'Palmito nobre picadinho e suavemente temperado.',
        image: 'assets/pastel1.jpg',
        badge: 'Opção Veggie',
        rating: '4.7'
    },
    {
        id: 'sj-palmito-queijo',
        title: 'Pastel de Palmito c/ Queijo',
        category: 'especiais',
        price: 17.90,
        desc: 'Palmito nobre picado acompanhado de queijo derretido quentinho.',
        image: 'assets/pastel_queijo.png',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'sj-calabresa',
        title: 'Pastel de Calabresa',
        category: 'especiais',
        price: 17.90,
        desc: 'Calabresa moída/fatiada e douradinha com tempero especial.',
        image: 'assets/pastel3.jpg',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'sj-frango-catupiry',
        title: 'Pastel de Frango c/ Catupiry',
        category: 'especiais',
        price: 17.90,
        desc: 'Frango desfiado temperado com camada farta de Catupiry cremoso original.',
        image: 'assets/pastel2.jpg',
        badge: 'Destaque ★',
        rating: '5.0'
    },

    // Pastéis Doces (Tamanho M)
    {
        id: 'sj-choc-preto',
        title: 'Pastel de Chocolate Preto',
        category: 'doces',
        price: 17.90,
        desc: 'Massa crocante recheada com bastante chocolate ao leite cremoso derretido.',
        image: 'assets/pastel_doce.png',
        badge: 'Doce Mais Pedido ★',
        rating: '5.0'
    },
    {
        id: 'sj-banana-canela',
        title: 'Pastel de Banana c/ Canela',
        category: 'doces',
        price: 17.90,
        desc: 'Bananadas fatiadas com canela polvilhada e toque de açúcar artesanal.',
        image: 'assets/doce.jpg',
        badge: '',
        rating: '4.9'
    },
    {
        id: 'sj-prestigio',
        title: 'Pastel de Prestígio',
        category: 'doces',
        price: 17.90,
        desc: 'Recheio irresistível de chocolate cremoso com coco ralado fresco.',
        image: 'assets/pastel_doce.png',
        badge: 'Especial',
        rating: '4.9'
    },
    {
        id: 'sj-choc-queijo',
        title: 'Pastel de Chocolate c/ Queijo',
        category: 'doces',
        price: 17.90,
        desc: 'Mistura agridoce incrível de chocolate ao leite derretido com queijo salgadinho.',
        image: 'assets/pastel_doce.png',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'sj-goiabada-queijo',
        title: 'Pastel de Goiabada c/ Queijo',
        category: 'doces',
        price: 17.90,
        desc: 'O autêntico Romeu & Julieta com goiabada cascão e queijo colonial derretido.',
        image: 'assets/doce.jpg',
        badge: 'Tradicional',
        rating: '4.9'
    },

    // Salgados & Outros da Casa
    {
        id: 'sj-enroladinho',
        title: 'Enroladinho',
        category: 'outros',
        price: 6.00,
        desc: 'Salgado tradicional da casa, massa leve com recheio saboroso frito na hora.',
        image: 'assets/empanadas.jpeg',
        badge: '',
        rating: '4.7'
    },
    {
        id: 'sj-grostoli',
        title: 'Grostoli / Cueca Virada',
        category: 'outros',
        price: 5.00,
        desc: 'Grostoli artesanal da casa, massa sequinha polvilhada com açúcar e canela.',
        image: 'assets/doce.jpg',
        badge: 'Receita da Vovó',
        rating: '4.9'
    },
    {
        id: 'sj-pao-queijo',
        title: 'Pão de Queijo',
        category: 'outros',
        price: 5.00,
        desc: 'Pão de queijo quentinho e macio com crosta dourada.',
        image: 'assets/empanadas.jpeg',
        badge: '',
        rating: '4.8'
    },

    // Bebidas, Cafés & Caldo de Cana
    {
        id: 'caldo-cana-puro',
        title: 'Caldo de Cana Geladinho (400ml)',
        category: 'bebidas',
        price: 8.00,
        desc: 'Moído na hora a partir de cana-de-açúcar fresca e servido trincando de gelado. O par perfeito do pastel!',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
        badge: 'Par Perfeito ★',
        rating: '5.0'
    },
    {
        id: 'cafe-pequeno',
        title: 'Café Pequeno',
        category: 'bebidas',
        price: 3.50,
        desc: 'Café expresso/passado na hora bem quentinho.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.7'
    },
    {
        id: 'cafe-medio',
        title: 'Café Médio',
        category: 'bebidas',
        price: 5.00,
        desc: 'Xícara média de café aromático recém-passado.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'cafe-taca',
        title: 'Café Taça',
        category: 'bebidas',
        price: 5.50,
        desc: 'Café especial servido na taça com aroma marcante.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.9'
    },
    {
        id: 'refri-medio',
        title: 'Refrigerante Copo Médio',
        category: 'bebidas',
        price: 6.00,
        desc: 'Refrigerante bem gelado servido no copo médio.',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.7'
    },
    {
        id: 'refri-lata',
        title: 'Refrigerante Lata (350ml)',
        category: 'bebidas',
        price: 7.00,
        desc: 'Coca-Cola, Guaraná Antarctica, Sprite ou Fanta lata geladinha.',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'refri-600',
        title: 'Refrigerante 600ml',
        category: 'bebidas',
        price: 8.00,
        desc: 'Garrafa 600ml trincando de gelada.',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'refri-2l',
        title: 'Refrigerante 2 Litros',
        category: 'bebidas',
        price: 15.00,
        desc: 'Garrafa 2L gelada para a família inteira.',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.8'
    },
    {
        id: 'suco-lata',
        title: 'Suco Lata',
        category: 'bebidas',
        price: 7.00,
        desc: 'Suco de lata saboroso e gelado.',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.7'
    },
    {
        id: 'suco-pet',
        title: 'Suco PET 500ml',
        category: 'bebidas',
        price: 7.00,
        desc: 'Suco engarrafado 500ml bem gelado.',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.7'
    },
    {
        id: 'agua-mineral',
        title: 'Água Mineral (500ml)',
        category: 'bebidas',
        price: 3.50,
        desc: 'Água mineral geladinha, com ou sem gás.',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
        badge: '',
        rating: '4.8'
    }
];

// State
let cart = [];
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

// --- SÃO JOSÉ CART ENGINE LOGIC ---
let fulfillmentType = 'delivery';
let selectedPayment = 'Pix (Chave Copia e Cola)';
const deliveryFee = 6.00;
const CLIENT_WHATSAPP_SAO_JOSE = '555432234075';
const PIX_KEY_SAO_JOSE = '(54) 3223-4075';

// Add Item to Cart
window.addToCart = function(itemId) {
    const item = PRODUCTS.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(c => c.id === itemId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: 1,
            notes: ''
        });
    }

    updateCartUI();
    openCart();
    showToast(`🥟 <strong>${item.title}</strong> foi adicionado ao seu carrinho!`);
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
    const total = subtotal + activeDeliveryFee;

    let msg = `_pedido via site by Onira.fly_

${fulfillmentType === 'delivery' ? 'Solicitação de Tele-Entrega' : 'Solicitação de Retirada no balcão'}

`;

    cart.forEach(i => {
        const itemSum = i.price * i.quantity;
        msg += `*${i.quantity}x* ${i.title}
`;
        if (i.notes) msg += `_Obs: ${i.notes}_
`;
        msg += `*R$ ${itemSum.toFixed(2).replace('.', ',')}*

`;
    });

    msg += `*Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*
`;
    if (fulfillmentType === 'delivery') {
        msg += activeDeliveryFee > 0 ? `Entrega: R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}
` : `Entrega a combinar
`;
        msg += `*Total: R$ ${total.toFixed(2).replace('.', ',')}*
`;
    } else {
        msg += `*Total: R$ ${subtotal.toFixed(2).replace('.', ',')}*
`;
    }
    msg += `
`;

    if (customerName) msg += `*${customerName}*
`;
    if (fulfillmentType === 'delivery' && customerAddress) {
        msg += `${customerAddress}
`;
    }

    const isCash = selectedPayment.toLowerCase().includes('dinheiro');
    const isPix = selectedPayment.toLowerCase().includes('pix');

    if (isPix) {
        msg += `Pagamento em Pix — combinamos a chave por aqui
`;
    } else if (isCash) {
        msg += `Pagamento em dinheiro — ${cashChange ? `troco para R$ ${cashChange}` : 'sem troco'}
`;
    } else {
        msg += `Pagamento no cartão — favor levar a maquininha
`;
    }

    msg += `
_Enviado pelo site da Pastelaria São José_`;

    const url = `https://wa.me/${CLIENT_WHATSAPP_SAO_JOSE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}
window.sendWhatsAppOrder = sendWhatsAppOrder;
window.submitOrderWhatsApp = sendWhatsAppOrder;

// Call listeners setup on init
document.addEventListener('DOMContentLoaded', () => {
    setupCartDrawerListeners();
});
