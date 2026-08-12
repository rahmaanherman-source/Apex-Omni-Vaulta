// APEX OMNI VAULT — canonical ecosystem registry
// Canonical service name: OMNI VAULT
// The GitHub repository slug may temporarily differ during a rename migration.
// Secrets belong in Vault/Gatekeeper, never in this file.

const APEX_IDENTITY = {
  canonicalName: "OMNI VAULT",
  canonicalRepositoryName: "Apex-Omni-Vault",
  canonicalRepositoryUrl: "https://github.com/rahmaanherman-source/Apex-Omni-Vault",
  aliases: [
    "Omni Vault",
    "Apex Omni Vault",
    "Apex-Omni-Vault",
    "Apex-Omni-Vaulta",
    "Omni Vaulta",
    "Omni Volta"
  ]
};

// Identity resolver: recognize the intended service even when an existing
// repository/destination still carries a legacy or mistyped slug.
function resolveApexIdentity(candidate = {}) {
  const values = [
    candidate.name,
    candidate.serviceName,
    candidate.repositoryName,
    candidate.repositoryUrl,
    candidate.url
  ].filter(Boolean).map(String).map(value => value.trim().toLowerCase());

  const canonical = [
    APEX_IDENTITY.canonicalName,
    APEX_IDENTITY.canonicalRepositoryName,
    APEX_IDENTITY.canonicalRepositoryUrl,
    ...APEX_IDENTITY.aliases
  ].map(value => value.toLowerCase());

  const matched = values.some(value => canonical.includes(value));
  return matched
    ? {
        matched: true,
        canonicalName: APEX_IDENTITY.canonicalName,
        canonicalRepositoryName: APEX_IDENTITY.canonicalRepositoryName,
        canonicalRepositoryUrl: APEX_IDENTITY.canonicalRepositoryUrl,
        reason: "canonical-name-or-known-alias"
      }
    : { matched: false };
}

const vaultRegistry = [
  // CORE — CONTROL PLANE
  { name: "APEX Hub", url: "https://apexlifeglobal.com/hub", category: "core", purpose: "APEX control plane" },
  { name: "Gabby", url: "https://github.com/rahmaanherman-source/Apex-Gabby-", category: "core", purpose: "Verified AI operator" },
  { name: "APEX Terminal", url: "https://github.com/rahmaanherman-source/APEX-TERMINAL", category: "core", purpose: "Command and execution layer" },
  { name: "Apex Bridge", url: "https://github.com/rahmaanherman-source/Apex-Bridge", category: "core", purpose: "Integration bridge" },
  { name: APEX_IDENTITY.canonicalName, url: APEX_IDENTITY.canonicalRepositoryUrl, category: "core", purpose: "Canonical ecosystem registry", identity: APEX_IDENTITY },

  // SECURITY / TRUTH
  { name: "Gatekeeper", url: "https://apexlifeglobal.com/gatekeeper", category: "security", purpose: "Access and authorization" },
  { name: "Truth Gate", url: "https://github.com/rahmaanherman-source/Truth-Gate-", category: "security", purpose: "Verification" },
  { name: "APEX Sentinel", url: "https://github.com/rahmaanherman-source/Apex-Sentinel", category: "security", purpose: "Security and monitoring" },
  { name: "APEX OAuth Wizard", url: "https://github.com/rahmaanherman-source/Apex-OAuth-Wizard", category: "security", purpose: "OAuth integration" },

  // CAPITAL — PRIORITY
  { name: "Revenue Juggernaut", url: "https://github.com/rahmaanherman-source/revenue-juggernaut", category: "capital", purpose: "Revenue generation" },
  { name: "APEX Omni Product Studio", url: "https://github.com/rahmaanherman-source/APEX-Omni-Product-Studio", category: "capital", purpose: "Product creation" },
  { name: "GODSPEED", url: "https://apexlifeglobal.com/godspeed", category: "capital", purpose: "Capital-generating operating initiatives" },
  { name: "TikTok Shop", url: "https://www.tiktok.com/shop", category: "commerce", purpose: "Commerce channel" },
  { name: "MAC Music Official", url: "https://macmusicofficial.com", category: "commerce", purpose: "Music/IP monetization" },
  { name: "Apex Life Global", url: "https://apexlifeglobal.com", category: "commerce", purpose: "Primary brand/business domain" },

  // IP / LEGACY
  { name: "APEX IP Engine", url: "https://github.com/rahmaanherman-source/Apex-IP-ENGINE-", category: "ip", purpose: "IP management" },
  { name: "GODSPEED Patent Engine", url: "https://github.com/rahmaanherman-source/GODSPEED-PATENT-ENGINE-", category: "ip", purpose: "Patent/IP workflow" },
  { name: "APEX Heritage", url: "https://github.com/rahmaanherman-source/Apex-Heritage-", category: "legacy", purpose: "Archive and heritage" },

  // KNOWLEDGE / ARCHIVE
  { name: "THE BRAIN V1", url: "https://github.com/rahmaanherman-source/THE-BRAIN-V1", category: "knowledge", purpose: "Prior brain architecture" },
  { name: "APEX Lifecycle V1", url: "https://github.com/rahmaanherman-source/APEX-Lifecycle-V1", category: "knowledge", purpose: "Lifecycle architecture" },
  { name: "The Ark HQ", url: "https://github.com/rahmaanherman-source/the-ark-hq", category: "archive", purpose: "Ark / family protection" },

  // AI / BUILD
  { name: "APEX Phoenix", url: "https://github.com/rahmaanherman-source/Apex-Phoenix-", category: "ai", purpose: "Google AI Studio build" },
  { name: "LightSpeed Forge", url: "https://github.com/rahmaanherman-source/LightSpeed-Forge", category: "build", purpose: "Rapid build layer" },
  { name: "APEX Forensic Vision", url: "https://github.com/rahmaanherman-source/Apex-Forensic-Vision", category: "ai", purpose: "Vision and evidence analysis" },

  // EXTERNAL / WORKFLOW
  { name: "FounderConnect", url: "https://apexlifeglobal.base44.app/this", category: "workflow", purpose: "Existing business workflow" },
  { name: "GODSPEED Lovable", url: "https://godspeed-x7-command.lovable.app", category: "workflow", purpose: "Existing app surface" },
  { name: "GitHub Account", url: "https://github.com/rahmaanherman-source", category: "dev", purpose: "Source control" },
  { name: "BandLab", url: "https://bandlab.com", category: "music", purpose: "Music production" },
  { name: "UnitedMasters", url: "https://unitedmasters.com", category: "music", purpose: "Music distribution" },
  { name: "Spotify", url: "https://spotify.com", category: "music", purpose: "Music distribution" },
  { name: "Apple Music", url: "https://music.apple.com", category: "music", purpose: "Music distribution" },
  { name: "TikTok", url: "https://www.tiktok.com", category: "social", purpose: "Audience and commerce" },
  { name: "Instagram", url: "https://www.instagram.com", category: "social", purpose: "Audience" },
  { name: "Facebook", url: "https://www.facebook.com", category: "social", purpose: "Audience" }
];

const vaultLinks = document.getElementById("vault-links");

vaultRegistry.forEach(item => {
  const div = document.createElement("div");
  div.className = `vault-item ${item.category}`;
  const resolved = resolveApexIdentity(item);
  const identityBadge = resolved.matched ? " <span class=\"identity-badge\">CANONICAL</span>" : "";
  div.innerHTML = `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}${identityBadge}</a>
    <div class="desc">${item.purpose}</div>
  `;
  vaultLinks.appendChild(div);
});

// Expose a safe, non-secret resolver for APEX Hub/Gabby integrations.
window.APEX_IDENTITY = Object.freeze(APEX_IDENTITY);
window.resolveApexIdentity = resolveApexIdentity;
