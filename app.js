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

    updateCartUI();
};

window.removeFromCart = function(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
};

// Fulfillment Selection
window.setFulfillment = function(type) {
    fulfillmentType = type;
    document.getElementById('ful-delivery').classList.toggle('active', type === 'delivery');
    document.getElementById('ful-pickup').classList.toggle('active', type === 'pickup');

    const addressGroup = document.getElementById('address-group');
    const deliveryLine = document.getElementById('summary-delivery-line');
    
    if (type === 'pickup') {
        addressGroup.style.display = 'none';
        deliveryLine.style.display = 'none';
    } else {
        addressGroup.style.display = 'block';
        deliveryLine.style.display = 'flex';
    }

    updateCartTotals();
};

// Payment Method Change
window.onPaymentChange = function(val) {
    const changeGroup = document.getElementById('change-group');
    const pixBox = document.getElementById('pix-key-box');

    if (val === 'cash') {
        changeGroup.classList.remove('hidden');
    } else {
        changeGroup.classList.add('hidden');
    }

    if (val === 'pix') {
        pixBox.style.display = 'block';
    } else {
        pixBox.style.display = 'none';
    }
};

// Update Cart UI Components
function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const countBadges = [document.getElementById('cart-badge-count'), document.getElementById('mob-cart-count')];
    const headerTotal = document.getElementById('cart-total-header');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    countBadges.forEach(el => { if (el) el.textContent = totalQty; });

    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = `
            <div class="cart-empty">
                <i data-lucide="shopping-bag" style="width:48px; height:48px; color:#64748B; margin-bottom:12px;"></i>
                <p>Seu carrinho está vazio.</p>
                <span style="font-size:0.85rem; color:#94A3B8;">Que tal adicionar um pastel crocante ou um bolo especial?</span>
            </div>
        `;
    } else {
        list.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <span class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
                    <span class="qty-val">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="Remover item">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateCartTotals();

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = fulfillmentType === 'delivery' && subtotal > 0 ? 6.00 : 0.00;
    const total = subtotal + deliveryFee;

    document.getElementById('summary-subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('summary-delivery').textContent = deliveryFee > 0 ? `R$ ${deliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis (Retirada)';
    document.getElementById('summary-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    const headerTotal = document.getElementById('cart-total-header');
    if (headerTotal) headerTotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}

// Copy Pix Key Feedback
window.copyPixKey = function() {
    navigator.clipboard.writeText(CLIENT_PIX_KEY).then(() => {
        const btn = document.getElementById('btn-pix-copy');
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.style.background = '#10B981';
            btn.style.color = '#FFFFFF';
            btn.style.borderColor = '#10B981';
            btn.innerHTML = `<i data-lucide="check"></i> ✓ Chave Pix Copiada!`;
            
            if (window.lucide) window.lucide.createIcons();

            setTimeout(() => {
                btn.style.background = 'transparent';
                btn.style.color = '#38BDF8';
                btn.style.borderColor = '#38BDF8';
                btn.innerHTML = originalHTML;
                if (window.lucide) window.lucide.createIcons();
            }, 2500);
        }
        showToast('✓ Chave Pix da Pastelaria São José copiada com sucesso!');
    });
};

// Drawer Toggle
window.toggleCartDrawer = function(open) {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    
    if (drawer && overlay) {
        drawer.classList.toggle('open', open);
        overlay.classList.toggle('open', open);
    }
};

// Dispatch Order via WhatsApp
window.submitOrderWhatsApp = function() {
    if (cart.length === 0) {
        showToast('⚠️ Seu carrinho está vazio! Adicione itens antes de enviar.');
        return;
    }

    const name = document.getElementById('cust-name').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    const payment = document.getElementById('payment-method').value;
    const change = document.getElementById('cash-change').value.trim();
    const obs = document.getElementById('order-obs').value.trim();

    if (!name) {
        showToast('⚠️ Por favor, digite seu nome completo.');
        document.getElementById('cust-name').focus();
        return;
    }

    if (fulfillmentType === 'delivery' && !address) {
        showToast('⚠️ Por favor, informe o endereço completo de entrega.');
        document.getElementById('cust-address').focus();
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = fulfillmentType === 'delivery' ? 6.00 : 0.00;
    const total = subtotal + deliveryFee;

    let paymentStr = 'Pix (Chave: (54) 3223-4075)';
    if (payment === 'card') paymentStr = 'Cartão de Crédito / Débito (Máquina)';
    if (payment === 'cash') paymentStr = `Dinheiro na entrega${change ? ` (Troco para ${change})` : ''}`;

    let msg = `*🥟 NOVO PEDIDO - PASTELARIA SÃO JOSÉ*\n`;
    msg += `------------------------------------\n`;
    msg += `*Cliente:* ${name}\n`;
    msg += `*Tipo:* ${fulfillmentType === 'delivery' ? '🚗 Tele-Entrega' : '🏪 Retirada no Balcão'}\n`;
    if (fulfillmentType === 'delivery') {
        msg += `*Endereço:* ${address}\n`;
    }
    msg += `*Pagamento:* ${paymentStr}\n`;
    if (obs) {
        msg += `*Observações:* ${obs}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `*ITENS DO PEDIDO:*\n`;

    cart.forEach(item => {
        msg += `• ${item.qty}x ${item.title} - R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}\n`;
    });

    msg += `------------------------------------\n`;
    msg += `*Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (fulfillmentType === 'delivery') {
        msg += `*Taxa de Entrega:* R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
    }
    msg += `*TOTAL ESTIMADO:* R$ ${total.toFixed(2).replace('.', ',')}\n`;
    msg += `------------------------------------\n`;
    msg += `*Obrigado por escolher a Pastelaria São José!*`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${CLIENT_WHATSAPP}?text=${encoded}`;
    window.open(waUrl, '_blank');
};

// Toast Notifications
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-box';
    toast.innerHTML = message;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
