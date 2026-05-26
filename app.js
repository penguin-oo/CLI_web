const toolsData = [
  {
    status: "active",
    id: "cursor",
    name: "Cursor",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://cursor.com",
    github: "",
    installCmd: "",
    desc: {
      en: "A highly popular AI-first code editor fork of VS Code. Built for fast agentic workflows with its 'Auto' mode and deep codebase index.",
      zh: "非常受欢迎的基于 VS Code 分支的 AI 原生编辑器。凭借其“Auto”自动代理模式和深度的代码库索引，专为高效的 Agent 开发流程设计。"
    },
    freeTier: {
      models: {
        en: "Cursor-small, Claude 3.5 Sonnet (limited)",
        zh: "Cursor-small, Claude 3.5 Sonnet (受限)"
      },
      limits: {
        en: "Hobby Plan: Limited daily/monthly Agent requests, standard Tab autocompletes.",
        zh: "Hobby 计划：每日/每月限制 Agent 请求次数，提供标准的 Tab 自动补全。"
      }
    },
    paidTier: {
      price: {
        en: "$20/mo (Pro) | $60/mo (Pro+) | $200/mo (Ultra)",
        zh: "$20/月 (Pro) | $60/月 (Pro+) | $200/月 (Ultra)"
      },
      models: {
        en: "Claude 3.5/3.7 Sonnet, GPT-4o, GPT-5",
        zh: "Claude 3.5/3.7 Sonnet, GPT-4o, GPT-5"
      },
      limits: {
        en: "Pro: Unlimited autocomplete & Auto mode, plus a $20/mo credit pool for premium models.",
        zh: "Pro：无限次自动补全和 Auto 模式，外加每月 20 美元的免费额度以使用高级模型。"
      }
    },
    registration: {
      process: {
        en: "Sign up via Email, Google, or GitHub.",
        zh: "通过邮箱、Google 或 GitHub 账号注册。"
      },
      requirements: {
        en: "No payment card required for Free. Pro subscription requires a credit card.",
        zh: "免费版无需绑定支付卡。订阅 Pro 版需要信用卡。"
      }
    },
    promotions: {
      trials: {
        en: "1-week free Pro trial for new accounts (no credit card required during trial).",
        zh: "新账号可获得 1 周的免费 Pro 试用（试用期间无需信用卡）。"
      }
    },
    extraInfo: {
      en: "Supports custom MCP servers and allows users to opt-in to 'BYOK' mode if they prefer to pay their own API providers directly.",
      zh: "支持自定义 MCP 服务，如果用户希望直接向其 API 服务商付费，可以选择使用“自带 Key (BYOK)”模式。"
    }
  },
  {
    status: "active",
    id: "windsurf",
    name: "Windsurf",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://codeium.com/windsurf",
    github: "",
    installCmd: "",
    desc: {
      en: "An AI-native IDE by Codeium featuring 'Cascade', a collaborative agent workflow that switches fluidly between copilot and autonomous coding.",
      zh: "由 Codeium 推出的 AI 原生 IDE，主打“Cascade”协作 Agent 工作流，可在智能辅助（Copilot）和自主编码（Agent）之间流转自如。"
    },
    freeTier: {
      models: {
        en: "Cascade (proprietary Codeium models, light quota)",
        zh: "Cascade (Codeium 自研模型，轻度额度)"
      },
      limits: {
        en: "Free Plan: Limited daily usage quota, unlimited Tab completions.",
        zh: "免费计划：每日使用额度受限，无限次 Tab 自动补全。"
      }
    },
    paidTier: {
      price: {
        en: "$20/mo (Pro) | $200/mo (Max)",
        zh: "$20/月 (Pro) | $200/月 (Max)"
      },
      models: {
        en: "SWE-1, SWE-1.5, Claude Sonnet 4.6, GPT-5, Gemini 3.1 Pro",
        zh: "SWE-1, SWE-1.5, Claude Sonnet 4.6, GPT-5, Gemini 3.1 Pro"
      },
      limits: {
        en: "Pro: Standard daily/weekly usage quota, unlimited Tab completions, unlimited inline Command edits.",
        zh: "Pro：标准的每日/每周使用配额，无限次 Tab 自动补全，无限次行内命令编辑。"
      }
    },
    registration: {
      process: {
        en: "Create a Codeium account (Google, GitHub, or Email).",
        zh: "创建 Codeium 账号（支持 Google、GitHub 或邮箱注册）。"
      },
      requirements: {
        en: "Credit card required to subscribe to Pro/Max plans.",
        zh: "订阅 Pro/Max 计划需要绑定信用卡。"
      }
    },
    promotions: {
      trials: {
        en: "Occasional free trial vouchers for new sign-ups. Previously grandfathered older $15 users with bonus credits.",
        zh: "新用户注册偶尔会发放免费试用券。此前曾为老用户（原 15 美元/月）保留并额外赠送额度。"
      }
    },
    extraInfo: {
      en: "Switched from a credit-based billing system to a quota-based system in March 2026 to simplify usage tracking.",
      zh: "于 2026 年 3 月从基于积分的计费机制转换为基于配额的机制，以简化使用情况统计。"
    }
  },
  {
    status: "active",
    id: "kiro",
    name: "Kiro (AWS Kiro)",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://kiro.dev",
    github: "https://github.com/aws/kiro",
    installCmd: "",
    desc: {
      en: "An agentic IDE fork of VS Code developed by AWS, focused on 'spec-driven development'—planning, design, and specs before coding.",
      zh: "由 AWS 开发的 VS Code 代理化 IDE 分支，专注于“规范驱动开发”——在编码前进行深入的规划、设计与技术规范制定。"
    },
    freeTier: {
      models: {
        en: "Claude Sonnet 4.5, open-weight models",
        zh: "Claude Sonnet 4.5, 开源权重模型"
      },
      limits: {
        en: "Free Plan: 50 credits/month (perpetual, reset monthly).",
        zh: "免费计划：50 点数/月（永久有效，每月重置）。"
      }
    },
    paidTier: {
      price: {
        en: "$20/mo (Pro: 1k credits) | $40/mo (Pro+: 2k) | $200/mo (Power: 10k)",
        zh: "$20/月 (Pro: 1000点数) | $40/月 (Pro+: 2000点数) | $200/月 (Power: 10000点数)"
      },
      models: {
        en: "Claude 4.5/4.6, Claude Opus, various premium models",
        zh: "Claude 4.5/4.6, Claude Opus, various premium models"
      },
      limits: {
        en: "Credits consumed fractionally based on task complexity. Overage option: $0.04 per additional credit.",
        zh: "点数根据任务复杂性进行按比例消耗。超出后可选择：$0.04/额外点数。"
      }
    },
    registration: {
      process: {
        en: "Sign up at kiro.dev or link an existing AWS Account.",
        zh: "在 kiro.dev 注册或关联已有的 AWS 账户。"
      },
      requirements: {
        en: "No card needed for Free. AWS billing or standard credit card for paid tiers.",
        zh: "免费版无需绑定卡。付费版支持 AWS 账单或标准信用卡付款。"
      }
    },
    promotions: {
      trials: {
        en: "First-time Pro upgrade receives a $20 bonus (1,000 credits). **University students get 1,000 credits/mo free for 1 year**.",
        zh: "首次升级 Pro 将获赠 20 美元（1000点数）。**在校大学生可享受 1 年的免费 1000 点数/月优惠**。"
      }
    },
    extraInfo: {
      en: "Built-in agent hooks and steering rules for automated project-level compliance. Integrates with AWS ecosystem.",
      zh: "内置 Agent 钩子和指导规则，以支持自动化的项目级合规管理。完美整合到 AWS 生态系统。"
    }
  },
  {
    status: "active",
    id: "claudecode",
    name: "Claude Code",
    category: "cli",
    isOpenSource: false,
    hasFreeTier: false,
    website: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code",
    github: "",
    installCmd: "npm install -g @anthropic/claude-code",
    desc: {
      en: "Anthropic's official terminal-native coding agent. It directly executes tests, edits files, and manages git histories via Claude models.",
      zh: "Anthropic 官方推出的终端原生编码智能体。它能通过 Claude 模型直接在本地终端执行测试、编辑文件并管理 Git 提交记录。"
    },
    freeTier: {
      models: {
        en: "None",
        zh: "无"
      },
      limits: {
        en: "CLI requires a paid Anthropic account/subscription or API keys.",
        zh: "使用 CLI 需持有付费的 Anthropic 账户/订阅或 API Key。"
      }
    },
    paidTier: {
      price: {
        en: "$20/mo (Pro Subscription) or Pay-as-you-go API",
        zh: "$20/月 (Pro 订阅) 或 按需付费 API"
      },
      models: {
        en: "Claude Sonnet (default Sonnet 4.6), Claude Opus 4.6/4.7",
        zh: "Claude Sonnet (默认 Sonnet 4.6), Claude Opus 4.6/4.7"
      },
      limits: {
        en: "Pro plan: Subject to standard Web/App token quotas (resetting every 5 hours). API plan: Billed per token.",
        zh: "Pro 计划：受限于网页/App的标准 Token 配额（每 5 小时重置）。API 计划：按 Token 计费。"
      }
    },
    registration: {
      process: {
        en: "Log in with an Anthropic Account via web browser when prompted in terminal.",
        zh: "在终端提示时，通过浏览器登录 Anthropic 账户进行授权。"
      },
      requirements: {
        en: "Anthropic Console account with billing set up (for API) or Claude Pro consumer subscription.",
        zh: "已设置计费的 Anthropic Console 账户（用于 API）或已订阅 Claude Pro 的个人账户。"
      }
    },
    promotions: {
      trials: {
        en: "New Anthropic Console API accounts receive a free $5 credit to try models.",
        zh: "新注册的 Anthropic Console API 账户会获赠 5 美元的免费测试额度。"
      }
    },
    extraInfo: {
      en: "Allows developers to work entirely inside the terminal. Can be configured to run tests and self-repair code bases.",
      zh: "支持开发者完全在终端内工作。可以配置为自动运行测试并自我修复代码库错误。"
    }
  },
  {
    status: "active",
    id: "openai-codex",
    name: "OpenAI Codex",
    category: "cli",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://github.com/openai/codex",
    github: "https://github.com/openai/codex",
    installCmd: "npm i -g @openai/codex",
    desc: {
      en: "OpenAI's official developer suite including Codex CLI (Rust-based), Desktop App, and ChatGPT web-agent integrations.",
      zh: "OpenAI 官方推出的开发者套件，包括基于 Rust 的 Codex CLI、桌面端应用以及 ChatGPT 网页智能体集成。"
    },
    freeTier: {
      models: {
        en: "GPT-5.4-Mini (via ChatGPT free limits)",
        zh: "GPT-5.4-Mini (使用 ChatGPT 免费额度)"
      },
      limits: {
        en: "Strict request limits under standard ChatGPT free tier.",
        zh: "遵循标准 ChatGPT 免费计划的严格请求频次限制。"
      }
    },
    paidTier: {
      price: {
        en: "Included in ChatGPT Plus ($20/mo) / Pro ($200/mo) / API key",
        zh: "包含在 ChatGPT Plus ($20/月) / Pro ($200/月) 或通过 API Key 付费"
      },
      models: {
        en: "GPT-5.5, GPT-5.4-Mini, custom agent models",
        zh: "GPT-5.5, GPT-5.4-Mini, 专属智能体模型"
      },
      limits: {
        en: "Token-based credit system. API key mode allows pay-as-you-go billing directly per million tokens.",
        zh: "基于 Token 的积分系统。API 模式支持按每百万 Token 生成量按需付费。"
      }
    },
    registration: {
      process: {
        en: "Log in with OpenAI/ChatGPT credentials via OAuth when launching the CLI.",
        zh: "启动 CLI 时通过 OAuth 使用 OpenAI/ChatGPT 凭据登录。"
      },
      requirements: {
        en: "Requires active OpenAI account. Credit card required for API pay-as-you-go or ChatGPT Plus.",
        zh: "需要活跃的 OpenAI 账号。API 按需付费或 ChatGPT Plus 需绑定信用卡。"
      }
    },
    promotions: {
      trials: {
        en: "None currently active. Standard OpenAI API accounts may receive trial credits.",
        zh: "目前无活动。标准的 OpenAI API 新账户可能会收到测试体验额度。"
      }
    },
    extraInfo: {
      en: "Features Model Context Protocol (MCP) server support, enabling the local CLI to execute command tools and query databases.",
      zh: "支持模型上下文协议 (MCP) 服务器，使本地 CLI 能够执行终端命令工具和查询数据库。"
    }
  },
  {
    status: "active",
    id: "opencode",
    name: "OpenCode",
    category: "cli",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://opencode.ai",
    github: "https://github.com/opencode/opencode",
    installCmd: "go install github.com/opencode/opencode@latest",
    desc: {
      en: "An open-source terminal CLI/TUI coding agent built in Go. Model-agnostic and supports split 'Plan' and 'Build' modes for safe editing.",
      zh: "使用 Go 编写的开源终端 CLI/TUI 编码智能体。不绑定模型，支持“规划”和“构建”双重模式以确保代码编辑安全。"
    },
    freeTier: {
      models: {
        en: "Any local model (Ollama) or bring your own API keys (free app)",
        zh: "任何本地模型 (Ollama) 或自带 API Key (免费运行)"
      },
      limits: {
        en: "100% free to run. Limits are determined by your own API keys/local computer capacity.",
        zh: "程序完全免费运行。使用限制完全取决于您自带的 API Key 或本地计算机的算力。"
      }
    },
    paidTier: {
      price: {
        en: "$10/mo (OpenCode Go) | Pay-as-you-go (OpenCode Zen)",
        zh: "$10/月 (OpenCode Go) | 按需付费 (OpenCode Zen)"
      },
      models: {
        en: "Curated agent models (GLM, Kimi, MiniMax, DeepSeek, Claude)",
        zh: "Curated agent models (GLM, Kimi, MiniMax, DeepSeek, Claude)"
      },
      limits: {
        en: "OpenCode Go: Usage-based pricing capping at $12 per 5 hours / $60 per month. Zen: Pay-as-you-go at cost.",
        zh: "OpenCode Go：按用量计费，每 5 小时 12 美元封顶 / 每月 60 美元封顶。Zen：按实际消耗底价付费。"
      }
    },
    registration: {
      process: {
        en: "No registration required for BYOK / local offline usage. Web registration needed for OpenCode Go subscription.",
        zh: "对于 BYOK（自带 Key）/ 本地离线使用无需注册。订阅 OpenCode Go 时需要网页注册。"
      },
      requirements: {
        en: "None for local. Email and payment method for OpenCode Go.",
        zh: "本地使用无要求。订阅 OpenCode Go 需要邮箱和支付方式。"
      }
    },
    promotions: {
      trials: {
        en: "OpenCode Go subscription costs only $5 for the first month.",
        zh: "首月订阅 OpenCode Go 仅需 5 美元优惠。"
      }
    },
    extraInfo: {
      en: "Supports 75+ AI providers. Known for running fully local, privacy-focused workflows with zero data storage.",
      zh: "支持 75+ 家 AI 服务商。以支持完全本地化运行、零数据留存和强隐私保护的工作流而闻名。"
    }
  },
  {
    status: "active",
    id: "atomcode",
    name: "AtomCode",
    category: "cli",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://atomgit.com/atomcode/atomcode",
    github: "https://atomgit.com/atomcode/atomcode",
    installCmd: "cargo install atomcode",
    desc: {
      en: "An open-source Rust-based terminal coding agent. Focuses on small, self-verifying steps and HarmonyOS PC integration.",
      zh: "基于 Rust 编写的开源终端编码智能体。专注于微小的自我验证步骤，并深度集成了鸿蒙系统 (HarmonyOS) PC 生态。"
    },
    freeTier: {
      models: {
        en: "BYOK (Claude, GPT-4o, DeepSeek, local Ollama)",
        zh: "BYOK (Claude, GPT-4o, DeepSeek, 本地 Ollama)"
      },
      limits: {
        en: "100% free open-source CLI. Billed directly by your selected LLM API providers.",
        zh: "100% 免费的开源 CLI 工具。仅由您选择的第三方大模型 API 提供商直接计费。"
      }
    },
    paidTier: {
      price: {
        en: "None (Free Software)",
        zh: "无 (免费软件)"
      },
      models: {
        en: "Any API-compatible model",
        zh: "任何兼容 API 的模型"
      },
      limits: {
        en: "Self-hosted / BYOK. Billed by third-party model providers.",
        zh: "自托管/自带 Key 运行。由第三方模型服务商计费。"
      }
    },
    registration: {
      process: {
        en: "No registration. Simply build/run the binary locally.",
        zh: "无需注册。只需在本地构建并运行二进制文件。"
      },
      requirements: {
        en: "Requires API keys from model providers if using cloud LLMs.",
        zh: "如果使用云端大模型，需要配置相应模型服务商的 API Key。"
      }
    },
    promotions: {
      trials: {
        en: "MIT licensed, completely free software.",
        zh: "采用 MIT 协议开源，完全免费的软件。"
      }
    },
    extraInfo: {
      en: "Features a built-in token cost estimation database to help you track how much your API keys are spending.",
      zh: "内置 Token 消费估算数据库，帮助您直观监测和统计 API Key 的具体花费。"
    }
  },
  {
    status: "active",
    id: "aider",
    name: "Aider",
    category: "cli",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://aider.chat",
    github: "https://github.com/paul-gauthier/aider",
    installCmd: "pip install aider-chat",
    desc: {
      en: "A widely popular command-line chat tool that lets you code with LLMs in your local git repository. Extremely efficient context management.",
      zh: "极受欢迎的命令行聊天工具，允许你在本地 Git 仓库中直接利用大模型协同编程。其上下文管理机制非常高效。"
    },
    freeTier: {
      models: {
        en: "BYOK (Claude 3.5 Sonnet, GPT-4o, DeepSeek, Ollama local)",
        zh: "BYOK (Claude 3.5 Sonnet, GPT-4o, DeepSeek, 本地 Ollama)"
      },
      limits: {
        en: "100% free tool. No software fees. Run offline with local models for zero cost.",
        zh: "100% 免费工具。无软件授权费。使用本地模型离线运行可实现完全免费。"
      }
    },
    paidTier: {
      price: {
        en: "None (Free Software)",
        zh: "无 (免费软件)"
      },
      models: {
        en: "Any OpenAI/Anthropic/Gemini/OpenRouter model",
        zh: "任何 OpenAI/Anthropic/Gemini/OpenRouter 模型"
      },
      limits: {
        en: "Billed directly by API providers based on your key usage.",
        zh: "完全根据您的 Key 消耗量由 API 供应商直接计费。"
      }
    },
    registration: {
      process: {
        en: "No registration or account creation needed.",
        zh: "无需注册或创建任何账户。"
      },
      requirements: {
        en: "Only your own API keys or a local LLM setup (Ollama/LM Studio).",
        zh: "仅需配置您自己的 API Key 或本地大模型环境（如 Ollama / LM Studio）。"
      }
    },
    promotions: {
      trials: {
        en: "Always free and open-source.",
        zh: "永久开源且免费。"
      }
    },
    extraInfo: {
      en: "Supports 'Architect Mode' which routes planning to a strong model and edits to a cheap one, saving API costs.",
      zh: "支持“架构师模式”，将规划和设计交给强模型，将具体代码编辑交给便宜的模型，从而节省 API 花费。"
    }
  },
  {
    status: "active",
    id: "cline",
    name: "Cline",
    category: "extension",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://cline.bot",
    github: "https://github.com/cline/cline",
    installCmd: "VS Code Marketplace -> Search: 'Cline'",
    desc: {
      en: "An open-source VS Code extension that creates an autonomous coding agent capable of editing files, running terminal commands, and reading browser pages.",
      zh: "一款开源 VS Code 插件，能创建拥有文件编辑、终端运行、网页读取等全方位权限的自主编码 Agent。"
    },
    freeTier: {
      models: {
        en: "BYOK (Claude 3.5 Sonnet, Gemini Pro, DeepSeek, Ollama)",
        zh: "BYOK (Claude 3.5 Sonnet, Gemini Pro, DeepSeek, Ollama)"
      },
      limits: {
        en: "Free to use the VS Code extension. Billed by your API provider.",
        zh: "可以免费使用 VS Code 插件。由您的 API 提供商收取大模型费用。"
      }
    },
    paidTier: {
      price: {
        en: "Free (Solo) | ~$20/mo (Teams)",
        zh: "免费 (个人) | 约 $20/月 (团队)"
      },
      models: {
        en: "Any API provider or local host",
        zh: "任何 API 提供商或本地托管模型"
      },
      limits: {
        en: "Teams plan includes shared proxies, administrative controls, centralized billing, and JetBrains IDE support.",
        zh: "团队计划包含共享代理、管理控制权限、集中计费支持以及 JetBrains 系列 IDE 支持。"
      }
    },
    registration: {
      process: {
        en: "No registration required for standard VS Code extension. Just input API key.",
        zh: "使用标准 VS Code 插件无需注册，只需在设置中输入您的 API Key。"
      },
      requirements: {
        en: "API key from OpenRouter, Anthropic, Gemini, etc.",
        zh: "需要 OpenRouter, Anthropic, Gemini 等平台的 API Key。"
      }
    },
    promotions: {
      trials: {
        en: "Extension is free. Normal API provider trial rules apply.",
        zh: "插件本身完全免费，具体的 API 试用政策以各服务商为准。"
      }
    },
    extraInfo: {
      en: "A highly customizable agent. Supports custom instructions and has strict permission prompts for shell commands.",
      zh: "具备高可定制性的智能体。支持自定义全局指令，且运行 Shell 命令时有严格的权限提示弹窗确认。"
    }
  },
  {
    status: "active",
    id: "continue",
    name: "Continue",
    category: "extension",
    isOpenSource: true,
    hasFreeTier: true,
    website: "https://continue.dev",
    github: "https://github.com/continuedev/continue",
    installCmd: "VS Code Marketplace -> Search: 'Continue'",
    desc: {
      en: "An open-source AI coding assistant for VS Code and JetBrains. Great for building custom autocomplete and codebase-wide chat systems.",
      zh: "适用于 VS Code 和 JetBrains 的开源 AI 编码助手。非常适合构建自定义代码补全和针对整个代码库的对话问答系统。"
    },
    freeTier: {
      models: {
        en: "BYOK (Ollama local, OpenAI, Anthropic, Gemini, DeepSeek)",
        zh: "BYOK (本地 Ollama, OpenAI, Anthropic, Gemini, DeepSeek)"
      },
      limits: {
        en: "Extension is 100% free and open-source. Billed by model providers.",
        zh: "插件 100% 开源免费。大模型计费由您选择的模型供应商收取。"
      }
    },
    paidTier: {
      price: {
        en: "Free (Solo) | ~$20/user/mo (Team/Enterprise)",
        zh: "免费 (个人) | 约 $20/用户/月 (团队/企业版)"
      },
      models: {
        en: "Any cloud/local model or Continue-managed premium model proxy",
        zh: "任何云端/本地模型或 Continue 托管的付费模型代理"
      },
      limits: {
        en: "Enterprise plan adds shared private context agents, custom security guardrails, and centralized API token management.",
        zh: "企业版增加了共享的私有上下文 Agent、自定义安全防护网以及集中式 API Token 额度管理。"
      }
    },
    registration: {
      process: {
        en: "No account required for solo users. Install and config local `.continue/config.json`.",
        zh: "个人用户无需注册账号。安装后直接在本地配置 `.continue/config.json` 文件即可。"
      },
      requirements: {
        en: "Bring your own API keys or run Ollama locally.",
        zh: "需自行提供 API Key 或在本地运行 Ollama。"
      }
    },
    promotions: {
      trials: {
        en: "Always free for individuals.",
        zh: "对个人用户永久免费。"
      }
    },
    extraInfo: {
      en: "Supports custom context providers, enabling you to pipe in documentation sites, JIRA tickets, or database schemas directly into chat.",
      zh: "支持自定义上下文提供商，能直接将官方文档站点、JIRA 工单或数据库 Schema 引入到聊天上下文中。"
    }
  },
  {
    status: "active",
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: true,
    website: "https://github.com/features/copilot",
    github: "",
    installCmd: "VS Code Marketplace -> Search: 'GitHub Copilot'",
    desc: {
      en: "The pioneer AI coding extension. Seamlessly integrated into VS Code. Transitioning to a token-based credit billing system on June 1, 2026.",
      zh: "AI 编码插件的先驱。与 VS Code 深度集成。将于 2026 年 6 月 1 日转换为基于 Token 的点数计费体系。"
    },
    freeTier: {
      models: {
        en: "GPT-4o, Claude 3.5 Sonnet",
        zh: "GPT-4o, Claude 3.5 Sonnet"
      },
      limits: {
        en: "Free for verified students, educators, and maintainers of popular open-source projects.",
        zh: "对通过验证的学生、教育工作者以及流行开源项目的维护者免费开放。"
      }
    },
    paidTier: {
      price: {
        en: "$10/mo (Pro) | $39/mo (Pro+) | $19/user/mo (Business) | $39/user/mo (Enterprise)",
        zh: "$10/月 (Pro) | $39/月 (Pro+) | $19/用户/月 (Business) | $39/用户/月 (Enterprise)"
      },
      models: {
        en: "Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, custom copilot models",
        zh: "Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, custom copilot models"
      },
      limits: {
        en: "Subscribers receive 'GitHub AI Credits' for agent/chat commands. Autocomplete and 'Next Edit' suggestions do not consume credits.",
        zh: "付费用户每月将获得 GitHub AI Credits 以运行 Agent/Chat 等命令。代码补全和 Next Edit 预测不消耗点数。"
      }
    },
    registration: {
      process: {
        en: "Log in via GitHub account inside VS Code.",
        zh: "在 VS Code 中直接通过 GitHub 账户授权登录。"
      },
      requirements: {
        en: "Requires active GitHub account. Paid plans require credit card or billing link.",
        zh: "需要有效的 GitHub 账户。付费计划需绑定信用卡或账单支付渠道。"
      }
    },
    promotions: {
      trials: {
        en: "30-day free trial for new individual subscribers.",
        zh: "针对新的个人订阅用户提供 30 天免费试用期。"
      }
    },
    extraInfo: {
      en: "Copilot Chat reviews and Pull Request agents consume extra GitHub Actions minutes and AI credits.",
      zh: "Copilot Chat 行内评审以及 PR 处理 Agent 会额外消耗 GitHub Actions 分钟数以及 AI 点数。"
    }
  },
  {
    status: "inactive",
    id: "roo-code",
    name: "Roo Code",
    category: "extension",
    isOpenSource: true,
    hasFreeTier: false,
    website: "https://roocode.com",
    github: "https://github.com/RooCline/Roo-Code",
    installCmd: "",
    desc: {
      en: "A highly custom agentic fork of Cline that introduced specialized modes (Architect, Code, Ask). Shut down on May 15, 2026.",
      zh: "基于 Cline 的高度定制化智能体插件，首创了多模式切换（架构师、编码员、提问者）。已于 2026 年 5 月 15 日正式停止服务。"
    },
    freeTier: {
      models: {
        en: "None (Service discontinued)",
        zh: "无 (服务已终止)"
      },
      limits: {
        en: "Extension has been removed or deprecated. Users advised to migrate to Cline or ZooCode.",
        zh: "插件已从市场下架或废弃。建议用户迁移到 Cline 或社区维护的分支 ZooCode。"
      }
    },
    paidTier: {
      price: {
        en: "N/A",
        zh: "不适用"
      },
      models: {
        en: "N/A",
        zh: "不适用"
      },
      limits: {
        en: "N/A",
        zh: "不适用"
      }
    },
    registration: {
      process: {
        en: "Discontinued.",
        zh: "已停止服务。"
      },
      requirements: {
        en: "N/A",
        zh: "不适用"
      }
    },
    promotions: {
      trials: {
        en: "N/A",
        zh: "不适用"
      }
    },
    extraInfo: {
      en: "The project has officially shut down. Development team recommends users move to **Cline** or the community-maintained fork **ZooCode**.",
      zh: "该项目已官方关闭。开发团队建议用户迁移到 **Cline** 或使用社区维护的分支 **ZooCode**。"
    }
  }
];

// Translations Dictionary
const translations = {
  en: {
    heroTitle: 'Find & Compare <span class="gradient-text">AI Coding Assistants</span>',
    heroDesc: "Compare CLI agent tools, VS Code extensions, and AI-native IDEs. Analyze free models, billing structures, registration requirements, and trial deals.",
    badgeTag: "Developer Tools Directory 2026",
    statTools: "Platforms Tracked",
    statModels: "LLMs Supported",
    statPrice: "Entry Cost (BYOK)",
    searchPlaceholder: "Search by name, models (e.g. Claude, GPT-5, DeepSeek), or keywords...",
    tabAll: "All Tools",
    tabIde: "AI-First IDEs",
    tabCli: "CLI Agents",
    tabExtension: "VS Code Extensions",
    filterFree: "Has Free Tier",
    filterOs: "Open Source",
    btnDetails: "View Details",
    btnWebsite: "Website",
    btnCompare: "Compare Selected",
    btnClear: "Clear All",
    comparingText: "Comparing:",
    compareTitle: "Side-by-Side Comparison",
    compareMaxAlert: "You can compare a maximum of 4 tools at once.",
    compareMinAlert: "Please select at least 2 tools to compare.",
    licenseOpen: "Open Source",
    licenseClosed: "Closed Source / Commercial",
    activeStatus: "Active",
    inactiveStatus: "Shut Down",
    resetFilters: "Reset Filters",
    noTools: "No tools found matching your filters.",
    categoryLabels: {
      ide: "AI-First IDE",
      cli: "CLI Agent",
      extension: "VS Code Extension"
    },
    // Card Specifics
    cardFreeTitle: "Free Tier",
    cardPaidTitle: "Paid Tier",
    cardFreeModels: "Free Models",
    cardPaidModels: "Paid Models",
    cardPrice: "Starting at",
    cardNoFree: "Paid Only",
    cardBYOK: "BYOK (Bring Your Own Key)",
    cardFreeSoftware: "Free Software",
    cardDiscontinued: "Discontinued",
    // Suggestions headings
    suggestPopular: "Popular Searches",
    suggestTools: "Tools & Platforms",
    suggestModels: "Models & Frameworks",
    suggestFilters: "Filters",
    suggestType: {
      tool: "Tool",
      model: "Model",
      category: "Category",
      filter: "Filter"
    },
    // Comparison Table Labels
    compareCols: {
      category: "Category",
      status: "Status",
      license: "License",
      freeTier: "Free Tier Models & limits",
      paidTier: "Paid Tier Pricing & limits",
      regInfo: "Registration Info",
      promos: "Active Promos / Trials",
      cli: "Command Line (CLI)",
      links: "Official Web / GitHub"
    },
    // Modal Titles
    modalDesc: "Description",
    modalFreeTitle: "Free Account Info",
    modalPaidTitle: "Paid Account Info",
    modalRegTitle: "Registration Process",
    modalPromoTitle: "Trials & Promos",
    modalInstallTitle: "Installation Command",
    modalInstallNote: "Run the following command to install the CLI tool:",
    modalExtraTitle: "Architecture & Extra Notes",
    modalWebBtn: "Official Website",
    modalSourceBtn: "Source Code"
  },
  zh: {
    heroTitle: '查找与对比 <span class="gradient-text">AI 编程助手</span>',
    heroDesc: "对比 CLI 智能体工具、VS Code 插件及 AI 原生 IDE。分析免费模型、收费结构、注册要求及试用优惠活动。",
    badgeTag: "开发者工具指南 2026",
    statTools: "已收录平台数",
    statModels: "支持主流大模型",
    statPrice: "最低准入门槛 (自带 Key)",
    searchPlaceholder: "搜索名称、模型（如 Claude、GPT-5、DeepSeek）或关键字...",
    tabAll: "全部工具",
    tabIde: "AI 原生 IDE",
    tabCli: "CLI 智能体",
    tabExtension: "VS Code 插件",
    filterFree: "有免费额度",
    filterOs: "开源项目",
    btnDetails: "查看详情",
    btnWebsite: "官网",
    btnCompare: "对比所选",
    btnClear: "清空对比",
    comparingText: "正在对比：",
    compareTitle: "多维度横向对比",
    compareMaxAlert: "您最多只能同时对比 4 个工具。",
    compareMinAlert: "请至少选择 2 个工具进行对比。",
    licenseOpen: "开源项目",
    licenseClosed: "闭源 / 商业公司",
    activeStatus: "活跃中",
    inactiveStatus: "已停用",
    resetFilters: "重置筛选条件",
    noTools: "没有找到符合当前筛选条件的工具。",
    categoryLabels: {
      ide: "AI 原生 IDE",
      cli: "CLI 智能体",
      extension: "VS Code 插件"
    },
    // Card Specifics
    cardFreeTitle: "免费版 / 免费层",
    cardPaidTitle: "付费版 / 订阅层",
    cardFreeModels: "免费可用模型",
    cardPaidModels: "付费可用模型",
    cardPrice: "起步价",
    cardNoFree: "仅限付费",
    cardBYOK: "自带 Key (BYOK)",
    cardFreeSoftware: "完全免费开源",
    cardDiscontinued: "服务已终止",
    // Suggestions headings
    suggestPopular: "热搜词推荐",
    suggestTools: "收录工具及平台",
    suggestModels: "大模型及框架",
    suggestFilters: "快捷筛选器",
    suggestType: {
      tool: "工具",
      model: "模型",
      category: "分类",
      filter: "筛选"
    },
    // Comparison Table Labels
    compareCols: {
      category: "工具分类",
      status: "当前状态",
      license: "开源协议",
      freeTier: "免费模型及额度",
      paidTier: "付费价格及模型",
      regInfo: "注册流程及要求",
      promos: "促销活动与试用",
      cli: "安装命令 (CLI)",
      links: "官方链接"
    },
    // Modal Titles
    modalDesc: "工具描述",
    modalFreeTitle: "免费账户详情",
    modalPaidTitle: "付费账户详情",
    modalRegTitle: "注册流程与要求",
    modalPromoTitle: "试用与优惠活动",
    modalInstallTitle: "CLI 安装命令",
    modalInstallNote: "在终端中运行以下命令以安装 CLI 工具：",
    modalExtraTitle: "架构设计与额外说明",
    modalWebBtn: "访问官方网站",
    modalSourceBtn: "查看开源源码"
  }
};

// App State
let currentLang = localStorage.getItem("cli_web_lang") || "zh";
let currentTab = "all";
let searchFilter = "";
let showFreeOnly = false;
let showOpenSourceOnly = false;
let selectedCompareIds = [];
let activeSuggestIndex = -1; // Autocomplete keyboard index

// DOM Elements
const langToggleBtn = document.getElementById("lang-toggle-btn");
const langBtnText = document.getElementById("lang-btn-text");
const langToggleBtnInline = document.getElementById("lang-toggle-btn-inline");
const langBtnTextInline = document.getElementById("lang-btn-text-inline");
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-desc");
const badgeTag = document.getElementById("badge-tag");
const statLabelTools = document.getElementById("stat-label-tools");
const statLabelModels = document.getElementById("stat-label-models");
const statLabelPrice = document.getElementById("stat-label-price");

const toolsGrid = document.getElementById("tools-grid");
const searchInput = document.getElementById("search-input");
const searchSuggestions = document.getElementById("search-suggestions");
const categoryTabs = document.getElementById("category-tabs");
const tabButtons = document.querySelectorAll(".tab-btn");
const freeFilterCheckbox = document.getElementById("filter-free");
const osFilterCheckbox = document.getElementById("filter-os");
const freeFilterLabelSpan = document.querySelector("#filter-free-label span");
const osFilterLabelSpan = document.querySelector("#filter-os-label span");

const compareBar = document.getElementById("compare-bar");
const compareBadgesContainer = document.getElementById("compare-badges");
const compareBtn = document.getElementById("compare-btn");
const clearCompareBtn = document.getElementById("clear-compare-btn");
const compareOverlay = document.getElementById("compare-overlay");
const compareCloseBtn = document.getElementById("compare-close-btn");
const comparisonTableBody = document.getElementById("comparison-table-body");
const compareModalTitle = document.querySelector(".compare-modal-title");

const detailModal = document.getElementById("detail-modal");
const detailModalContent = document.getElementById("detail-modal-body");
const detailCloseBtn = document.getElementById("detail-close-btn");

const footerTextParagraph = document.querySelector("footer p:first-child");
const footerNoteParagraph = document.querySelector("footer p:last-child");

// Initialize Lucide Icons helper
function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Apply Translations to Static HTML
function applyStaticTranslations() {
  const t = translations[currentLang];
  
  // Set Lang attribute on document
  document.documentElement.lang = currentLang;

  // Toggle button shows the OTHER language to switch to
  langBtnText.textContent = currentLang === "zh" ? "English" : "中文";
  if (langBtnTextInline) {
    langBtnTextInline.textContent = currentLang === "zh" ? "English" : "中文";
  }
  
  // Update header content
  badgeTag.innerHTML = `<i data-lucide="cpu" style="width: 14px; height: 14px;"></i> ${t.badgeTag}`;
  heroTitle.innerHTML = t.heroTitle;
  heroDesc.textContent = t.heroDesc;
  
  // Stats labels
  statLabelTools.textContent = t.statTools;
  statLabelModels.textContent = t.statModels;
  statLabelPrice.textContent = t.statPrice;
  
  // Search placeholder
  searchInput.placeholder = t.searchPlaceholder;
  
  // Category tabs text
  document.getElementById("tab-all").textContent = t.tabAll;
  document.getElementById("tab-ide").textContent = t.tabIde;
  document.getElementById("tab-cli").textContent = t.tabCli;
  document.getElementById("tab-extension").textContent = t.tabExtension;
  
  // Checkbox filters
  freeFilterLabelSpan.textContent = t.filterFree;
  osFilterLabelSpan.textContent = t.filterOs;
  
  // Compare bar
  document.querySelector(".compare-bar-content span").textContent = t.comparingText;
  clearCompareBtn.textContent = t.btnClear;
  compareBtn.innerHTML = `${t.btnCompare} <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>`;
  compareModalTitle.textContent = t.compareTitle;

  // Footer
  footerTextParagraph.innerHTML = t.footerText;
  footerNoteParagraph.textContent = t.footerNote;
  
  initIcons();
}

// Format model string into chips
function renderModelChips(modelsStr, isPaid) {
  const t = translations[currentLang];
  if (!modelsStr || modelsStr.toLowerCase() === "none" || modelsStr === "无" || modelsStr === "N/A" || modelsStr === "不适用") {
    return `<span class="model-tag empty-tag">${isPaid ? t.cardDiscontinued : t.cardNoFree}</span>`;
  }

  // Check for BYOK models
  if (modelsStr.includes("BYOK") || modelsStr.includes("自带 Key")) {
    return `<span class="model-tag">${t.cardBYOK}</span>`;
  }
  
  // Split models by comma, clean and render
  const parts = modelsStr.split(",");
  return parts.map(part => {
    let name = part.trim();
    if (!name) return "";
    return `<span class="model-tag ${isPaid ? 'paid' : ''}">${name}</span>`;
  }).join(" ");
}

// Render Tool Cards
function renderTools() {
  const t = translations[currentLang];
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
      const matchDesc = tool.desc[currentLang].toLowerCase().includes(query);
      
      const freeModels = (tool.freeTier.models[currentLang] || "").toLowerCase();
      const paidModels = (tool.paidTier.models[currentLang] || "").toLowerCase();
      const matchModels = (freeModels + " " + paidModels).includes(query);
      
      const categoryLabel = t.categoryLabels[tool.category].toLowerCase();
      const matchCategory = categoryLabel.includes(query) || tool.category.includes(query);
      
      if (!matchName && !matchDesc && !matchModels && !matchCategory) {
        return false;
      }
    }
    
    return true;
  });

  if (filteredTools.length === 0) {
    toolsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 24px; color: var(--text-muted);">
        <i data-lucide="info" style="width: 48px; height: 48px; margin-bottom: 16px;"></i>
        <p style="font-size: 18px; font-weight: 500;">${t.noTools}</p>
        <button onclick="resetFilters()" style="margin-top: 16px; background: var(--primary-gradient); border: none; color: white; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;">${t.resetFilters}</button>
      </div>
    `;
    initIcons();
    return;
  }

  filteredTools.forEach(tool => {
    const isChecked = selectedCompareIds.includes(tool.id);
    const card = document.createElement("div");
    card.className = `tool-card ${tool.status === 'inactive' ? 'shut-down' : ''}`;
    
    const descText = tool.desc[currentLang];
    const categoryLabel = t.categoryLabels[tool.category];
    const statusLabel = tool.status === 'active' ? t.activeStatus : t.inactiveStatus;

    // Get pricing summary for the paid tier
    let priceSummary = "";
    if (tool.status === 'inactive') {
      priceSummary = t.cardDiscontinued;
    } else if (tool.paidTier.price[currentLang].toLowerCase().includes("none") || tool.paidTier.price[currentLang].includes("无") || tool.paidTier.price[currentLang].includes("Free Software")) {
      priceSummary = t.cardFreeSoftware;
    } else {
      // Shorten price representation for card view if too long
      const rawPrice = tool.paidTier.price[currentLang];
      const matchSplit = rawPrice.split("|");
      priceSummary = matchSplit[0].trim();
    }

    // Get short quota text for free tier
    let freeQuotaShort = "";
    if (!tool.hasFreeTier) {
      freeQuotaShort = t.cardNoFree;
    } else {
      const rawLimits = tool.freeTier.limits[currentLang];
      // Keep it short
      freeQuotaShort = rawLimits.length > 55 ? rawLimits.substring(0, 55) + "..." : rawLimits;
    }

    card.innerHTML = `
      <div class="tool-header">
        <div class="tool-logo-name">
          <div class="tool-logo">${tool.name.charAt(0)}</div>
          <div>
            <h3 class="tool-title">${tool.name}</h3>
            <span class="tool-category">${categoryLabel} &bull; ${tool.isOpenSource ? t.licenseOpen : t.licenseClosed}</span>
          </div>
        </div>
        <span class="status-badge ${tool.status === 'active' ? 'status-active' : 'status-inactive'}">
          ${statusLabel}
        </span>
      </div>
      
      <div class="info-section">
        <!-- Free Tier Section -->
        <div class="card-tier-panel">
          <div class="tier-panel-header">
            <i data-lucide="sparkles" class="icon-free"></i>
            <span class="tier-panel-title">${t.cardFreeTitle}</span>
          </div>
          <div class="model-tags">
            ${renderModelChips(tool.freeTier.models[currentLang], false)}
          </div>
          <div class="quota-short-text">${freeQuotaShort}</div>
        </div>

        <!-- Paid Tier Section -->
        <div class="card-tier-panel">
          <div class="tier-panel-header">
            <i data-lucide="credit-card" class="icon-paid"></i>
            <span class="tier-panel-title">${t.cardPaidTitle}</span>
          </div>
          <div class="tier-price-row">
            <span class="tier-panel-title" style="text-transform:none; font-weight:normal; letter-spacing:0;">${t.cardPrice}:</span>
            <span class="tier-price-val">${priceSummary}</span>
          </div>
          <div class="model-tags">
            ${renderModelChips(tool.paidTier.models[currentLang], true)}
          </div>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="btn btn-primary" onclick="openDetails('${tool.id}')">${t.btnDetails}</button>
        <a href="${tool.website}" target="_blank" class="btn" title="${t.btnWebsite}">
          <i data-lucide="external-link" style="width: 14px; height: 14px;"></i>
          <span>${t.btnWebsite}</span>
        </a>
        <label class="compare-check ${isChecked ? 'checked' : ''}" title="${t.btnCompare}">
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
  closeSuggestions();
  renderTools();
};

// Compare logic
window.toggleCompare = function(id) {
  const t = translations[currentLang];
  const index = selectedCompareIds.indexOf(id);
  if (index === -1) {
    if (selectedCompareIds.length >= 4) {
      alert(t.compareMaxAlert);
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
  const t = translations[currentLang];
  if (selectedCompareIds.length < 2) {
    alert(t.compareMinAlert);
    return;
  }
  
  const selectedTools = selectedCompareIds.map(id => toolsData.find(t => t.id === id));
  
  // Headers row
  let headerHtml = `<tr><th>${t.compareCols.category}</th>`;
  selectedTools.forEach(tool => {
    headerHtml += `<td class="compare-tool-header">${tool.name}</td>`;
  });
  headerHtml += `</tr>`;
  
  // Rows
  const rows = [
    { label: t.compareCols.category, fn: tool => t.categoryLabels[tool.category] },
    { label: t.compareCols.status, fn: tool => tool.status === 'active' ? t.activeStatus : t.inactiveStatus },
    { label: t.compareCols.license, fn: tool => tool.isOpenSource ? t.licenseOpen : t.licenseClosed },
    { label: t.compareCols.freeTier, fn: tool => `<strong>Models:</strong> ${tool.freeTier.models[currentLang]}<br><br>${tool.freeTier.limits[currentLang]}` },
    { label: t.compareCols.paidTier, fn: tool => `<strong>Price:</strong> ${tool.paidTier.price[currentLang]}<br><br><strong>Models:</strong> ${tool.paidTier.models[currentLang]}<br><br>${tool.paidTier.limits[currentLang]}` },
    { label: t.compareCols.regInfo, fn: tool => `<strong>Process:</strong> ${tool.registration.process[currentLang]}<br><br><strong>Needs:</strong> ${tool.registration.requirements[currentLang]}` },
    { label: t.compareCols.promos, fn: tool => tool.promotions.trials[currentLang] },
    { label: t.compareCols.cli, fn: tool => tool.installCmd ? `<code class="code-block">${tool.installCmd}</code>` : "N/A" },
    { label: t.compareCols.links, fn: tool => `
      <a href="${tool.website}" target="_blank" style="color: var(--primary-cyan); text-decoration: underline; margin-right: 12px; font-weight:600;">Website</a>
      ${tool.github ? `<a href="${tool.github}" target="_blank" style="color: var(--primary-purple); text-decoration: underline; font-weight:600;">GitHub</a>` : ""}
    ` }
  ];
  
  let rowsHtml = "";
  rows.forEach(row => {
    rowsHtml += `<tr><th>${row.label}</th>`;
    selectedTools.forEach(tool => {
      let val = row.fn(tool);
      rowsHtml += `<td>${val}</td>`;
    });
    rowsHtml += `</tr>`;
  });
  
  comparisonTableBody.innerHTML = headerHtml + rowsHtml;
  compareOverlay.classList.add("show");
};

// Details Modal
window.openDetails = function(id) {
  const t = translations[currentLang];
  const tool = toolsData.find(t => t.id === id);
  if (!tool) return;
  
  const categoryLabel = t.categoryLabels[tool.category];
  const licenseText = tool.isOpenSource ? t.licenseOpen : t.licenseClosed;

  detailModalContent.innerHTML = `
    <div class="modal-header-section">
      <div class="tool-logo">${tool.name.charAt(0)}</div>
      <div>
        <h2>${tool.name}</h2>
        <span class="tool-category">${categoryLabel} &bull; ${licenseText}</span>
      </div>
    </div>
    
    <div class="modal-grid">
      <div class="modal-box" style="grid-column: 1 / -1;">
        <div class="modal-box-title">
          <i data-lucide="info" style="width: 18px; height: 18px;"></i> ${t.modalDesc}
        </div>
        <div class="modal-box-text">${tool.desc[currentLang]}</div>
      </div>
      
      <div class="modal-box">
        <div class="modal-box-title" style="color: var(--color-free);">
          <i data-lucide="sparkles" style="width: 18px; height: 18px;"></i> ${t.modalFreeTitle}
        </div>
        <div class="modal-box-text">
          <strong>Models:</strong> ${tool.freeTier.models[currentLang] || 'None'}<br><br>
          <strong>Limits:</strong> ${tool.freeTier.limits[currentLang]}
        </div>
      </div>
      
      <div class="modal-box">
        <div class="modal-box-title" style="color: var(--color-paid);">
          <i data-lucide="credit-card" style="width: 18px; height: 18px;"></i> ${t.modalPaidTitle}
        </div>
        <div class="modal-box-text">
          <strong>Price:</strong> ${tool.paidTier.price[currentLang]}<br><br>
          <strong>Models:</strong> ${tool.paidTier.models[currentLang]}<br><br>
          <strong>Limits:</strong> ${tool.paidTier.limits[currentLang]}
        </div>
      </div>
      
      <div class="modal-box">
        <div class="modal-box-title">
          <i data-lucide="user-plus" style="width: 18px; height: 18px;"></i> ${t.modalRegTitle}
        </div>
        <div class="modal-box-text">
          <strong>Process:</strong> ${tool.registration.process[currentLang]}<br><br>
          <strong>Requirements:</strong> ${tool.registration.requirements[currentLang]}
        </div>
      </div>
      
      <div class="modal-box">
        <div class="modal-box-title" style="color: var(--primary-cyan);">
          <i data-lucide="gift" style="width: 18px; height: 18px;"></i> ${t.modalPromoTitle}
        </div>
        <div class="modal-box-text">
          <strong>Activities:</strong> ${tool.promotions.trials[currentLang]}
        </div>
      </div>
      
      ${tool.installCmd ? `
      <div class="modal-box" style="grid-column: 1 / -1;">
        <div class="modal-box-title">
          <i data-lucide="terminal" style="width: 18px; height: 18px;"></i> ${t.modalInstallTitle}
        </div>
        <div class="modal-box-text">
          ${t.modalInstallNote}
          <pre class="code-block">${tool.installCmd}</pre>
        </div>
      </div>
      ` : ''}

      <div class="modal-box" style="grid-column: 1 / -1;">
        <div class="modal-box-title">
          <i data-lucide="cpu" style="width: 18px; height: 18px;"></i> ${t.modalExtraTitle}
        </div>
        <div class="modal-box-text">
          ${tool.extraInfo[currentLang]}
        </div>
      </div>
    </div>
    
    <div style="display: flex; gap: 16px; margin-top: 30px;">
      <a href="${tool.website}" target="_blank" class="btn btn-primary" style="flex-grow: 1;">
        <i data-lucide="external-link" style="width: 16px; height: 16px;"></i> ${t.modalWebBtn}
      </a>
      ${tool.github ? `
      <a href="${tool.github}" target="_blank" class="btn" style="flex-grow: 1;">
        <i data-lucide="github" style="width: 16px; height: 16px;"></i> ${t.modalSourceBtn}
      </a>
      ` : ''}
    </div>
  `;
  detailModal.classList.add("show");
  initIcons();
};

// Search Autocomplete Suggestion Logic
const suggestionsData = {
  tools: [
    { value: "Cursor", label: "Cursor", type: "tool", icon: "layout" },
    { value: "Windsurf", label: "Windsurf", type: "tool", icon: "layout" },
    { value: "Kiro", label: "Kiro (AWS Kiro)", type: "tool", icon: "layout" },
    { value: "Claude Code", label: "Claude Code", type: "tool", icon: "terminal" },
    { value: "OpenAI Codex", label: "OpenAI Codex", type: "tool", icon: "terminal" },
    { value: "OpenCode", label: "OpenCode", type: "tool", icon: "terminal" },
    { value: "AtomCode", label: "AtomCode", type: "tool", icon: "terminal" },
    { value: "Aider", label: "Aider", type: "tool", icon: "terminal" },
    { value: "Cline", label: "Cline", type: "tool", icon: "layers" },
    { value: "Continue", label: "Continue", type: "tool", icon: "layers" },
    { value: "GitHub Copilot", label: "GitHub Copilot", type: "tool", icon: "layers" },
    { value: "Roo Code", label: "Roo Code", type: "tool", icon: "layers" }
  ],
  models: [
    { value: "Claude 3.5 Sonnet", label: "Claude 3.5 Sonnet", type: "model", icon: "cpu" },
    { value: "Claude 3.7 Sonnet", label: "Claude 3.7 Sonnet", type: "model", icon: "cpu" },
    { value: "Claude Opus", label: "Claude Opus", type: "model", icon: "cpu" },
    { value: "GPT-4o", label: "GPT-4o", type: "model", icon: "cpu" },
    { value: "GPT-5", label: "GPT-5", type: "model", icon: "cpu" },
    { value: "DeepSeek", label: "DeepSeek", type: "model", icon: "cpu" },
    { value: "Gemini", label: "Gemini", type: "model", icon: "cpu" },
    { value: "Ollama", label: "Ollama", type: "model", icon: "cpu" }
  ],
  filters: [
    { value: "Open Source", label_en: "Open Source", label_zh: "开源项目", type: "filter", icon: "github", action: "os" },
    { value: "Free Tier", label_en: "Free Tier Available", label_zh: "有免费额度", type: "filter", icon: "sparkles", action: "free" },
    { value: "AI-First IDE", label_en: "AI Native IDEs", label_zh: "AI 原生 IDE", type: "filter", icon: "layout", action: "ide" },
    { value: "CLI Agent", label_en: "CLI Agents", label_zh: "CLI 智能体", type: "filter", icon: "terminal", action: "cli" },
    { value: "VS Code Extension", label_en: "VS Code Extensions", label_zh: "VS Code 插件", type: "filter", icon: "layers", action: "extension" }
  ]
};

// Popular searches list (shown when search box is empty/focused)
const popularSearches = [
  { value: "Cursor", label: "Cursor", type: "tool", icon: "layout" },
  { value: "Claude Code", label: "Claude Code", type: "tool", icon: "terminal" },
  { value: "Claude 3.5 Sonnet", label: "Claude 3.5 Sonnet", type: "model", icon: "cpu" },
  { value: "DeepSeek", label: "DeepSeek", type: "model", icon: "cpu" },
  { value: "Open Source", label_en: "Open Source", label_zh: "开源项目", type: "filter", icon: "github", action: "os" },
  { value: "Free Tier", label_en: "Free Tier Available", label_zh: "有免费额度", type: "filter", icon: "sparkles", action: "free" }
];

function closeSuggestions() {
  searchSuggestions.classList.remove("show");
  activeSuggestIndex = -1;
}

function handleSuggestionClick(item) {
  if (item.action) {
    if (item.action === "os") {
      osFilterCheckbox.checked = true;
      showOpenSourceOnly = true;
      searchInput.value = "";
      searchFilter = "";
    } else if (item.action === "free") {
      freeFilterCheckbox.checked = true;
      showFreeOnly = true;
      searchInput.value = "";
      searchFilter = "";
    } else if (["ide", "cli", "extension"].includes(item.action)) {
      currentTab = item.action;
      tabButtons.forEach(btn => {
        if (btn.dataset.tab === item.action) btn.classList.add("active");
        else btn.classList.remove("active");
      });
      searchInput.value = "";
      searchFilter = "";
    }
  } else {
    searchInput.value = item.value;
    searchFilter = item.value;
  }
  
  closeSuggestions();
  renderTools();
}

function renderSuggestionsList(query) {
  const t = translations[currentLang];
  searchSuggestions.innerHTML = "";
  
  if (!query) {
    // Show popular searches when input is empty
    let html = `<div class="suggestion-group-title">${t.suggestPopular}</div>`;
    popularSearches.forEach((item, index) => {
      const displayLabel = item[`label_${currentLang}`] || item.label || item.value;
      const typeLabel = t.suggestType[item.type];
      html += `
        <div class="suggestion-item" data-index="${index}">
          <div class="suggestion-item-left">
            <i data-lucide="${item.icon}" style="width: 14px; height: 14px;"></i>
            <span>${displayLabel}</span>
          </div>
          <span class="suggestion-badge">${typeLabel}</span>
        </div>
      `;
    });
    searchSuggestions.innerHTML = html;
    searchSuggestions.classList.add("show");
    initIcons();
    
    // Register click handlers
    document.querySelectorAll(".suggestion-item").forEach((el, index) => {
      el.addEventListener("click", () => {
        handleSuggestionClick(popularSearches[index]);
      });
    });
    return;
  }

  // Filter lists based on query
  const q = query.toLowerCase().trim();
  const matchedTools = suggestionsData.tools.filter(item => 
    item.label.toLowerCase().includes(q)
  );
  const matchedModels = suggestionsData.models.filter(item => 
    item.label.toLowerCase().includes(q)
  );
  const matchedFilters = suggestionsData.filters.filter(item => {
    const label = item[`label_${currentLang}`] || item.value;
    return label.toLowerCase().includes(q) || item.value.toLowerCase().includes(q);
  });

  const totalMatches = [...matchedTools, ...matchedModels, ...matchedFilters];
  
  if (totalMatches.length === 0) {
    closeSuggestions();
    return;
  }

  let html = "";
  let currentIndex = 0;
  
  // Render matching tools
  if (matchedTools.length > 0) {
    html += `<div class="suggestion-group-title">${t.suggestTools}</div>`;
    matchedTools.forEach(item => {
      html += `
        <div class="suggestion-item" data-index="${currentIndex++}">
          <div class="suggestion-item-left">
            <i data-lucide="${item.icon}" style="width: 14px; height: 14px;"></i>
            <span>${item.label}</span>
          </div>
          <span class="suggestion-badge">${t.suggestType[item.type]}</span>
        </div>
      `;
    });
  }

  // Render matching models
  if (matchedModels.length > 0) {
    html += `<div class="suggestion-group-title">${t.suggestModels}</div>`;
    matchedModels.forEach(item => {
      html += `
        <div class="suggestion-item" data-index="${currentIndex++}">
          <div class="suggestion-item-left">
            <i data-lucide="${item.icon}" style="width: 14px; height: 14px;"></i>
            <span>${item.label}</span>
          </div>
          <span class="suggestion-badge">${t.suggestType[item.type]}</span>
        </div>
      `;
    });
  }

  // Render matching filters
  if (matchedFilters.length > 0) {
    html += `<div class="suggestion-group-title">${t.suggestFilters}</div>`;
    matchedFilters.forEach(item => {
      const displayLabel = item[`label_${currentLang}`] || item.value;
      html += `
        <div class="suggestion-item" data-index="${currentIndex++}">
          <div class="suggestion-item-left">
            <i data-lucide="${item.icon}" style="width: 14px; height: 14px;"></i>
            <span>${displayLabel}</span>
          </div>
          <span class="suggestion-badge">${t.suggestType[item.type]}</span>
        </div>
      `;
    });
  }

  searchSuggestions.innerHTML = html;
  searchSuggestions.classList.add("show");
  initIcons();

  // Register click handlers
  document.querySelectorAll(".suggestion-item").forEach(el => {
    el.addEventListener("click", () => {
      const index = parseInt(el.dataset.index);
      handleSuggestionClick(totalMatches[index]);
    });
  });

  activeSuggestIndex = -1;
}

function toggleLanguage() {
  currentLang = currentLang === "zh" ? "en" : "zh";
  localStorage.setItem("cli_web_lang", currentLang);
  
  applyStaticTranslations();
  renderTools();
  updateCompareBar();
  closeSuggestions();
}

langToggleBtn.addEventListener("click", toggleLanguage);
if (langToggleBtnInline) {
  langToggleBtnInline.addEventListener("click", toggleLanguage);
}

searchInput.addEventListener("input", (e) => {
  searchFilter = e.target.value;
  renderSuggestionsList(searchFilter);
  renderTools();
});

searchInput.addEventListener("focus", () => {
  renderSuggestionsList(searchInput.value);
});

// Autocomplete Keyboard Navigation
searchInput.addEventListener("keydown", (e) => {
  const items = document.querySelectorAll(".suggestion-item");
  if (!items.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeSuggestIndex = (activeSuggestIndex + 1) % items.length;
    highlightSuggestion(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeSuggestIndex = (activeSuggestIndex - 1 + items.length) % items.length;
    highlightSuggestion(items);
  } else if (e.key === "Enter") {
    if (activeSuggestIndex > -1) {
      e.preventDefault();
      items[activeSuggestIndex].click();
    }
  } else if (e.key === "Escape") {
    closeSuggestions();
  }
});

function highlightSuggestion(items) {
  items.forEach((item, index) => {
    if (index === activeSuggestIndex) {
      item.classList.add("active");
      // Scroll into view if needed
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("active");
    }
  });
}

// Close suggestion list when clicking outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
    closeSuggestions();
  }
});

// Category Tab buttons click
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    renderTools();
    closeSuggestions();
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
  applyStaticTranslations();
  renderTools();
});
