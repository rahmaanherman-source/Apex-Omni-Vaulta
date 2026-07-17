// ============================================================
// GATEKEEPER — Authentication + Permission Engine
// Apex Omni Vault v2
// ============================================================

'use strict';

// ── State ────────────────────────────────────────────────────
let _authenticated = false;
let _userLane = 'guest'; // owner | admin | team | user | guest

// ── Permission Map ────────────────────────────────────────────
// '*' means all links are visible for that lane.
const PERMISSION_MAP = {
  owner:  ['*'],
  admin:  ['*'],
  team:   ['Admin Console', 'Gatekeeper Landing', 'Apex Bridge', 'GitHub Org', 'Apex Bridge Repo', 'GitHub Pages Root'],
  user:   ['Apex Life Global', 'Godspeed Subpage', 'MAC Music Official', 'GODSPEED Lovable'],
  guest:  ['Apex Life Global']
};

// ── DOM Refs ──────────────────────────────────────────────────
const authOverlay   = document.getElementById('auth-overlay');
const vaultEl       = document.getElementById('vault-container');
const authBtn       = document.getElementById('auth-btn');
const authStatus    = document.getElementById('auth-status');
const logoutBtn     = document.getElementById('logout-btn');
const laneBadge     = document.getElementById('user-lane-badge');

// ── Authenticate ──────────────────────────────────────────────
function authenticate() {
  authBtn.disabled = true;
  authStatus.textContent = 'Authenticating…';
  authStatus.style.color = 'var(--gold)';

  // Simulate biometric / SSO auth delay
  setTimeout(() => {
    _authenticated = true;
    _userLane = 'owner';

    authStatus.textContent = '✅ Authenticated as Owner';
    authStatus.style.color = 'var(--green, #22c55e)';

    setTimeout(() => {
      authOverlay.style.display = 'none';
      vaultEl.hidden = false;
      laneBadge.textContent = _userLane.toUpperCase();
      if (typeof renderVault === 'function') renderVault();
      updatePanel();
    }, 600);
  }, 1400);
}

authBtn.addEventListener('click', authenticate);

// ── Logout ────────────────────────────────────────────────────
logoutBtn.addEventListener('click', () => {
  _authenticated = false;
  _userLane = 'guest';
  vaultEl.hidden = true;
  authOverlay.style.display = 'flex';
  authBtn.disabled = false;
  authStatus.textContent = 'Logged out. Re‑authenticate to access.';
  authStatus.style.color = 'var(--text-muted, #94a3b8)';
});

// ── Public API (used by vault.js) ─────────────────────────────
window.getUserLane    = () => _userLane;
window.isAuthenticated = () => _authenticated;
window.canViewLink    = (name) => {
  const allowed = PERMISSION_MAP[_userLane] || [];
  return allowed.includes('*') || allowed.includes(name);
};

// ── Operator Panel ────────────────────────────────────────────
function updatePanel() {
  const el = (id) => document.getElementById(id);
  el('requests').textContent = (1000 + Math.floor(Math.random() * 500)).toLocaleString();
  el('sessions').textContent = (1  + Math.floor(Math.random() * 5)).toString();
  el('cache').textContent    = (80 + Math.floor(Math.random() * 15)) + '%';
  el('uptime').textContent   = '99.99%';
}
setInterval(updatePanel, 10_000);
window.updatePanel = updatePanel;

// ── Quick Actions ─────────────────────────────────────────────
document.querySelectorAll('.action-btn[data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    const messages = {
      deploy:  '🚀 Deploy triggered — pushing to production…',
      restart: '🔄 Restarting services…',
      logs:    '📜 Opening system logs…',
      backup:  '💾 Backup initiated…'
    };
    const msg = messages[btn.dataset.action] || 'Action triggered.';
    // Show a non-blocking toast instead of alert
    showToast(msg);
  });
});

// ── Toast Notification ────────────────────────────────────────
function showToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    background: '#111827',
    border: '1px solid #facc15',
    color: '#E2E8F0',
    padding: '12px 20px',
    borderRadius: '10px',
    fontSize: '0.85rem',
    zIndex: '9999',
    opacity: '0',
    transition: 'opacity 0.3s ease',
    maxWidth: '320px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.opacity = '1'; });
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}
