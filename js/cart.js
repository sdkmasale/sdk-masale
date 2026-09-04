// SDK Masale — Shared Cart (localStorage based, no backend)
(function () {
  const CART_KEY = 'sdk_cart';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateBadge();
  }
  function cartCount() {
    return getCart().reduce((n, i) => n + i.qty, 0);
  }
  function cartTotal() {
    return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
  }
  function updateBadge() {
    document.querySelectorAll('.cart-dot').forEach(el => { el.textContent = cartCount(); });
  }

  function addToCart(item) {
    // item: {id, name, sizeKey, sizeLabel, price, mrp, image, qty}
    const cart = getCart();
    const existing = cart.find(c => c.id === item.id && c.sizeKey === item.sizeKey);
    if (existing) { existing.qty += item.qty; }
    else { cart.push(item); }
    saveCart(cart);
    renderDrawer();
    openCart();
  }
  function removeItem(idx) {
    const cart = getCart();
    cart.splice(idx, 1);
    saveCart(cart);
    renderDrawer();
  }
  function changeQty(idx, delta) {
    const cart = getCart();
    if (!cart[idx]) return;
    cart[idx].qty += delta;
    if (cart[idx].qty < 1) { cart.splice(idx, 1); }
    saveCart(cart);
    renderDrawer();
  }

  function injectStyles() {
    const css = `
      .cart-overlay{position:fixed;inset:0;background:rgba(34,25,18,0.45);z-index:200;opacity:0;pointer-events:none;transition:opacity .25s ease;}
      .cart-overlay.open{opacity:1;pointer-events:auto;}
      .cart-drawer{position:fixed;top:0;right:0;bottom:0;width:400px;max-width:92vw;background:var(--cream, #FBF3E8);z-index:201;
        transform:translateX(100%);transition:transform .3s ease;display:flex;flex-direction:column;box-shadow:-8px 0 28px rgba(0,0,0,0.18);}
      .cart-drawer.open{transform:translateX(0);}
      .cart-head{display:flex;align-items:center;justify-content:space-between;padding:20px 22px;border-bottom:1px solid var(--line, rgba(34,25,18,0.1));}
      .cart-head h3{font-family:'Fraunces',serif;font-size:19px;font-weight:700;color:var(--ink,#221912);}
      .cart-close{background:none;border:none;font-size:22px;cursor:pointer;color:var(--muted,#6B5E52);line-height:1;}
      .cart-items{flex:1;overflow-y:auto;padding:14px 18px;}
      .cart-empty{padding:60px 20px;text-align:center;color:var(--muted,#6B5E52);font-size:14px;}
      .cart-item{display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--line, rgba(34,25,18,0.08));}
      .cart-item-img{width:64px;height:64px;background:var(--cream-2,#F3E6D6);border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;padding:6px;}
      .cart-item-img img{max-width:100%;max-height:100%;object-fit:contain;}
      .cart-item-info{flex:1;min-width:0;}
      .cart-item-info h5{font-family:'Work Sans',sans-serif;font-size:13.5px;font-weight:600;color:var(--ink,#221912);margin-bottom:2px;
        overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
      .cart-item-size{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted,#6B5E52);margin-bottom:8px;}
      .cart-item-row{display:flex;align-items:center;justify-content:space-between;}
      .cart-qty{display:flex;align-items:center;border:1px solid var(--line, rgba(34,25,18,0.15));border-radius:6px;overflow:hidden;}
      .cart-qty button{width:24px;height:24px;background:#fff;border:none;cursor:pointer;font-size:13px;color:var(--ink,#221912);}
      .cart-qty span{width:24px;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:12px;}
      .cart-item-price{font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;color:var(--red-dark,#7E1B12);}
      .cart-item-remove{background:none;border:none;color:var(--muted,#6B5E52);font-size:12px;cursor:pointer;text-decoration:underline;padding:0;margin-top:6px;}
      .cart-item-remove:hover{color:var(--red,#A32418);}
      .cart-foot{border-top:1px solid var(--line, rgba(34,25,18,0.1));padding:18px 22px 22px;}
      .cart-subtotal{display:flex;justify-content:space-between;font-family:'IBM Plex Mono',monospace;font-size:15px;font-weight:600;color:var(--ink,#221912);margin-bottom:14px;}
      .cart-checkout{width:100%;padding:14px;background:var(--red,#A32418);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;font-family:'Work Sans',sans-serif;}
      .cart-checkout:hover{background:var(--red-dark,#7E1B12);}
      .cart-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--ink,#221912);color:#fff;
        padding:12px 20px;border-radius:8px;font-size:13.5px;z-index:250;opacity:0;pointer-events:none;transition:all .25s ease;font-family:'Work Sans',sans-serif;}
      .cart-toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
    `;
    const style = document.createElement('style');
    style.id = 'cart-shared-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function injectDrawer() {
    const overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    overlay.id = 'cart-overlay';

    const drawer = document.createElement('div');
    drawer.className = 'cart-drawer';
    drawer.id = 'cart-drawer';
    drawer.innerHTML = `
      <div class="cart-head">
        <h3>Your Cart</h3>
        <button class="cart-close" id="cart-close-btn" type="button">&times;</button>
      </div>
      <div class="cart-items" id="cart-items"></div>
      <div class="cart-foot">
        <div class="cart-subtotal"><span>Subtotal</span><span id="cart-subtotal-val">₹0</span></div>
        <a class="cart-checkout" id="cart-view-btn" href="cart.html" style="display:block;text-align:center;text-decoration:none;">View Cart</a>
      </div>
    `;

    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.id = 'cart-toast';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    document.body.appendChild(toast);

    overlay.addEventListener('click', closeCart);
    document.getElementById('cart-close-btn').addEventListener('click', closeCart);
  }

  function renderDrawer() {
    const cart = getCart();
    const wrap = document.getElementById('cart-items');
    if (!wrap) return;

    if (cart.length === 0) {
      wrap.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
    } else {
      wrap.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
          <div class="cart-item-img"><img src="${item.image}" alt="${item.name}"></div>
          <div class="cart-item-info">
            <h5>${item.name}</h5>
            <div class="cart-item-size">${item.sizeLabel}</div>
            <div class="cart-item-row">
              <div class="cart-qty">
                <button type="button" data-action="dec" data-idx="${idx}">–</button>
                <span>${item.qty}</span>
                <button type="button" data-action="inc" data-idx="${idx}">+</button>
              </div>
              <div class="cart-item-price">₹${item.price * item.qty}</div>
            </div>
            <button class="cart-item-remove" type="button" data-action="remove" data-idx="${idx}">Remove</button>
          </div>
        </div>
      `).join('');
    }

    document.getElementById('cart-subtotal-val').textContent = '₹' + cartTotal();

    wrap.querySelectorAll('button[data-action]').forEach(btn => {
      const idx = parseInt(btn.dataset.idx, 10);
      const action = btn.dataset.action;
      btn.addEventListener('click', () => {
        if (action === 'inc') changeQty(idx, 1);
        else if (action === 'dec') changeQty(idx, -1);
        else if (action === 'remove') removeItem(idx);
      });
    });
  }

  function openCart() {
    document.getElementById('cart-overlay').classList.add('open');
    document.getElementById('cart-drawer').classList.add('open');
  }
  function closeCart() {
    document.getElementById('cart-overlay').classList.remove('open');
    document.getElementById('cart-drawer').classList.remove('open');
  }

  let toastTimer;
  function showToast(msg) {
    const toast = document.getElementById('cart-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function wireCartLinks() {
    // Header cart icon now navigates to the full cart page (cart.html).
    // The drawer itself is still used as a quick "just added" confirmation.
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectStyles();
    injectDrawer();
    updateBadge();
    renderDrawer();
    wireCartLinks();
  });

  window.SDKCart = { addToCart, removeItem, changeQty, cartTotal, cartCount, getCart, showToast, openCart, closeCart };
})();
