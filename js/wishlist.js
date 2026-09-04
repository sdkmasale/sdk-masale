// SDK Masale — Shared Wishlist (localStorage based, no backend)
(function () {
  const WISH_KEY = 'sdk_wishlist';

  function getWishlist() {
    try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveWishlist(list) {
    localStorage.setItem(WISH_KEY, JSON.stringify(list));
    updateBadge();
    refreshHeartButtons();
  }
  function isWishlisted(id) {
    return getWishlist().includes(id);
  }
  function toggleWishlist(id) {
    let list = getWishlist();
    if (list.includes(id)) {
      list = list.filter(x => x !== id);
    } else {
      list.push(id);
    }
    saveWishlist(list);
    return list.includes(id);
  }
  function wishlistCount() {
    return getWishlist().length;
  }
  function updateBadge() {
    document.querySelectorAll('.wishlist-dot').forEach(el => { el.textContent = wishlistCount(); });
  }

  function refreshHeartButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      if (isWishlisted(id)) {
        btn.classList.add('wishlisted');
        btn.textContent = '♥';
      } else {
        btn.classList.remove('wishlisted');
        btn.textContent = '♡';
      }
    });
  }

  function wireHeartButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      if (btn.dataset.wired) return;
      btn.dataset.wired = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute('data-wishlist-id');
        const nowWishlisted = toggleWishlist(id);
        if (window.SDKCart && window.SDKCart.showToast) {
          window.SDKCart.showToast(nowWishlisted ? 'Added to wishlist' : 'Removed from wishlist');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateBadge();
    refreshHeartButtons();
    wireHeartButtons();
  });

  window.SDKWishlist = { getWishlist, toggleWishlist, isWishlisted, wishlistCount, wireHeartButtons, refreshHeartButtons };
})();
