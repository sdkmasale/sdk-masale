// SDK Masale — Quick Profile (localStorage only — convenience prefill, NOT real authentication)
(function () {
  const PROFILE_KEY = 'sdk_profile';

  function getProfile() {
    try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) || null; }
    catch (e) { return null; }
  }
  function saveProfile(name, phone) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify({ name, phone }));
    refreshLoginLinks();
  }
  function clearProfile() {
    localStorage.removeItem(PROFILE_KEY);
    refreshLoginLinks();
  }

  function refreshLoginLinks() {
    const profile = getProfile();
    document.querySelectorAll('.login-link').forEach(el => {
      el.textContent = profile ? ('Hi, ' + profile.name.split(' ')[0]) : 'Login';
    });
  }

  function injectModalStyles() {
    const css = `
      .profile-overlay{position:fixed;inset:0;background:rgba(34,25,18,0.45);z-index:300;display:none;align-items:center;justify-content:center;}
      .profile-overlay.open{display:flex;}
      .profile-modal{background:var(--cream,#FBF3E8);border-radius:12px;padding:28px;width:340px;max-width:90vw;box-shadow:0 20px 50px rgba(0,0,0,0.25);}
      .profile-modal h3{font-family:'Fraunces',serif;font-size:19px;font-weight:700;margin-bottom:6px;}
      .profile-modal p{font-size:12.5px;color:var(--muted,#6B5E52);margin-bottom:18px;line-height:1.5;}
      .profile-modal input{width:100%;padding:12px 13px;border:1.5px solid var(--line,rgba(34,25,18,0.14));border-radius:7px;font-size:13.5px;margin-bottom:12px;font-family:'Work Sans',sans-serif;}
      .profile-modal-actions{display:flex;gap:10px;margin-top:6px;}
      .profile-btn-save{flex:1;padding:12px;background:var(--red,#A32418);color:#fff;border:none;border-radius:7px;font-size:13.5px;font-weight:600;cursor:pointer;}
      .profile-btn-cancel{padding:12px 16px;background:none;border:1.5px solid var(--line,rgba(34,25,18,0.14));border-radius:7px;font-size:13.5px;cursor:pointer;color:var(--muted,#6B5E52);}
      .profile-signout{display:block;text-align:center;font-size:12px;color:var(--muted,#6B5E52);text-decoration:underline;margin-top:14px;cursor:pointer;}
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  function injectModal() {
    const overlay = document.createElement('div');
    overlay.className = 'profile-overlay';
    overlay.id = 'profile-overlay';
    overlay.innerHTML = `
      <div class="profile-modal">
        <h3 id="profile-modal-title">Quick Profile</h3>
        <p id="profile-modal-desc">Save your name and phone on this device so checkout fills in faster next time. This isn't a secure account — it's just saved in your browser.</p>
        <input type="text" id="profile-name-input" placeholder="Your name">
        <input type="tel" id="profile-phone-input" placeholder="Phone number">
        <div class="profile-modal-actions">
          <button class="profile-btn-save" type="button" id="profile-save-btn">Save</button>
          <button class="profile-btn-cancel" type="button" id="profile-cancel-btn">Cancel</button>
        </div>
        <span class="profile-signout" id="profile-signout-btn" style="display:none;">Forget me on this device</span>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.getElementById('profile-cancel-btn').addEventListener('click', closeModal);
    document.getElementById('profile-save-btn').addEventListener('click', () => {
      const name = document.getElementById('profile-name-input').value.trim();
      const phone = document.getElementById('profile-phone-input').value.trim();
      if (!name || !phone) {
        if (window.SDKCart && window.SDKCart.showToast) window.SDKCart.showToast('Please enter your name and phone.');
        return;
      }
      saveProfile(name, phone);
      closeModal();
      if (window.SDKCart && window.SDKCart.showToast) window.SDKCart.showToast('Saved! Hi, ' + name.split(' ')[0] + '.');
    });
    document.getElementById('profile-signout-btn').addEventListener('click', () => {
      clearProfile();
      closeModal();
      if (window.SDKCart && window.SDKCart.showToast) window.SDKCart.showToast('Profile forgotten on this device.');
    });
  }

  function openModal() {
    const profile = getProfile();
    document.getElementById('profile-name-input').value = profile ? profile.name : '';
    document.getElementById('profile-phone-input').value = profile ? profile.phone : '';
    document.getElementById('profile-signout-btn').style.display = profile ? 'block' : 'none';
    document.getElementById('profile-overlay').classList.add('open');
  }
  function closeModal() {
    document.getElementById('profile-overlay').classList.remove('open');
  }

  function wireLoginLinks() {
    document.querySelectorAll('.login-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectModalStyles();
    injectModal();
    refreshLoginLinks();
    wireLoginLinks();
  });

  window.SDKProfile = { getProfile, saveProfile, clearProfile, openModal, closeModal };
})();
