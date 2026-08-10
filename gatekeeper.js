// ============================================================
// GATEKEEPER — Front-End Session Gate
// Apex Omni Vault
// IMPORTANT: This static site gate is NOT a security boundary.
// Real authentication/authorization must be enforced server-side
// by the connected APEX Vault identity provider.
// ============================================================

'use strict';

let _authenticated = false;
let _userLane = 'guest';

const PERMISSION_MAP = {
  owner: ['*'],
  admin: ['*'],
  team: ['Admin Console', 'Gatekeeper Landing', 'Apex Bridge', 'GitHub Org', 'Apex Bridge Repo', 'GitHub Pages Root'],
  user: ['Apex Life Global', 'Godspeed Subpage', 'MAC Music Official', 'GODSPEED Lovable'],
  guest: ['Apex Life Global']
};

const authOverlay = document.getElementById('auth-overlay');
const vaultEl = document.getElementById('vault-container');
const authBtn = document.getElementById('auth-btn');
const authStatus = document.getElementById('auth-status');
const logoutBtn = document.getElementById('logout-btn');
const laneBadge = document.getElementById('user-lane-badge');

function setGuestState(message = 'Authentication is not configured in this static front-end.') {
  _authenticated = false;
  _userLane = 'guest';
  if (laneBadge) laneBadge.textContent = 'GUEST';
  if (authStatus) {
    authStatus.textContent = message;
    authStatus.style.color = 'var(--text-muted, #94a3b8)';
  }
}

function authenticate() {
  authBtn.disabled = true;
  authStatus.textContent = 'Checking connected authentication…';
  authStatus.style.color = 'var(--gold, #facc15)';

  // This static deployment cannot securely authenticate an owner.
  // Never promote a browser session to OWNER without a real provider.
  setTimeout(() => {
    setGuestState('No real authentication provider is connected to this static build.');
    authBtn.disabled = false;
    if (vaultEl) vaultEl.hidden = false;
    if (typeof renderVault === 'function') renderVault();
  }, 150);
}

authBtn.addEventListener('click', authenticate);

logoutBtn.addEventListener('click', () => {
  setGuestState('Logged out. Connect the APEX authentication provider to authenticate.');
  if (vaultEl) vaultEl.hidden = true;
  authBtn.disabled = false;
  authOverlay.style.display = 'flex';
});

window.getUserLane = () => _userLane;
window.isAuthenticated = () => _authenticated;
window.canViewLink = (name) => {
  const allowed = PERMISSION_MAP[_userLane] || [];
  return allowed.includes('*') || allowed.includes(name);
};

function updatePanel() {
  const values = {
    uptime: 'LIVE DATA REQUIRED',
    requests: 'UNVERIFIED',
    sessions: 'UNVERIFIED',
    cache: 'UNVERIFIED'
  };
  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

window.updatePanel = updatePanel;
updatePanel();

// These controls are navigation placeholders only until real APEX
// execution providers are connected. Never claim an action occurred.
document.querySelectorAll('.action-btn[data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    const labels = {
      deploy: 'Deployment provider is not connected to this static Vault.',
      restart: 'Runtime restart provider is not connected to this static Vault.',
      logs: 'Live log provider is not connected to this static Vault.',
      backup: 'Backup provider is not connected to this static Vault.'
    };
    showToast(labels[btn.dataset.action] || 'Execution provider is not connected.');
  });
});

function showToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '24px', right: '24px',
    background: '#111827', border: '1px solid #facc15', color: '#E2E8F0',
    padding: '12px 20px', borderRadius: '10px', fontSize: '0.85rem',
    zIndex: '9999', opacity: '0', transition: 'opacity 0.3s ease',
    maxWidth: '320px', boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.opacity = '1'; });
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}
