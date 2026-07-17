// Omni Vault Link Registry
const vaultRegistry = [
  { name: "Apex Hub", url: "https://apexlifeglobal.com/hub" },
  { name: "Gatekeeper", url: "https://apexlifeglobal.com/gatekeeper" },
  { name: "FounderConnect", url: "https://apexlifeglobal.base44.app/this" },
  { name: "GODSPEED", url: "https://apexlifeglobal.com/godspeed" },
  { name: "Apex Bridge", url: "https://apexlifeglobal.com/bridge" }
];

// Render Vault
const vaultLinks = document.getElementById("vault-links");

vaultRegistry.forEach(item => {
  const div = document.createElement("div");
  div.className = "vault-item";
  div.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
  vaultLinks.appendChild(div);
});
