const toolsData = [
  {
    id: "cursor",
    name: "Cursor",
    category: "ide",
    categoryLabel: "AI-First IDE",
    status: "active",
    statusLabel: "Active",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://cursor.com",
    github: "",
    installCmd: "",
    desc: "A highly popular AI-first code editor fork of VS Code. Built for fast agentic workflows with its 'Auto' mode and deep codebase index.",
    freeTier: {
      models: "Cursor-small, Claude 3.5 Sonnet (limited)",
      limits: "Hobby Plan: Limited daily/monthly Agent requests, standard Tab autocompletes."
    },
    paidTier: {
      price: "$20/mo (Pro) | $60/mo (Pro+) | $200/mo (Ultra)",
      models: "Claude 3.5/3.7 Sonnet, GPT-4o, GPT-5",
      limits: "Pro: Unlimited autocomplete & Auto mode, plus a $20/mo credit pool for premium models."
    },
    registration: {
      process: "Sign up via Email, Google, or GitHub.",
      requirements: "No payment card required for Free. Pro subscription requires a credit card."
    },
    promotions: {
      trials: "1-week free Pro trial for new accounts (no credit card required during trial)."
    },
    extraInfo: "Supports custom MCP servers and allows users to opt-in to 'BYOK' mode if they prefer to pay their own API providers directly."
  },
  {
    id: "windsurf",
    name: "Windsurf",
    category: "ide",
    categoryLabel: "AI-First IDE",
    status: "active",
    statusLabel: "Active",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://codeium.com/windsurf",
    github: "",
    installCmd: "",
    desc: "An AI-native IDE by Codeium featuring 'Cascade', a collaborative agent workflow that switches fluidly between copilot and autonomous coding.",
    freeTier: {
      models: "Cascade (proprietary Codeium models, light quota)",
      limits: "Free Plan: Limited daily usage quota, unlimited Tab completions."
    },
    paidTier: {
      price: "$20/mo (Pro) | $200/mo (Max)",
      models: "SWE-1, SWE-1.5, Claude Sonnet 4.6, GPT-5, Gemini 3.1 Pro",
      limits: "Pro: Standard daily/weekly usage quota, unlimited Tab completions, unlimited inline Command edits."
    },
    registration: {
      process: "Create a Codeium account (Google, GitHub, or Email).",
      requirements: "Credit card required to subscribe to Pro/Max plans."
    },
    promotions: {
      trials: "Occasional free trial vouchers for new sign-ups. Previously grandfathered older $15 users with bonus credits."
    },
    extraInfo: "Switched from a credit-based billing system to a quota-based system in March 2026 to simplify usage tracking."
  },
  {
    id: "kiro",
    name: "Kiro (AWS Kiro)",
    category: "ide",
    categoryLabel: "AI-First IDE",
    status: "active",
    statusLabel: "Active",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://kiro.dev",
    github: "https://github.com/aws/kiro",
    installCmd: "",
    desc: "An agentic IDE fork of VS Code developed by AWS, focused on 'spec-driven development'—planning, design, and specs before coding.",
    freeTier: {
      models: "Claude Sonnet 4.5, open-weight models",
      limits: "Free Plan: 50 credits/month (perpetual, reset monthly)."
    },
    paidTier: {
      price: "$20/mo (Pro: 1k credits) | $40/mo (Pro+: 2k) | $200/mo (Power: 10k)",
      models: "Claude 4.5/4.6, Claude Opus, various premium models",
      limits: "Credits consumed fractionally based on task complexity. Overage option: $0.04 per additional credit."
    },
    registration: {
      process: "Sign up at kiro.dev or link an existing AWS Account.",
      requirements: "No card needed for Free. AWS billing or standard credit card for paid tiers."
    },
    promotions: {
      trials: "First-time Pro upgrade receives a $20 bonus (1,000 credits). **University students get 1,000 credits/mo free for 1 year**."
    },
    extraInfo: "Built-in agent hooks and steering rules for automated project-level compliance. Integrates with AWS ecosystem."
  },
  {
    id: "claudecode",
    name: "Claude Code",
    category: "cli",
    categoryLabel: "CLI Agent",
    status: "active",
    statusLabel: "Active",
    isOpenSource: false,
    hasFreeTier: false,
    website: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code",
    github: "",
    installCmd: "npm install -g @anthropic/claude-code",
    desc: "Anthropic's official terminal-native coding agent. It directly executes tests, edits files, and manages git histories via Claude models.",
    freeTier: {
      models: "None",
      limits: "CLI requires a paid Anthropic account/subscription or API keys."
    },
    paidTier: {
      price: "$20/mo (Pro Subscription) or Pay-as-you-go API",
      models: "Claude Sonnet (default Sonnet 4.6), Claude Opus 4.6/4.7",
      limits: "Pro plan: Subject to standard Web/App token quotas (resetting every 5 hours). API plan: Billed per token."
    },
    registration: {
      process: "Log in with an Anthropic Account via web browser when prompted in terminal.",
      requirements: "Anthropic Console account with billing set up (for API) or Claude Pro consumer subscription."
    },
    promotions: {
      trials: "New Anthropic Console API accounts receive a free $5 credit to try models."
    },
    extraInfo: "Allows developers to work entirely inside the terminal. Can be configured to run tests and self-repair code bases."
  },
  {
    id: "openai-codex",
    name: "OpenAI Codex",
    category: "cli",
    categoryLabel: "CLI & App Suite",
    status: "active",
    statusLabel: "Active",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://github.com/openai/codex",
    github: "https://github.com/openai/codex",
    installCmd: "npm i -g @openai/codex",
    desc: "OpenAI's official developer suite including Codex CLI (Rust-based), Desktop App, and ChatGPT web-agent integrations.",
    freeTier: {
      models: "GPT-5.4-Mini (via ChatGPT free limits)",
      limits: "Strict request limits under standard ChatGPT free tier."
    },
    paidTier: {
      price: "Included in ChatGPT Plus ($20/mo) / Pro ($200/mo) / API key",
      models: "GPT-5.5, GPT-5.4-Mini, custom agent models",
      limits: "Token-based credit system. API key mode allows pay-as-you-go billing directly per million tokens."
    },
    registration: {
      process: "Log in with OpenAI/ChatGPT credentials via OAuth when launching the CLI.",
      requirements: "Requires active OpenAI account. Credit card required for API pay-as-you-go or ChatGPT Plus."
    },
    promotions: {
      trials: "None currently active. Standard OpenAI API accounts may receive trial credits."
    },
    extraInfo: "Features Model Context Protocol (MCP) server support, enabling the local CLI to execute command tools and query databases."
  },
  {
    id: "opencode",
    name: "OpenCode",
    category: "cli",
    categoryLabel: "CLI Agent",
    status: "active",
    statusLabel: "Active",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://opencode.ai",
    github: "https://github.com/opencode/opencode",
    installCmd: "go install github.com/opencode/opencode@latest",
    desc: "An open-source terminal CLI/TUI coding agent built in Go. Model-agnostic and supports split 'Plan' and 'Build' modes for safe editing.",
    freeTier: {
      models: "Any local model (Ollama) or bring your own API keys (free app)",
      limits: "100% free to run. Limits are determined by your own API keys/local computer capacity."
    },
    paidTier: {
      price: "$10/mo (OpenCode Go) | Pay-as-you-go (OpenCode Zen)",
      models: "Curated agent models (GLM, Kimi, MiniMax, DeepSeek, Claude)",
      limits: "OpenCode Go: Usage-based pricing capping at $12 per 5 hours / $60 per month. Zen: Pay-as-you-go at cost."
    },
    registration: {
      process: "No registration required for BYOK / local offline usage. Web registration needed for OpenCode Go subscription.",
      requirements: "None for local. Email and payment method for OpenCode Go."
    },
    promotions: {
      trials: "OpenCode Go subscription costs only $5 for the first month."
    },
    extraInfo: "Supports 75+ AI providers. Known for running fully local, privacy-focused workflows with zero data storage."
  },
  {
    id: "atomcode",
    name: "AtomCode",
    category: "cli",
    categoryLabel: "CLI Agent",
    status: "active",
    statusLabel: "Active",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://atomgit.com/atomcode/atomcode",
    github: "https://atomgit.com/atomcode/atomcode",
    installCmd: "cargo install atomcode",
    desc: "An open-source Rust-based terminal coding agent. Focuses on small, self-verifying steps and HarmonyOS PC integration.",
    freeTier: {
      models: "BYOK (Claude, GPT-4o, DeepSeek, local Ollama)",
      limits: "100% free open-source CLI. Billed directly by your selected LLM API providers."
    },
    paidTier: {
      price: "None (Free Software)",
      models: "Any API-compatible model",
      limits: "Self-hosted / BYOK. Billed by third-party model providers."
    },
    registration: {
      process: "No registration. Simply build/run the binary locally.",
      requirements: "Requires API keys from model providers if using cloud LLMs."
    },
    promotions: {
      trials: "MIT licensed, completely free software."
    },
    extraInfo: "Features a built-in token cost estimation database to help you track how much your API keys are spending."
  },
  {
    id: "aider",
    name: "Aider",
    category: "cli",
    categoryLabel: "CLI Agent",
    status: "active",
    statusLabel: "Active",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://aider.chat",
    github: "https://github.com/paul-gauthier/aider",
    installCmd: "pip install aider-chat",
    desc: "A widely popular command-line chat tool that lets you code with LLMs in your local git repository. Extremely efficient context management.",
    freeTier: {
      models: "BYOK (Claude 3.5 Sonnet, GPT-4o, DeepSeek, Ollama local)",
      limits: "100% free tool. No software fees. Run offline with local models for zero cost."
    },
    paidTier: {
      price: "None (Free Software)",
      models: "Any OpenAI/Anthropic/Gemini/OpenRouter model",
      limits: "Billed directly by API providers based on your key usage."
    },
    registration: {
      process: "No registration or account creation needed.",
      requirements: "Only your own API keys or a local LLM setup (Ollama/LM Studio)."
    },
    promotions: {
      trials: "Always free and open-source."
    },
    extraInfo: "Supports 'Architect Mode' which routes planning to a strong model and edits to a cheap one, saving API costs."
  },
  {
    id: "cline",
    name: "Cline",
    category: "extension",
    categoryLabel: "VS Code Extension",
    status: "active",
    statusLabel: "Active",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://cline.bot",
    github: "https://github.com/cline/cline",
    installCmd: "VS Code Marketplace -> Search: 'Cline'",
    desc: "An open-source VS Code extension that creates an autonomous coding agent capable of editing files, running terminal commands, and reading browser pages.",
    freeTier: {
      models: "BYOK (Claude 3.5 Sonnet, Gemini Pro, DeepSeek, Ollama)",
      limits: "Free to use the VS Code extension. Billed by your API provider."
    },
    paidTier: {
      price: "Free (Solo) | ~$20/mo (Teams)",
      models: "Any API provider or local host",
      limits: "Teams plan includes shared proxies, administrative controls, centralized billing, and JetBrains IDE support."
    },
    registration: {
      process: "No registration required for standard VS Code extension. Just input API key.",
      requirements: "API key from OpenRouter, Anthropic, Gemini, etc."
    },
    promotions: {
      trials: "Extension is free. Normal API provider trial rules apply."
    },
    extraInfo: "A highly customizable agent. Supports custom instructions and has strict permission prompts for shell commands."
  },
  {
    id: "continue",
    name: "Continue",
    category: "extension",
    categoryLabel: "VS Code Extension",
    status: "active",
    statusLabel: "Active",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://continue.dev",
    github: "https://github.com/continuedev/continue",
    installCmd: "VS Code Marketplace -> Search: 'Continue'",
    desc: "An open-source AI coding assistant for VS Code and JetBrains. Great for building custom autocomplete and codebase-wide chat systems.",
    freeTier: {
      models: "BYOK (Ollama local, OpenAI, Anthropic, Gemini, DeepSeek)",
      limits: "Extension is 100% free and open-source. Billed by model providers."
    },
    paidTier: {
      price: "Free (Solo) | ~$20/user/mo (Team/Enterprise)",
      models: "Any cloud/local model or Continue-managed premium model proxy",
      limits: "Enterprise plan adds shared private context agents, custom security guardrails, and centralized API token management."
    },
    registration: {
      process: "No account required for solo users. Install and config local `.continue/config.json`.",
      requirements: "Bring your own API keys or run Ollama locally."
    },
    promotions: {
      trials: "Always free for individuals."
    },
    extraInfo: "Supports custom context providers, enabling you to pipe in documentation sites, JIRA tickets, or database schemas directly into chat."
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "extension",
    categoryLabel: "VS Code Extension",
    status: "active",
    statusLabel: "Active",
    isOpenSource: false,
    hasFreeTier: true, // via student / OSS
    website: "https://github.com/features/copilot",
    github: "",
    installCmd: "VS Code Marketplace -> Search: 'GitHub Copilot'",
    desc: "The pioneer AI coding extension. Seamlessly integrated into VS Code. Transitioning to a token-based credit billing system on June 1, 2026.",
    freeTier: {
      models: "GPT-4o, Claude 3.5 Sonnet",
      limits: "Free for verified students, educators, and maintainers of popular open-source projects."
    },
    paidTier: {
      price: "$10/mo (Pro) | $39/mo (Pro+) | $19/user/mo (Business) | $39/user/mo (Enterprise)",
      models: "Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, custom copilot models",
      limits: "Subscribers receive 'GitHub AI Credits' for agent/chat commands. Autocomplete and 'Next Edit' suggestions do not consume credits."
    },
    registration: {
      process: "Log in via GitHub account inside VS Code.",
      requirements: "Requires active GitHub account. Paid plans require credit card or billing link."
    },
    promotions: {
      trials: "30-day free trial for new individual subscribers."
    },
    extraInfo: "Copilot Chat reviews and Pull Request agents consume extra GitHub Actions minutes and AI credits."
  },
  {
    id: "roo-code",
    name: "Roo Code",
    category: "extension",
    categoryLabel: "VS Code Extension",
    status: "inactive",
    statusLabel: "Shut Down",
    isOpenSource: true,
    hasFreeTier: false,
    website: "https://roocode.com",
    github: "https://github.com/RooCline/Roo-Code",
    installCmd: "",
    desc: "A highly custom agentic fork of Cline that introduced specialized modes (Architect, Code, Ask). Shut down on May 15, 2026.",
    freeTier: {
      models: "None (Service discontinued)",
      limits: "Extension has been removed or deprecated. Users advised to migrate to Cline or ZooCode."
    },
    paidTier: {
      price: "N/A",
      models: "N/A",
      limits: "N/A"
    },
    registration: {
      process: "Discontinued.",
      requirements: "N/A"
    },
    promotions: {
      trials: "N/A"
    },
    extraInfo: "The project has officially shut down. Development team recommends users move to **Cline** or the community-maintained fork **ZooCode**."
  }
];

// App State
let currentTab = "all";
let searchFilter = "";
let showFreeOnly = false;
let showOpenSourceOnly = false;
let selectedCompareIds = [];

// DOM Elements
const toolsGrid = document.getElementById("tools-grid");
const searchInput = document.getElementById("search-input");
const tabButtons = document.querySelectorAll(".tab-btn");
const freeFilterCheckbox = document.getElementById("filter-free");
const osFilterCheckbox = document.getElementById("filter-os");
const compareBar = document.getElementById("compare-bar");
const compareBadgesContainer = document.getElementById("compare-badges");
const compareBtn = document.getElementById("compare-btn");
const clearCompareBtn = document.getElementById("clear-compare-btn");
const compareOverlay = document.getElementById("compare-overlay");
const compareCloseBtn = document.getElementById("compare-close-btn");
const comparisonTableBody = document.getElementById("comparison-table-body");
const detailModal = document.getElementById("detail-modal");
const detailModalContent = document.getElementById("detail-modal-body");
const detailCloseBtn = document.getElementById("detail-close-btn");

// Initialize Lucide Icons helper
function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render cards
function renderTools() {
  toolsGrid.innerHTML = "";
  
  const filteredTools = toolsData.filter(tool => {
    // Tab Category Filter
    if (currentTab !== "all" && tool.category !== currentTab) {
      return false;
    }
    
    // Checkbox Filters
    if (showFreeOnly && !tool.hasFreeTier) {
      return false;
    }
    if (showOpenSourceOnly && !tool.isOpenSource) {
      return false;
    }
    
    // Search Query Filter
    if (searchFilter) {
      const query = searchFilter.toLowerCase();
      const matchName = tool.name.toLowerCase().includes(query);
      const matchDesc = tool.desc.toLowerCase().includes(query);
      const matchModels = (tool.freeTier.models + " " + tool.paidTier.models).toLowerCase().includes(query);
      if (!matchName && !matchDesc && !matchModels) {
        return false;
      }
    }
    
    return true;
  });

  if (filteredTools.length === 0) {
    toolsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 24px; color: var(--text-muted);">
        <i data-lucide="info" style="width: 48px; height: 48px; margin-bottom: 16px;"></i>
        <p style="font-size: 18px; font-weight: 500;">No tools found matching your filters.</p>
        <button onclick="resetFilters()" style="margin-top: 16px; background: var(--primary-gradient); border: none; color: white; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;">Reset Filters</button>
      </div>
    `;
    initIcons();
    return;
  }

  filteredTools.forEach(tool => {
    const isChecked = selectedCompareIds.includes(tool.id);
    const card = document.createElement("div");
    card.className = `tool-card ${tool.status === 'inactive' ? 'shut-down' : ''}`;
    
    card.innerHTML = `
      <div class="tool-header">
        <div class="tool-logo-name">
          <div class="tool-logo">${tool.name.charAt(0)}</div>
          <div>
            <h3 class="tool-title">${tool.name}</h3>
            <span class="tool-category">${tool.categoryLabel}</span>
          </div>
        </div>
        <span class="status-badge ${tool.status === 'active' ? 'status-active' : 'status-inactive'}">
          ${tool.statusLabel}
        </span>
      </div>
      <p class="tool-desc">${tool.desc}</p>
      
      <div class="info-section">
        <div class="info-row">
          <span class="info-row-title">Free Tier Models & Limits</span>
          <span class="info-row-content">${tool.freeTier.models ? `<strong>Models:</strong> ${tool.freeTier.models}<br>${tool.freeTier.limits}` : tool.freeTier.limits}</span>
        </div>
        <div class="info-row">
          <span class="info-row-title">Paid Pricing & Limits</span>
          <span class="info-row-content"><strong>Price:</strong> ${tool.paidTier.price}<br><strong>Models:</strong> ${tool.paidTier.models}</span>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="btn btn-primary" onclick="openDetails('${tool.id}')">View Details</button>
        <label class="compare-check ${isChecked ? 'checked' : ''}" title="Add to Compare">
          <input type="checkbox" onchange="toggleCompare('${tool.id}')" ${isChecked ? 'checked' : ''}>
          <i data-lucide="${isChecked ? 'check' : 'plus'}"></i>
        </label>
      </div>
    `;
    toolsGrid.appendChild(card);
  });
  
  initIcons();
}

// Reset Filters
window.resetFilters = function() {
  searchInput.value = "";
  searchFilter = "";
  showFreeOnly = false;
  showOpenSourceOnly = false;
  freeFilterCheckbox.checked = false;
  osFilterCheckbox.checked = false;
  currentTab = "all";
  tabButtons.forEach(btn => {
    if (btn.dataset.tab === "all") btn.classList.add("active");
    else btn.classList.remove("active");
  });
  renderTools();
};

// Compare logic
window.toggleCompare = function(id) {
  const index = selectedCompareIds.indexOf(id);
  if (index === -1) {
    if (selectedCompareIds.length >= 4) {
      alert("You can compare a maximum of 4 tools at once.");
      renderTools();
      return;
    }
    selectedCompareIds.push(id);
  } else {
    selectedCompareIds.splice(index, 1);
  }
  
  updateCompareBar();
  renderTools();
};

function updateCompareBar() {
  if (selectedCompareIds.length > 0) {
    compareBar.classList.add("show");
    compareBadgesContainer.innerHTML = "";
    
    selectedCompareIds.forEach(id => {
      const tool = toolsData.find(t => t.id === id);
      if (tool) {
        const badge = document.createElement("div");
        badge.className = "compare-badge";
        badge.innerHTML = `
          <span>${tool.name}</span>
          <button onclick="toggleCompare('${tool.id}')">
            <i data-lucide="x" style="width: 14px; height: 14px;"></i>
          </button>
        `;
        compareBadgesContainer.appendChild(badge);
      }
    });
  } else {
    compareBar.classList.remove("show");
  }
  initIcons();
}

window.clearCompare = function() {
  selectedCompareIds = [];
  updateCompareBar();
  renderTools();
};

// Render comparison table
window.showComparison = function() {
  if (selectedCompareIds.length < 2) {
    alert("Please select at least 2 tools to compare.");
    return;
  }
  
  const selectedTools = selectedCompareIds.map(id => toolsData.find(t => t.id === id));
  
  // Headers row
  let headerHtml = `<tr><th>Comparison Items</th>`;
  selectedTools.forEach(tool => {
    headerHtml += `<td class="compare-tool-header">${tool.name}</td>`;
  });
  headerHtml += `</tr>`;
  
  // Rows
  const rows = [
    { label: "Category", key: "categoryLabel" },
    { label: "Status", key: "statusLabel" },
    { label: "License", fn: t => t.isOpenSource ? "Open Source" : "Commercial / Closed Source" },
    { label: "Free Tier Models & limits", fn: t => `<strong>Models:</strong> ${t.freeTier.models}<br>${t.freeTier.limits}` },
    { label: "Paid Tier Pricing & limits", fn: t => `<strong>Price:</strong> ${t.paidTier.price}<br><strong>Models:</strong> ${t.paidTier.models}<br>${t.paidTier.limits}` },
    { label: "Registration Info", fn: t => `<strong>How to:</strong> ${t.registration.process}<br><strong>Needs:</strong> ${t.registration.requirements}` },
    { label: "Active Promos / Trials", fn: t => t.promotions.trials },
    { label: "Command Line (CLI)", fn: t => t.installCmd ? `<code class="code-block">${t.installCmd}</code>` : "N/A" },
    { label: "Official Web / GitHub", fn: t => `
      <a href="${t.website}" target="_blank" style="color: var(--primary-cyan); text-decoration: underline; margin-right: 12px;">Website</a>
      ${t.github ? `<a href="${t.github}" target="_blank" style="color: var(--primary-purple); text-decoration: underline;">GitHub</a>` : ""}
    ` }
  ];
  
  let rowsHtml = "";
  rows.forEach(row => {
    rowsHtml += `<tr><th>${row.label}</th>`;
    selectedTools.forEach(tool => {
      let val = "";
      if (row.key) {
        val = tool[row.key];
      } else if (row.fn) {
        val = row.fn(tool);
      }
      rowsHtml += `<td>${val}</td>`;
    });
    rowsHtml += `</tr>`;
  });
  
  comparisonTableBody.innerHTML = headerHtml + rowsHtml;
  compareOverlay.classList.add("show");
};

// Details Modal
window.openDetails = function(id) {
  const tool = toolsData.find(t => t.id === id);
  if (!tool) return;
  
  detailModalContent.innerHTML = `
    <div class="modal-header-section">
      <div class="tool-logo">${tool.name.charAt(0)}</div>
      <div>
        <h2>${tool.name}</h2>
        <span class="tool-category">${tool.categoryLabel} &bull; ${tool.isOpenSource ? 'Open Source' : 'Commercial'}</span>
      </div>
    </div>
    
    <div class="modal-grid">
      <div class="modal-box" style="grid-column: 1 / -1;">
        <div class="modal-box-title">
          <i data-lucide="info" style="width: 18px; height: 18px;"></i> Description
        </div>
        <div class="modal-box-text">${tool.desc}</div>
      </div>
      
      <div class="modal-box">
        <div class="modal-box-title" style="color: var(--color-free);">
          <i data-lucide="sparkles" style="width: 18px; height: 18px;"></i> Free Account Info
        </div>
        <div class="modal-box-text">
          <strong>Models:</strong> ${tool.freeTier.models || 'None'}<br><br>
          <strong>Limits:</strong> ${tool.freeTier.limits}
        </div>
      </div>
      
      <div class="modal-box">
        <div class="modal-box-title" style="color: var(--color-paid);">
          <i data-lucide="credit-card" style="width: 18px; height: 18px;"></i> Paid Account Info
        </div>
        <div class="modal-box-text">
          <strong>Price:</strong> ${tool.paidTier.price}<br><br>
          <strong>Models:</strong> ${tool.paidTier.models}<br><br>
          <strong>Limits:</strong> ${tool.paidTier.limits}
        </div>
      </div>
      
      <div class="modal-box">
        <div class="modal-box-title">
          <i data-lucide="user-plus" style="width: 18px; height: 18px;"></i> Registration Process
        </div>
        <div class="modal-box-text">
          <strong>Process:</strong> ${tool.registration.process}<br><br>
          <strong>Requirements:</strong> ${tool.registration.requirements}
        </div>
      </div>
      
      <div class="modal-box">
        <div class="modal-box-title" style="color: var(--primary-cyan);">
          <i data-lucide="gift" style="width: 18px; height: 18px;"></i> Trials & Promos
        </div>
        <div class="modal-box-text">
          <strong>Activities:</strong> ${tool.promotions.trials}
        </div>
      </div>
      
      ${tool.installCmd ? `
      <div class="modal-box" style="grid-column: 1 / -1;">
        <div class="modal-box-title">
          <i data-lucide="terminal" style="width: 18px; height: 18px;"></i> Installation Command
        </div>
        <div class="modal-box-text">
          Run the following command to install the CLI tool:
          <pre class="code-block">${tool.installCmd}</pre>
        </div>
      </div>
      ` : ''}

      <div class="modal-box" style="grid-column: 1 / -1;">
        <div class="modal-box-title">
          <i data-lucide="cpu" style="width: 18px; height: 18px;"></i> Architecture & Extra Notes
        </div>
        <div class="modal-box-text">
          ${tool.extraInfo}
        </div>
      </div>
    </div>
    
    <div style="display: flex; gap: 16px; margin-top: 30px;">
      <a href="${tool.website}" target="_blank" class="btn btn-primary" style="flex-grow: 1;">
        <i data-lucide="external-link" style="width: 16px; height: 16px;"></i> Official Website
      </a>
      ${tool.github ? `
      <a href="${tool.github}" target="_blank" class="btn" style="flex-grow: 1;">
        <i data-lucide="github" style="width: 16px; height: 16px;"></i> Source Code
      </a>
      ` : ''}
    </div>
  `;
  detailModal.classList.add("show");
  initIcons();
};

// Event Listeners
searchInput.addEventListener("input", (e) => {
  searchFilter = e.target.value;
  renderTools();
});

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    renderTools();
  });
});

freeFilterCheckbox.addEventListener("change", (e) => {
  showFreeOnly = e.target.checked;
  renderTools();
});

osFilterCheckbox.addEventListener("change", (e) => {
  showOpenSourceOnly = e.target.checked;
  renderTools();
});

compareBtn.addEventListener("click", showComparison);
clearCompareBtn.addEventListener("click", clearCompare);
compareCloseBtn.addEventListener("click", () => {
  compareOverlay.classList.remove("show");
});

detailCloseBtn.addEventListener("click", () => {
  detailModal.classList.remove("show");
});

// Close overlay on clicking outside modal
compareOverlay.addEventListener("click", (e) => {
  if (e.target === compareOverlay) {
    compareOverlay.classList.remove("show");
  }
});

detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) {
    detailModal.classList.remove("show");
  }
});

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
  renderTools();
  initIcons();
});
