// ============================================================
// APEX OMNI VAULT — Complete Link Registry + Render Engine
// v2  |  Permission-filtered  |  Search + Category filter
// ============================================================

'use strict';

// ── Registry ──────────────────────────────────────────────────
// Each entry: { name, url, desc, cat }
// cat values: core | apps | github | music | social | payments | cloud | devtools | lovable
const VAULT_REGISTRY = [

  // ── CORE DOMAINS ──────────────────────────────────────────
  { name: 'Apex Life Global',  url: 'https://apexlifeglobal.com',          desc: 'Main domain',        cat: 'core' },
  { name: 'Godspeed Subpage',  url: 'https://apexlifeglobal.com/godspeed', desc: 'Godspeed portal',    cat: 'core' },
  { name: '2Life Global',      url: 'https://2lifeglobal.com',             desc: 'Secondary domain',   cat: 'core' },
  { name: 'MAC Music Official',url: 'https://macmusicofficial.com',        desc: 'Official music site',cat: 'core' },

  // ── LIVE APPS & DASHBOARDS ─────────────────────────────────
  { name: 'Admin Console',      url: 'https://godspeed-connect-flow.base44.app/dashboard', desc: 'GODSPEED Admin',      cat: 'apps' },
  { name: 'Base44 App',         url: 'https://apexlifeglobal.base44.app/this',             desc: 'Base44 platform',     cat: 'apps' },
  { name: 'Gatekeeper Landing', url: 'https://thegatekeeper0.godaddysites.com',            desc: 'Access control site', cat: 'apps' },
  { name: 'Apex Bridge',        url: 'https://rahmaanherman-source.github.io/Apex-Bridge', desc: 'Bridge (Pages)',      cat: 'apps' },
  { name: 'GODSPEED Lovable',   url: 'https://godspeed-x7-command.lovable.app',            desc: 'Lovable live app',    cat: 'apps' },

  // ── GITHUB ────────────────────────────────────────────────
  { name: 'GitHub Org',         url: 'https://github.com/rahmaanherman-source',                    desc: 'Organization',    cat: 'github' },
  { name: 'Apex Bridge Repo',   url: 'https://github.com/rahmaanherman-source/Apex-Bridge',        desc: 'Bridge repo',     cat: 'github' },
  { name: 'GitHub Pages Root',  url: 'https://rahmaanherman-source.github.io',                     desc: 'Pages root',      cat: 'github' },

  // ── MUSIC & DISTRIBUTION ──────────────────────────────────
  { name: 'BandLab',        url: 'https://bandlab.com',          desc: 'Music production',    cat: 'music' },
  { name: 'UnitedMasters',  url: 'https://unitedmasters.com',    desc: 'Distribution',        cat: 'music' },
  { name: 'SoundCloud',     url: 'https://soundcloud.com',       desc: 'Streaming',           cat: 'music' },
  { name: 'Spotify',        url: 'https://spotify.com',          desc: 'Streaming',           cat: 'music' },
  { name: 'Apple Music',    url: 'https://music.apple.com',      desc: 'Apple streaming',     cat: 'music' },
  { name: 'Pandora',        url: 'https://pandora.com',          desc: 'Streaming',           cat: 'music' },

  // ── SOCIAL & CONTENT ──────────────────────────────────────
  { name: 'TikTok',       url: 'https://tiktok.com',       desc: 'Short video',   cat: 'social' },
  { name: 'TikTok Shop',  url: 'https://tiktok.com/shop',  desc: 'Commerce',      cat: 'social' },
  { name: 'Instagram',    url: 'https://instagram.com',    desc: 'Photo / video', cat: 'social' },
  { name: 'Facebook',     url: 'https://facebook.com',     desc: 'Social',        cat: 'social' },
  { name: 'Snapchat',     url: 'https://snapchat.com',     desc: 'Stories',       cat: 'social' },
  { name: 'YouTube',      url: 'https://youtube.com',      desc: 'Video',         cat: 'social' },
  { name: 'Canva',        url: 'https://canva.com',        desc: 'Design',        cat: 'social' },
  { name: 'Adobe',        url: 'https://adobe.com',        desc: 'Creative suite',cat: 'social' },
  { name: 'Midjourney',   url: 'https://midjourney.com',   desc: 'AI image gen',  cat: 'social' },
  { name: 'RunwayML',     url: 'https://runwayml.com',     desc: 'AI video gen',  cat: 'social' },

  // ── PAYMENTS ──────────────────────────────────────────────
  { name: 'Shopify Store', url: 'https://shop.app',         desc: 'Commerce',   cat: 'payments' },
  { name: 'Cash App',      url: 'https://cash.app',         desc: 'Payments',   cat: 'payments' },
  { name: 'Zelle',         url: 'https://zellepay.com',     desc: 'Payments',   cat: 'payments' },

  // ── CLOUD & INFRASTRUCTURE ────────────────────────────────
  { name: 'DigitalOcean',      url: 'https://digitalocean.com',       desc: 'Cloud hosting',  cat: 'cloud' },
  { name: 'AWS',               url: 'https://aws.amazon.com',         desc: 'Cloud platform', cat: 'cloud' },
  { name: 'Google Cloud Shell',url: 'https://cloud.google.com/shell', desc: 'Cloud shell',    cat: 'cloud' },
  { name: 'Snowflake',         url: 'https://snowflake.com',          desc: 'Data warehouse', cat: 'cloud' },
  { name: 'Datadog',           url: 'https://datadoghq.com',          desc: 'Monitoring',     cat: 'cloud' },
  { name: 'MongoDB Atlas',     url: 'https://mongodb.com/atlas',      desc: 'Database',       cat: 'cloud' },
  { name: 'Firebase',          url: 'https://firebase.google.com',    desc: 'Backend',        cat: 'cloud' },
  { name: 'IBM Cloud',         url: 'https://ibm.com',                desc: 'Enterprise cloud',cat: 'cloud' },

  // ── DEVELOPMENT TOOLS ─────────────────────────────────────
  { name: 'Lovable',       url: 'https://lovable.dev',          desc: 'AI app builder', cat: 'devtools' },
  { name: 'GitLab',        url: 'https://gitlab.com',           desc: 'Git hosting',    cat: 'devtools' },
  { name: 'Hostinger',     url: 'https://hostinger.com',        desc: 'Hosting',        cat: 'devtools' },
  { name: 'Zoom',          url: 'https://zoom.us',              desc: 'Video calls',    cat: 'devtools' },
  { name: 'Google Drive',  url: 'https://drive.google.com',     desc: 'Cloud storage',  cat: 'devtools' },
  { name: 'Dropbox',       url: 'https://dropbox.com',          desc: 'File storage',   cat: 'devtools' },

  // ── LOVABLE PROJECTS (11) ─────────────────────────────────
  { name: 'Lovable Project 1',  url: 'https://lovable.dev/projects/8c4dd1e8-055a-49b0-b1e2-e4f56430ac6c', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 2',  url: 'https://lovable.dev/projects/960d4852-809d-413f-b4eb-de5b4e326082', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 3',  url: 'https://lovable.dev/projects/7dd6aa49-afda-4aca-aa84-a6e4585d78f0', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 4',  url: 'https://lovable.dev/projects/de2de274-07a8-4e03-a8c4-14533a7c85b0', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 5',  url: 'https://lovable.dev/projects/81f03100-95db-49f1-a926-d77924b78050', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 6',  url: 'https://lovable.dev/projects/78f287cc-6d5a-4b35-87ce-eb30a8a824ba', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 7',  url: 'https://lovable.dev/projects/6d4e205c-ddcf-4f8a-b82b-81de4f71575e', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 8',  url: 'https://lovable.dev/projects/440feea8-e7b4-44bd-872c-773ed869544e', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 9',  url: 'https://lovable.dev/projects/487686fb-aee4-41fc-b12b-841a2068a4dd', desc: 'Apex project', cat: 'lovable' },
  { name: 'Lovable Project 10', url: 'https://lovable.dev/projects/3c463366-8df2-4a3c-8744-dd398e3e45a4', desc: 'Apex project', cat: 'lovable' },
  { name: 'GODSPEED Live App',  url: 'https://godspeed-x7-command.lovable.app',                           desc: 'Godspeed live', cat: 'lovable' }
];

// ── Category Labels ───────────────────────────────────────────
const CAT_LABELS = {
  core:     'Core',
  apps:     'Apps',
  github:   'GitHub',
  music:    'Music',
  social:   'Social',
  payments: 'Payments',
  cloud:    'Cloud',
  devtools: 'Dev Tools',
  lovable:  'Lovable'
};

// ── Render ────────────────────────────────────────────────────
let _activeCat   = 'all';
let _searchQuery = '';

function renderVault() {
  const container = document.getElementById('vault-links');
  const emptyMsg  = document.getElementById('vault-empty');
  const q         = _searchQuery.toLowerCase().trim();

  // Permission filter
  const canView = (typeof window.canViewLink === 'function')
    ? window.canViewLink
    : () => true;

  const filtered = VAULT_REGISTRY.filter(item => {
    if (!canView(item.name)) return false;
    if (_activeCat !== 'all' && item.cat !== _activeCat) return false;
    if (q && !item.name.toLowerCase().includes(q) && !item.desc.toLowerCase().includes(q)) return false;
    return true;
  });

  container.innerHTML = '';

  if (filtered.length === 0) {
    emptyMsg.hidden = false;
    return;
  }
  emptyMsg.hidden = true;

  filtered.forEach(item => {
    const li = document.createElement('li');
    li.className  = 'vault-item';
    li.role       = 'listitem';
    li.innerHTML  = `
      <span class="cat-tag">${CAT_LABELS[item.cat] || item.cat}</span>
      <a href="${escHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escHtml(item.name)}</a>
      <div class="desc">${escHtml(item.desc)}</div>
    `;
    container.appendChild(li);
  });
}

// ── Sanitise HTML to prevent XSS (belt-and-braces) ────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Expose renderVault so gatekeeper.js can call it ───────────
window.renderVault = renderVault;

// ── Category Filter Buttons ───────────────────────────────────
function buildCategoryFilters() {
  const bar  = document.getElementById('category-filters');
  const cats = [...new Set(VAULT_REGISTRY.map(i => i.cat))];

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className       = 'filter-btn';
    btn.dataset.cat     = cat;
    btn.type            = 'button';
    btn.textContent     = CAT_LABELS[cat] || cat;
    bar.appendChild(btn);
  });

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    _activeCat = btn.dataset.cat;
    renderVault();
  });
}

// ── Search ────────────────────────────────────────────────────
document.getElementById('vault-search').addEventListener('input', e => {
  _searchQuery = e.target.value;
  renderVault();
});

// ── Footer Year ───────────────────────────────────────────────
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Mermaid Init ──────────────────────────────────────────────
if (typeof mermaid !== 'undefined') {
  mermaid.initialize({ startOnLoad: true, theme: 'dark' });
}

// ── Init ──────────────────────────────────────────────────────
buildCategoryFilters();
