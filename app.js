const toolsData = [
  {
    id: "cursor",
    name: "Cursor",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://cursor.com",
    github: "",
    installCmd: "",
    desc: {
      en: "A highly popular AI-first code editor fork of VS Code. Uses a credit-based system with 'Auto' mode for unlimited cost-efficient model routing.",
      zh: "非常受欢迎的基于 VS Code 分支的 AI 原生编辑器。凭借其“Auto”自动代理模式和深度的代码库索引，专为高效的 Agent 开发流程设计。"
    },
    freeTier: {
      models: {
        en: "cursor-small, limited premium model access (slow speed)",
        zh: "cursor-small, 限量使用高级模型（慢速）"
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
        en: "Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, GPT-4.1, GPT-4.1 Nano, Gemini 3.1 Pro, Gemini 2.5 Pro, DeepSeek V4 Pro, Grok 4.3, Composer 2.5",
        zh: "Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, GPT-4.1, GPT-4.1 Nano, Gemini 3.1 Pro, Gemini 2.5 Pro, DeepSeek V4 Pro, Grok 4.3, Composer 2.5"
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
    id: "windsurf",
    name: "Windsurf",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://codeium.com/windsurf",
    github: "",
    installCmd: "",
    desc: {
      en: "An AI-native IDE by Codeium featuring 'Cascade', a collaborative agent workflow that switches fluidly between copilot and autonomous coding.",
      zh: "由 Codeium 推出的 AI 原生 IDE，主打“Cascade”协作 Agent 工作流，可在智能辅助（Copilot）和自主编码（Agent）之间流转自如。"
    },
    freeTier: {
      models: {
        en: "SWE-1.6 (limited/slow), basic model access",
        zh: "SWE-1.6 (限量/慢速), 基础模型访问"
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
        en: "SWE-1.6, SWE-1.6 Fast, SWE-1.5, Claude Opus 4.7, Claude Sonnet 4.6, GPT-4o, DeepSeek R1, Gemini 3 Pro",
        zh: "SWE-1.6, SWE-1.6 Fast, SWE-1.5, Claude Opus 4.7, Claude Sonnet 4.6, GPT-4o, DeepSeek R1, Gemini 3 Pro"
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
    id: "kiro",
    name: "Kiro (AWS)",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://kiro.dev",
    github: "https://github.com/aws/kiro",
    installCmd: "",
    desc: {
      en: "An agentic IDE fork of VS Code developed by AWS, focused on 'spec-driven development'—planning, design, and specs before coding.",
      zh: "由 AWS 开发的 VS Code 代理化 IDE 分支，专注于“规范驱动开发”——在编码前进行深入的规划、设计与技术规范制定。"
    },
    freeTier: {
      models: {
        en: "Claude Sonnet 4.5, Qwen3 Coder Next, DeepSeek v3.2, MiniMax M2.1",
        zh: "Claude Sonnet 4.5, Qwen3 Coder Next, DeepSeek v3.2, MiniMax M2.1"
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
        en: "Claude Opus 4.7, Claude Sonnet 4.5, GLM-5, Amazon Nova, MiniMax M2.5",
        zh: "Claude Opus 4.7, Claude Sonnet 4.5, GLM-5, Amazon Nova, MiniMax M2.5"
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
    id: "claudecode",
    name: "Claude Code",
    category: "cli",
    isOpenSource: false,
    hasFreeTier: false,
    status: "active",
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
        en: "Claude Opus 4.7, Claude Sonnet 4.6, Claude Haiku 4.5",
        zh: "Claude Opus 4.7, Claude Sonnet 4.6, Claude Haiku 4.5"
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
        zh: "已设置计费 of Anthropic Console 账户（用于 API）或已订阅 Claude Pro 的个人账户。"
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
    id: "openai-codex",
    name: "OpenAI Codex CLI",
    category: "cli",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://github.com/openai/codex",
    github: "https://github.com/openai/codex",
    installCmd: "npm i -g @openai/codex",
    desc: {
      en: "OpenAI's official developer suite including Codex CLI (Rust-based), Desktop App, and ChatGPT web-agent integrations.",
      zh: "OpenAI 官方推出的开发者套件，包括基于 Rust 的 Codex CLI、桌面端应用以及 ChatGPT 网页智能体集成。"
    },
    freeTier: {
      models: {
        en: "GPT-5.5 Instant (via ChatGPT free limits)",
        zh: "GPT-5.5 Instant (使用 ChatGPT 免费额度)"
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
        en: "GPT-5.5, GPT-5.4, GPT-5.4-mini, GPT-5.3-Codex, GPT-5.3-Codex-Spark",
        zh: "GPT-5.5, GPT-5.4, GPT-5.4-mini, GPT-5.3-Codex, GPT-5.3-Codex-Spark"
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
    id: "opencode",
    name: "OpenCode",
    category: "cli",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://opencode.ai",
    github: "https://github.com/opencode/opencode",
    installCmd: "go install github.com/opencode/opencode@latest",
    desc: {
      en: "An open-source terminal CLI/TUI coding agent built in Go. Model-agnostic and supports split 'Plan' and 'Build' modes for safe editing.",
      zh: "使用 Go 编写的开源终端 CLI/TUI 编码智能体。不绑定模型，支持“规划”和“构建”双重模式以确保代码编辑安全。"
    },
    freeTier: {
      models: {
        en: "BYOK (Claude Sonnet 4.6, GPT-5.5, DeepSeek V4 Pro)",
        zh: "BYOK (Claude Sonnet 4.6, GPT-5.5, DeepSeek V4 Pro)"
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
        en: "BYOK (Claude Opus 4.7, GPT-5.5, DeepSeek V4 Pro, Gemini 3.1 Pro, Qwen 3)",
        zh: "BYOK (Claude Opus 4.7, GPT-5.5, DeepSeek V4 Pro, Gemini 3.1 Pro, Qwen 3)"
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
    id: "atomcode",
    name: "AtomCode",
    category: "cli",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://atomgit.com/atomcode/atomcode",
    github: "https://atomgit.com/atomcode/atomcode",
    installCmd: "cargo install atomcode",
    desc: {
      en: "An open-source Rust-based terminal coding agent. Focuses on small, self-verifying steps and HarmonyOS PC integration.",
      zh: "基于 Rust 编写的开源终端编码智能体。专注于微小的自我验证步骤，并深度集成了鸿蒙系统 (HarmonyOS) PC 生态。"
    },
    freeTier: {
      models: {
        en: "BYOK (Ollama local, Claude Sonnet 4.6, GPT-5.5, DeepSeek V4)",
        zh: "BYOK (本地 Ollama, Claude Sonnet 4.6, GPT-5.5, DeepSeek V4)"
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
        en: "BYOK (Ollama: DeepSeek V4, Qwen 3, Llama 4; Cloud: Claude Sonnet 4.6, GPT-5.5)",
        zh: "BYOK (本地: DeepSeek V4, Qwen 3, Llama 4; 云端: Claude Sonnet 4.6, GPT-5.5)"
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
      zh: "内置 Token 消费估算数据库，帮助您直观监测 and 统计 API Key 的具体花费。"
    }
  },
  {
    id: "aider",
    name: "Aider",
    category: "cli",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://aider.chat",
    github: "https://github.com/paul-gauthier/aider",
    installCmd: "pip install aider-chat",
    desc: {
      en: "A widely popular command-line chat tool that lets you code with LLMs in your local git repository. Extremely efficient context management.",
      zh: "极受欢迎的命令行聊天工具，允许你在本地 Git 仓库中直接利用大模型协同编程。其上下文管理机制非常高效。"
    },
    freeTier: {
      models: {
        en: "BYOK (Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, DeepSeek V4 Pro, Ollama)",
        zh: "BYOK (Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, DeepSeek V4 Pro, Ollama)"
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
        en: "BYOK (Claude Opus 4.7, GPT-5.5, DeepSeek V4 Pro, Gemini 3.1 Pro, Qwen 3)",
        zh: "BYOK (Claude Opus 4.7, GPT-5.5, DeepSeek V4 Pro, Gemini 3.1 Pro, Qwen 3)"
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
    id: "cline",
    name: "Cline",
    category: "extension",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://cline.bot",
    github: "https://github.com/cline/cline",
    installCmd: "VS Code Marketplace -> Search: 'Cline'",
    desc: {
      en: "An open-source VS Code extension that creates an autonomous coding agent capable of editing files, running terminal commands, and reading browser pages.",
      zh: "一款开源 VS Code 插件，能创建拥有文件编辑、终端运行、网页读取等全方位权限的自主编码 Agent。"
    },
    freeTier: {
      models: {
        en: "BYOK (Claude Sonnet 4.6, GPT-5.5, Gemini 3.1 Pro, DeepSeek V4)",
        zh: "BYOK (Claude Sonnet 4.6, GPT-5.5, Gemini 3.1 Pro, DeepSeek V4)"
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
        en: "BYOK (Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, DeepSeek V4, Qwen 3)",
        zh: "BYOK (Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, DeepSeek V4, Qwen 3)"
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
    id: "continue",
    name: "Continue",
    category: "extension",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://continue.dev",
    github: "https://github.com/continuedev/continue",
    installCmd: "VS Code Marketplace -> Search: 'Continue'",
    desc: {
      en: "An open-source AI coding assistant for VS Code and JetBrains. Great for building custom autocomplete and codebase-wide chat systems.",
      zh: "适用于 VS Code 和 JetBrains 的开源 AI 编码助手。非常适合构建自定义代码补全和针对整个代码库的对话问答系统。"
    },
    freeTier: {
      models: {
        en: "BYOK (Ollama, Claude Sonnet 4.6, GPT-5.5, DeepSeek V4)",
        zh: "BYOK (Ollama, Claude Sonnet 4.6, GPT-5.5, DeepSeek V4)"
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
        en: "BYOK (Ollama, Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro, DeepSeek V4, Codestral)",
        zh: "BYOK (Ollama, Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro, DeepSeek V4, Codestral)"
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
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://github.com/features/copilot",
    github: "",
    installCmd: "VS Code Marketplace -> Search: 'GitHub Copilot'",
    desc: {
      en: "The pioneer AI coding extension. Seamlessly integrated into VS Code. Transitioning to a token-based credit billing system on June 1, 2026.",
      zh: "AI 编码插件的先驱。与 VS Code 深度集成。将于 2026 年 6 月 1 日转换为基于 Token 的点数计费体系。"
    },
    freeTier: {
      models: {
        en: "Claude Sonnet 4.6, GPT-5.4 mini (50 premium requests/mo)",
        zh: "Claude Sonnet 4.6, GPT-5.4 mini (每月 50 次高级请求)"
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
        en: "Claude Opus 4.7, Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, GPT-5.5, GPT-5.4, GPT-5.4 mini, GPT-5.3-Codex",
        zh: "Claude Opus 4.7, Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, GPT-5.5, GPT-5.4, GPT-5.4 mini, GPT-5.3-Codex"
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
    id: "roo-code",
    name: "Roo Code",
    category: "extension",
    isOpenSource: true,
    hasFreeTier: false,
    status: "inactive",
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
  },
  {
    id: "cody",
    name: "Sourcegraph Cody",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: false,
    status: "inactive",
    website: "https://sourcegraph.com/cody",
    github: "https://github.com/sourcegraph/cody",
    installCmd: "VS Code Marketplace -> Search: 'Cody'",
    desc: {
      en: "Sourcegraph's AI coding assistant. Discontinued self-service Free/Pro plans in 2025; now sold exclusively as an Enterprise solution.",
      zh: "Sourcegraph 旗下的 AI 编程助手。于 2025 年中止了面向个人开发者的免费和 Pro 订阅版，目前仅面向企业客户销售。"
    },
    freeTier: {
      models: {
        en: "None / Discontinued",
        zh: "无 / 已下线"
      },
      limits: {
        en: "Individual Free/Pro plans are discontinued. Sourcegraph launched a free experimental client called 'Amp' as an alternative.",
        zh: "个人免费版和 Pro 版已下线。作为替代，推出了名为“Amp”的免费广告支持版进行测试。"
      }
    },
    paidTier: {
      price: {
        en: "Enterprise only (~$59/user/mo)",
        zh: "仅限企业级客户 (约 $59/用户/月)"
      },
      models: {
        en: "Claude Opus 4.6, Claude Sonnet 4.6, GPT-5.1, Gemini 3 Pro, Gemini 2.5 Pro, StarCoder 3",
        zh: "Claude Opus 4.6, Claude Sonnet 4.6, GPT-5.1, Gemini 3 Pro, Gemini 2.5 Pro, StarCoder 3"
      },
      limits: {
        en: "Requires custom corporate contract. Integrates with enterprise codebases and supports custom models.",
        zh: "需要定制的企业级合同。可对接到企业内部私有代码库，支持定制模型。"
      }
    },
    registration: {
      process: {
        en: "Contact Sales via website.",
        zh: "通过官网联系销售代表进行试用和签约。"
      },
      requirements: {
        en: "Corporate email and enterprise contract negotiations.",
        zh: "公司邮箱以及企业级签约合同谈判。"
      }
    },
    promotions: {
      trials: {
        en: "Enterprise POC trials available upon request.",
        zh: "可申请企业级概念验证（POC）免费试用。"
      }
    },
    extraInfo: {
      en: "Features deep repository-wide context and SOC 2 security compliance.",
      zh: "主打多仓库全局上下文感知和高规格企业级安全合规（SOC 2 等）。"
    }
  },
  {
    id: "supermaven",
    name: "Supermaven",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: false,
    status: "inactive",
    website: "https://supermaven.com",
    github: "",
    installCmd: "VS Code Marketplace -> Search: 'Supermaven'",
    desc: {
      en: "Known for its ultra-fast 300,000-token context window. Standalone extensions discontinued Nov 30, 2025, after being acquired by Cursor.",
      zh: "曾以 30 万 Token 的极速上下文窗口补全而闻名。在被 Cursor 收购后，于 2025 年 11 月 30 日正式关闭了独立的插件运行。"
    },
    freeTier: {
      models: {
        en: "None / Discontinued",
        zh: "无 / 已下线"
      },
      limits: {
        en: "Standalone extension is discontinued. Technology is now integrated directly into Cursor editor.",
        zh: "独立插件已停止运行。技术和功能已被整合进 Cursor 编辑器中。"
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
        en: "Discontinued. Users are advised to subscribe to Cursor Pro for similar feature sets.",
        zh: "已下线。建议用户订阅 Cursor Pro 以使用整合后的高上下文速记补全服务。"
      }
    },
    registration: {
      process: {
        en: "Discontinued. Migrate to Cursor.",
        zh: "服务已终止，建议迁移到 Cursor 平台。"
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
      en: "Supermaven's custom 'Hawthorne' model was famous for sub-second autocomplete latency.",
      zh: "Supermaven 自研的 Hawthorne 模型曾以毫秒级的补全延迟响应时间在业界非常出名。"
    }
  },
  {
    id: "trae",
    name: "Trae (ByteDance Trae)",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://www.trae.ai/",
    github: "",
    installCmd: "",
    desc: {
      en: "ByteDance's AI native IDE successor to MarsCode, featuring 'SOLO' autonomous agent mode and deep code search integrations.",
      zh: "字节跳动推出的 AI 原生 IDE（MarsCode 升级继任版），集成了“SOLO”自主代理模式以及火山引擎的深度代码搜索。"
    },
    freeTier: {
      models: {
        en: "Claude 3.5 Sonnet, Claude 3.7 Sonnet, GPT-4o, Gemini 2.5 Pro/Flash, DeepSeek R1, DeepSeek V3, Doubao-Code, Grok, Kimi",
        zh: "Claude 3.5 Sonnet, Claude 3.7 Sonnet, GPT-4o, Gemini 2.5 Pro/Flash, DeepSeek R1, DeepSeek V3, 豆包, Grok, Kimi"
      },
      limits: {
        en: "Free Plan: Standard daily chat and autocomplete quotas (subject to fair use).",
        zh: "免费计划：标准的日常 Chat 对话和补全额度（受限于公平使用政策）。"
      }
    },
    paidTier: {
      price: {
        en: "$3/mo (Lite) | $10/mo (Pro) | $30/mo (Pro+) | $100/mo (Ultra)",
        zh: "$3/月 (Lite) | $10/月 (Pro) | $30/月 (Pro+) | $100/月 (Ultra)"
      },
      models: {
        en: "All free models + higher quotas, full SOLO and Builder agent modes, priority access",
        zh: "所有免费模型 + 更高配额，完整 SOLO 和 Builder 模式，优先访问"
      },
      limits: {
        en: "Pro plan increases daily limits and offers higher priority access to advanced models.",
        zh: "Pro 计划提供更高的每日请求额度以及对高级模型的优先低延迟访问权限。"
      }
    },
    registration: {
      process: {
        en: "Sign up via Google, GitHub, or Phone number.",
        zh: "支持使用 Google、GitHub 账号或手机号登录注册。"
      },
      requirements: {
        en: "None for Free. Payment card for Pro.",
        zh: "免费版无门槛，订阅 Pro 版需要绑定支付信用卡。"
      }
    },
    promotions: {
      trials: {
        en: "Often provides extended free trial phases or promotional low entry pricing (e.g. via Volcano Engine).",
        zh: "常年提供较长的免费测试期，国内通过火山引擎推广时常有极低折扣的包月优惠。"
      }
    },
    extraInfo: {
      en: "Integrates closely with Volcano Engine cloud services. The SOLO agent is highly optimized for project-level refactoring.",
      zh: "深度融合了火山引擎云服务生态。其内置的 SOLO 代理在进行项目级的重构和调试时表现优异。"
    }
  },
  {
    id: "lingma",
    name: "Tongyi Lingma (通义灵码)",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://tongyi.aliyun.com/lingma",
    github: "",
    installCmd: "VS Code Marketplace -> Search: 'Tongyi Lingma'",
    desc: {
      en: "Alibaba's major AI coding extension, highly popular in China. Based on Qwen models and integrated with Aliyun cloud services.",
      zh: "阿里巴巴旗下的主力 AI 编程插件，在国内拥有庞大用户群。基于通义千问大模型构建，深度整合了阿里云服务生态。"
    },
    freeTier: {
      models: {
        en: "Qwen-Coder-Qoder (custom RL-optimized), Qwen3 series, DeepSeek-v3, DeepSeek-r1",
        zh: "Qwen-Coder-Qoder (自研强化学习优化模型), Qwen3 系列, DeepSeek-v3, DeepSeek-r1"
      },
      limits: {
        en: "Free Individual Edition: Unlimited basic code completions and general Q&A.",
        zh: "免费个人版：无限制的基础代码补全和常规 AI 问答对话。"
      }
    },
    paidTier: {
      price: {
        en: "Free (Solo) | ~$32/user/mo (Enterprise Edition)",
        zh: "免费 (个人) | 约 $32/用户/月 (企业专属版)"
      },
      models: {
        en: "Qwen3-Coder, Qwen-Coder-Qoder, Qwen3-thinking, qwen2.5-max, multi-model (DeepSeek, Kimi, MiniMax, GLM)",
        zh: "Qwen3-Coder, Qwen-Coder-Qoder, Qwen3-thinking, qwen2.5-max, 多模型 (DeepSeek, Kimi, MiniMax, GLM)"
      },
      limits: {
        en: "Enterprise plan adds proprietary knowledge base retrieval, custom model fine-tuning, and dedicated inference pipelines.",
        zh: "企业专属版增加了企业私有知识库检索、专属模型微调以及专用计算推理通道。"
      }
    },
    registration: {
      process: {
        en: "Log in with Alibaba Cloud or Taobao credentials.",
        zh: "直接使用阿里云账号、淘宝账号授权登录。"
      },
      requirements: {
        en: "Real-name verification might be required in the Chinese portal.",
        zh: "中文官网使用需完成阿里云账号实名认证。"
      }
    },
    promotions: {
      trials: {
        en: "Individual version is permanently free. Enterprise trials are available upon application.",
        zh: "个人版永久免费。企业版提供免费试用申请通道。"
      }
    },
    extraInfo: {
      en: "Features outstanding Chinese language comprehension and excels at generating local cloud deployment files.",
      zh: "具备极佳的中文自然语言理解能力，针对国内开发环境和阿里云部署脚本的编写非常高效。"
    }
  },
  {
    id: "replit-agent",
    name: "Replit Agent",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://replit.com",
    github: "",
    installCmd: "",
    desc: {
      en: "Replit's powerful cloud-based autonomous agent, capable of building full-stack web applications from scratch from natural language.",
      zh: "Replit 推出的云端自主 AI 代理。用户只需输入自然语言描述，它即可从零开始构建并部署完整的全栈 Web 应用。"
    },
    freeTier: {
      models: {
        en: "Replit internal models (limited daily credits)",
        zh: "Replit 内部模型 (每日限量积分)"
      },
      limits: {
        en: "Starter (Free) plan offers highly limited daily Agent sessions and 1 active sandbox.",
        zh: "免费计划提供非常有限的每日代理额度以及 1 个免费的应用运行沙盒。"
      }
    },
    paidTier: {
      price: {
        en: "$20–$25/mo (Core) | $100/mo (Pro)",
        zh: "$20–$25/月 (Core) | $100/月 (Pro 版)"
      },
      models: {
        en: "Multi-model routing: Claude (Anthropic), Gemini (Google), GPT (OpenAI), Llama, Grok, Mistral (via OpenRouter)",
        zh: "多模型智能路由：Claude (Anthropic), Gemini (Google), GPT (OpenAI), Llama, Grok, Mistral (经 OpenRouter)"
      },
      limits: {
        en: "Core plan includes $20/mo credit pool. Billed dynamically per session based on task effort.",
        zh: "Core 计划包含每月 20~25 美元等值积分。运行 Agent 时按任务复杂度动态消耗积分配额。"
      }
    },
    registration: {
      process: {
        en: "Sign up via Google, GitHub, or Email on replit.com.",
        zh: "在 replit.com 官网通过 Google、GitHub 账号或邮箱完成注册。"
      },
      requirements: {
        en: "Credit card required to unlock pay-as-you-go credit additions.",
        zh: "解除积分配额上限并开启按需增购功能需要绑定信用卡。"
      }
    },
    promotions: {
      trials: {
        en: "Core membership offers starter credits for first-time signups.",
        zh: "订阅 Core 会员首月会赠送体验积分奖励。"
      }
    },
    extraInfo: {
      en: "Features integrated deployment directly to Replit sandboxes. Heavy hosting activity consumes credits from the same pool.",
      zh: "最大优势是构建完成直接一键云端上线。但应用托管、数据库和 AI Agent 会共享相同的月度积分池。"
    }
  },
  {
    id: "tabnine",
    name: "Tabnine",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: false,
    status: "active",
    website: "https://www.tabnine.com",
    github: "",
    installCmd: "VS Code Marketplace -> Search: 'Tabnine'",
    desc: {
      en: "One of the earliest AI coding assistants, focused on strict data privacy, enterprise air-gapped deployments, and custom LLM connections.",
      zh: "AI 编程助手领域的先驱之一。专注于高度的代码数据隐私保护、企业私有专网部署（Air-gapped）以及支持自带模型连接。"
    },
    freeTier: {
      models: {
        en: "None (14-day free trial available)",
        zh: "无免费版 (提供 14 天免费试用)"
      },
      limits: {
        en: "Basic Plan: Free forever. Short inline autocompletes only. No chat assistant.",
        zh: "基础版：永久免费。仅提供基础的代码单行自动补全，不包含 Chat 侧边栏对话。"
      }
    },
    paidTier: {
      price: {
        en: "$39/user/mo (Code Assistant) | $59/user/mo (Agentic Platform)",
        zh: "$39/用户/月 (代码助手) | $59/用户/月 (Agent 平台)"
      },
      models: {
        en: "Tabnine Protected, Claude Opus 4.6, Claude Sonnet 4.6, GPT-5 series, Gemini 3 Pro, Gemini 2.5 Pro/Flash, Qwen3-Coder, Devstral, Command R+",
        zh: "Tabnine 自研保护版, Claude Opus 4.6, Claude Sonnet 4.6, GPT-5 系列, Gemini 3 Pro, Gemini 2.5 Pro/Flash, Qwen3-Coder, Devstral, Command R+"
      },
      limits: {
        en: "Pro/Dev: Unlimited chat & completions. Agentic: Adds autonomous multi-step code refactoring agents.",
        zh: "Pro/Dev：无限次补全和对话。Agentic版：新增能自主执行多步骤重构任务的 AI 智能体。"
      }
    },
    registration: {
      process: {
        en: "Create an account on tabnine.com or register via IDE plugin.",
        zh: "在 tabnine.com 注册账号或直接在 IDE 插件中进行登录。"
      },
      requirements: {
        en: "None for Basic. Email and payment card for Pro/Enterprise.",
        zh: "使用基础版无要求。订阅 Pro 以上需提供邮箱和绑定支付卡。"
      }
    },
    promotions: {
      trials: {
        en: "Offers a 90-day free Pro trial for verified individual developers.",
        zh: "面向个人开发者提供最长达 90 天的免费 Pro 版试用优惠。"
      }
    },
    extraInfo: {
      en: "Guarantees zero IP contamination as Tabnine's proprietary models are trained exclusively on permissive open-source code.",
      zh: "承诺 100% 无知识产权污染，其自研模型仅采用开源受许可代码训练。"
    }
  },
  {
    id: "pearai",
    name: "PearAI",
    category: "ide",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://trypear.dev/",
    github: "https://github.com/trypear/pearai-app",
    installCmd: "",
    desc: {
      en: "An open-source AI-first code editor fork of VS Code backed by Y Combinator, supporting BYOK or a single unified credit subscription.",
      zh: "由 Y Combinator 孵化支持的开源 AI 原生代码编辑器（基于 VS Code 分支）。支持自带 Key (BYOK) 或通过统一订阅使用。"
    },
    freeTier: {
      models: {
        en: "BYOK + Claude Haiku 4.5 (limited free access)",
        zh: "BYOK + Claude Haiku 4.5 (限量免费使用)"
      },
      limits: {
        en: "Free Open-Source: Unlimited local usage. Cloud models are billed directly by your own API key providers.",
        zh: "开源免费版：本地运行无门槛。使用云端大模型由您自行绑定的 API Key 提供商计费。"
      }
    },
    paidTier: {
      price: {
        en: "$15/mo (PearAI Server Subscription)",
        zh: "$15/月 (PearAI 托管服务器订阅)"
      },
      models: {
        en: "Claude Sonnet 4.6, GPT-5.5, Gemini 2.5 Pro (via PearAI Router)",
        zh: "Claude Sonnet 4.6, GPT-5.5, Gemini 2.5 Pro (via PearAI Router)"
      },
      limits: {
        en: "Managed Subscription: Credit-based. Runs premium models without separate accounts. Top-up credits do not expire.",
        zh: "托管订阅：基于积分扣减。免除配置多平台 Key 的烦恼。剩余充值积分永久有效、不重置。"
      }
    },
    registration: {
      process: {
        en: "No account required for BYOK. Sign up on trypear.dev for server subscription.",
        zh: "使用 BYOK 模式无需注册。订阅托管服务器服务需要在 trypear.dev 注册账号。"
      },
      requirements: {
        en: "API keys for BYOK mode. Email and credit card for server subscription.",
        zh: "BYOK 模式需自行准备 Key。服务器订阅需邮箱和信用卡。"
      }
    },
    promotions: {
      trials: {
        en: "Open-source editor is permanently free to use.",
        zh: "编辑器内核完全开源，永久免费供开发者本地使用。"
      }
    },
    extraInfo: {
      en: "Emphasizes strict zero-data retention policies. Codebase indexing is processed completely locally.",
      zh: "着重宣传零数据保留隐私保护政策，所有的项目代码库索引生成均在本地端完成。"
    }
  },
  {
    id: "openhands",
    name: "OpenHands",
    category: "cli",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://openhands.dev/",
    github: "https://github.com/All-Hands-AI/OpenHands",
    installCmd: "docker run -it -v /var/run/docker.sock:/var/run/docker.sock -p 3000:3000 ghcr.io/all-hands-ai/openhands",
    desc: {
      en: "An open-source autonomous agentic platform (formerly OpenDevin) capable of performing multi-step engineering tasks in sandbox Docker containers.",
      zh: "开源的自主 AI 智能体开发平台（前身为 OpenDevin）。可以在沙盒化的 Docker 容器中自主执行多步骤的代码工程与维护任务。"
    },
    freeTier: {
      models: {
        en: "BYOK (Claude Opus 4.7, GPT-5.5, DeepSeek V4 Pro, Gemini 3.1 Pro)",
        zh: "BYOK (Claude Opus 4.7, GPT-5.5, DeepSeek V4 Pro, Gemini 3.1 Pro)"
      },
      limits: {
        en: "100% free open-source software. Billed directly by your connected LLM API key providers.",
        zh: "开源程序完全免费。模型消耗费用完全取决于您绑定的第三方 API Key 服务商。"
      }
    },
    paidTier: {
      price: {
        en: "None (Free Software) | Custom (Enterprise)",
        zh: "无 (免费软件) | 定制价格 (企业版)"
      },
      models: {
        en: "Any API-compatible model. Recommended local: Qwen3.6-35B-A3B",
        zh: "任何兼容 API 的模型。推荐本地模型：Qwen3.6-35B-A3B"
      },
      limits: {
        en: "Enterprise version adds Kubernetes cluster deployment, centralized RBAC access control, and dedicated support.",
        zh: "企业版增加了 Kubernetes 容器集群部署、集中化的 RBAC 权限控制及专属技术支持。"
      }
    },
    registration: {
      process: {
        en: "No registration required. Run locally via Docker command.",
        zh: "无需注册。直接在本地运行 Docker 启动指令即可。"
      },
      requirements: {
        en: "Local Docker environment and LLM API keys.",
        zh: "本地电脑需安装 Docker 环境并配置模型 API Key。"
      }
    },
    promotions: {
      trials: {
        en: "MIT licensed, permanently free software.",
        zh: "基于 MIT 协议开源，对个人用户永久免费。"
      }
    },
    extraInfo: {
      en: "Executes terminal commands and edits files within a secure container, ensuring no dangerous scripts touch your main host.",
      zh: "在安全的容器沙盒中运行终端命令和编辑文件，有效隔绝危险的 AI 脚本污染和损坏本地主机系统。"
    }
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    category: "ide",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://antigravity.google",
    github: "",
    installCmd: "",
    desc: {
      en: "Google's Agent-first cloud IDE announced at I/O 2026. Powered by Gemini models with an Agent Manager for orchestrating multi-agent workflows, Antigravity CLI, and SDK.",
      zh: "Google 在 I/O 2026 发布的 Agent 优先云端 IDE。搭载 Gemini 模型，内置 Agent Manager 多智能体编排中心、Antigravity CLI 和 SDK。"
    },
    freeTier: {
      models: {
        en: "Gemini 2.5 Flash",
        zh: "Gemini 2.5 Flash"
      },
      limits: {
        en: "Free tier with Google account login. Limited daily requests and basic agent capabilities.",
        zh: "使用 Google 账号登录即可免费使用。每日请求次数有限制，提供基础 Agent 功能。"
      }
    },
    paidTier: {
      price: {
        en: "$19.99/mo (Google One AI Premium)",
        zh: "$19.99/月 (Google One AI Premium)"
      },
      models: {
        en: "Gemini 2.5 Pro, Gemini 2.5 Flash (high-speed), Gemini 2.5 Flash Lite",
        zh: "Gemini 2.5 Pro, Gemini 2.5 Flash (高速), Gemini 2.5 Flash Lite"
      },
      limits: {
        en: "Bundled with Google One AI Premium subscription. Unlimited agent executions and full Agent Manager capabilities.",
        zh: "与 Google One AI Premium 订阅绑定。无限 Agent 执行次数，完整 Agent Manager 功能。"
      }
    },
    registration: {
      process: {
        en: "Sign up with a Google account.",
        zh: "使用 Google 账号登录注册。"
      },
      requirements: {
        en: "Google account required. AI Premium subscription for full access.",
        zh: "需要 Google 账号。完整功能需 AI Premium 订阅。"
      }
    },
    promotions: {
      trials: {
        en: "Free tier available. Google One AI Premium often includes a 1-month free trial.",
        zh: "有免费版可用。Google One AI Premium 通常提供 1 个月免费试用。"
      }
    },
    extraInfo: {
      en: "Integrates tightly with Google Cloud, Firebase, and Google's Gemini model ecosystem. Features an Agent Manager for multi-agent orchestration.",
      zh: "与 Google Cloud、Firebase 和 Google Gemini 模型生态紧密集成。特色功能是 Agent Manager 多智能体编排系统。"
    }
  },
  {
    id: "augment-code",
    name: "Augment Code",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: false,
    status: "active",
    website: "https://augmentcode.com",
    github: "",
    installCmd: "",
    desc: {
      en: "Enterprise-grade AI coding assistant with a proprietary 'Cosmos' engine and 'Context Engine' for full-repo codebase understanding. Supports VS Code, JetBrains, and CLI.",
      zh: "企业级 AI 编程助手，拥有自研 'Cosmos' 引擎和 'Context Engine' 全仓库代码上下文感知。支持 VS Code、JetBrains 和 CLI。"
    },
    freeTier: {
      models: {
        en: "N/A",
        zh: "无免费版"
      },
      limits: {
        en: "No free tier available. Paid plans start at $20/mo.",
        zh: "无免费版。付费计划 $20/月起。"
      }
    },
    paidTier: {
      price: {
        en: "$20/mo (Indie) | $60/mo (Standard) | $200/mo (Max)",
        zh: "$20/月 (Indie) | $60/月 (Standard) | $200/月 (Max)"
      },
      models: {
        en: "Cosmos (proprietary engine, undisclosed underlying models)",
        zh: "Cosmos（自研引擎，底层模型未公开）"
      },
      limits: {
        en: "Credit-based: Indie 40K credits, Standard 130K credits, Max 450K credits per month. Credits used for agent tasks and code review.",
        zh: "积分制：Indie 4万积分, Standard 13万积分, Max 45万积分/月。积分用于 Agent 任务和代码审查。"
      }
    },
    registration: {
      process: {
        en: "Install via VS Code / JetBrains marketplace or CLI.",
        zh: "通过 VS Code / JetBrains 插件市场或 CLI 安装。"
      },
      requirements: {
        en: "Credit card required for all plans.",
        zh: "所有计划均需信用卡。"
      }
    },
    promotions: {
      trials: {
        en: "No public free trial information available.",
        zh: "暂无公开的免费试用信息。"
      }
    },
    extraInfo: {
      en: "SOC 2 Type II certified. Features Context Engine for deep codebase analysis across massive monorepos. Supports MCP and native tool integrations.",
      zh: "通过 SOC 2 Type II 认证。特色功能是 Context Engine，支持对大型 Monorepo 进行深度代码分析。支持 MCP 和原生工具集成。"
    }
  },
  {
    id: "devin",
    name: "Devin",
    category: "cli",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://devin.ai",
    github: "",
    installCmd: "",
    desc: {
      en: "The world's first fully autonomous AI software engineer by Cognition. Runs as a cloud-based SWE agent that can plan, code, test, and ship entire features autonomously in parallel.",
      zh: "由 Cognition 开发的全球首个全自主 AI 软件工程师。作为云端 SWE Agent 运行，可以自主地进行计划、编码、测试和部署，且支持并行处理多个任务。"
    },
    freeTier: {
      models: {
        en: "Devin (proprietary model, limited usage)",
        zh: "Devin（自研模型，限量使用）"
      },
      limits: {
        en: "Limited Devin usage, Devin Review, DeepWiki access.",
        zh: "有限的 Devin 使用量、Devin Review 代码审查、DeepWiki 文档访问。"
      }
    },
    paidTier: {
      price: {
        en: "$20/mo (Pro) | $200/mo (Max) | $80/mo (Teams) | Custom (Enterprise)",
        zh: "$20/月 (Pro) | $200/月 (Max) | $80/月 (Teams) | 自定义 (Enterprise)"
      },
      models: {
        en: "Devin (proprietary model, undisclosed architecture)",
        zh: "Devin（自研模型，架构未公开）"
      },
      limits: {
        en: "Pro: Devin usage quota + Windsurf IDE usage quota + pay-as-you-go overflow. Teams: Unlimited team members + shared collaboration.",
        zh: "Pro：Devin 使用配额 + Windsurf IDE 使用配额 + 超出按量付费。Teams：无限团队成员 + 协作共享。"
      }
    },
    registration: {
      process: {
        en: "Sign up at app.devin.ai with email.",
        zh: "在 app.devin.ai 通过邮箱注册。"
      },
      requirements: {
        en: "No credit card required for Free. Paid plans require payment method.",
        zh: "免费版无需信用卡。付费版需要支付方式。"
      }
    },
    promotions: {
      trials: {
        en: "Free tier available for all users.",
        zh: "所有用户均可使用免费版。"
      }
    },
    extraInfo: {
      en: "Includes Windsurf IDE access with Pro+ plans. Supports Slack, Linear, MCP integrations. Enterprise plan includes SAML/OIDC SSO and dedicated support.",
      zh: "Pro+ 计划包含 Windsurf IDE 使用权。支持 Slack、Linear、MCP 集成。企业版包含 SAML/OIDC SSO 和专属客服支持。"
    }
  },
  {
    id: "zed",
    name: "Zed",
    category: "ide",
    isOpenSource: true,
    hasFreeTier: true,
    status: "active",
    website: "https://zed.dev",
    github: "https://github.com/zed-industries/zed",
    installCmd: "",
    desc: {
      en: "An open-source, high-performance AI code editor built in Rust. Designed for agentic workflows with real-time multiplayer collaboration and native speed.",
      zh: "使用 Rust 构建的开源高性能 AI 代码编辑器。专为 Agent 工作流设计，支持实时多人协作，原生编译速度极快。"
    },
    freeTier: {
      models: {
        en: "Claude Sonnet 4.6 (via Zed AI), Zed models quota, BYOK (any provider)",
        zh: "Claude Sonnet 4.6 (通过 Zed AI), Zed 模型配额, BYOK（支持任意模型提供商）"
      },
      limits: {
        en: "Free tier with Zed AI included. Generous monthly AI usage quota. Bring your own API keys for unlimited use.",
        zh: "免费版包含 Zed AI。每月 AI 使用配额充裕。可自带 API Key 无限使用。"
      }
    },
    paidTier: {
      price: {
        en: "Free (Personal) | Custom (Business)",
        zh: "免费（个人版）| 自定义（商业版）"
      },
      models: {
        en: "Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, Gemini 2.5 Pro, DeepSeek, Llama, BYOK (any OpenAI-compatible)",
        zh: "Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, Gemini 2.5 Pro, DeepSeek, Llama, BYOK (任意 OpenAI 兼容)"
      },
      limits: {
        en: "Business: Priority support, admin controls, SSO, and enhanced AI quotas.",
        zh: "商业版：优先支持、管理控制、SSO 和增强的 AI 配额。"
      }
    },
    registration: {
      process: {
        en: "Download from zed.dev. Sign up optional for AI features.",
        zh: "从 zed.dev 下载。AI 功能需可选注册。"
      },
      requirements: {
        en: "No account required for basic editing. Zed account needed for AI features.",
        zh: "基本编辑无需账号。AI 功能需要 Zed 账号。"
      }
    },
    promotions: {
      trials: {
        en: "Full editor is free and open source. AI features included at no cost for personal use.",
        zh: "编辑器完全免费开源。个人使用 AI 功能免费包含。"
      }
    },
    extraInfo: {
      en: "Built from scratch in Rust for maximum performance. Features real-time multiplayer collaboration, agentic editing, and compatibility with any model or agent provider.",
      zh: "使用 Rust 从零构建以实现极致性能。特色功能：实时多人协作、Agent 编辑、兼容任意模型或 Agent 提供商。"
    }
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    category: "web",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://bolt.new",
    github: "",
    installCmd: "",
    desc: {
      en: "An AI-powered full-stack web application builder by StackBlitz. Build, edit, and deploy websites and apps directly in the browser with natural language prompts.",
      zh: "由 StackBlitz 开发的 AI 驱动全栈 Web 应用构建器。通过自然语言提示在浏览器中直接构建、编辑和部署网站与应用。"
    },
    freeTier: {
      models: {
        en: "Claude Sonnet 4.6 (default routing)",
        zh: "Claude Sonnet 4.6（默认路由）"
      },
      limits: {
        en: "300K tokens daily limit, 1M tokens per month. Public and private projects. 10MB file upload. Website hosting included.",
        zh: "每日 30 万 token 限制，每月 100 万 token。支持公开和私有项目。10MB 文件上传限制。包含网站托管。"
      }
    },
    paidTier: {
      price: {
        en: "$25/mo (Pro) | $30/mo per member (Teams) | Custom (Enterprise)",
        zh: "$25/月 (Pro) | $30/月/人 (Teams) | 自定义 (Enterprise)"
      },
      models: {
        en: "Claude Sonnet 4.6, Claude Opus 4.7, GPT-5.5, Gemini 2.5 Pro (smart routing)",
        zh: "Claude Sonnet 4.6, Claude Opus 4.7, GPT-5.5, Gemini 2.5 Pro（智能路由）"
      },
      limits: {
        en: "Pro: 10M+ tokens/mo, no daily limit. Custom domain, SEO boosting, unlimited databases. Unused tokens roll over.",
        zh: "Pro：每月 1000 万+ token，无每日限制。自定义域名、SEO 优化、无限数据库。未使用 token 可滚存。"
      }
    },
    registration: {
      process: {
        en: "Sign up via Google, GitHub, or email at bolt.new.",
        zh: "在 bolt.new 通过 Google、GitHub 或邮箱注册。"
      },
      requirements: {
        en: "No credit card required for Free. Paid plans require payment method.",
        zh: "免费版无需信用卡。付费版需要支付方式。"
      }
    },
    promotions: {
      trials: {
        en: "Free tier available with generous token limits for getting started.",
        zh: "提供免费版，配有充裕的 token 额度供上手使用。"
      }
    },
    extraInfo: {
      en: "Runs entirely in the browser using WebContainers technology. Supports full-stack apps with databases, backend APIs, and instant deployment.",
      zh: "使用 WebContainers 技术完全在浏览器中运行。支持全栈应用，包含数据库、后端 API 和即时部署。"
    }
  },
  {
    id: "amazon-q",
    name: "Amazon Q Developer",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://aws.amazon.com/q/developer/",
    github: "",
    installCmd: "",
    desc: {
      en: "AWS's generative AI coding assistant. Provides code suggestions, chat, security scanning, and agent capabilities across VS Code, JetBrains, CLI, and AWS Console.",
      zh: "AWS 的生成式 AI 编程助手。在 VS Code、JetBrains、CLI 和 AWS 控制台中提供代码建议、对话、安全扫描和 Agent 功能。"
    },
    freeTier: {
      models: {
        en: "Amazon Q (proprietary, based on multiple foundation models)",
        zh: "Amazon Q（自研，基于多个基础模型）"
      },
      limits: {
        en: "Individual tier: Unlimited code suggestions, limited chat and agent interactions per month.",
        zh: "个人版：无限代码建议，每月有限的对话和 Agent 交互次数。"
      }
    },
    paidTier: {
      price: {
        en: "$19/mo per user (Pro) | Custom (Enterprise)",
        zh: "$19/月/用户 (Pro) | 自定义 (Enterprise)"
      },
      models: {
        en: "Amazon Q (proprietary multi-model routing)",
        zh: "Amazon Q（自研多模型路由）"
      },
      limits: {
        en: "Pro: Increased limits on chat, agent, and code transformation. Enterprise: SSO, admin controls, custom policies.",
        zh: "Pro：增加对话、Agent 和代码转换的使用限制。Enterprise：SSO、管理控制、自定义策略。"
      }
    },
    registration: {
      process: {
        en: "Sign up with an AWS Builder ID (free) or use existing AWS account.",
        zh: "使用 AWS Builder ID（免费）注册或使用现有 AWS 账号。"
      },
      requirements: {
        en: "AWS Builder ID required (free to create). Pro requires AWS account with billing.",
        zh: "需要 AWS Builder ID（免费创建）。Pro 版需要有账单功能的 AWS 账号。"
      }
    },
    promotions: {
      trials: {
        en: "Free Individual tier available. Pro tier sometimes includes trial periods.",
        zh: "提供免费个人版。Pro 版有时包含试用期。"
      }
    },
    extraInfo: {
      en: "Deep integration with AWS services. Features '/transform' for Java upgrades, security scanning, and infrastructure-as-code generation.",
      zh: "与 AWS 服务深度集成。特色功能包括 '/transform' Java 升级、安全扫描和基础设施即代码生成。"
    }
  },
  {
    id: "jetbrains-ai",
    name: "JetBrains AI Assistant",
    category: "extension",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://www.jetbrains.com/ai/",
    github: "",
    installCmd: "",
    desc: {
      en: "Built-in AI assistant for all JetBrains IDEs (IntelliJ IDEA, PyCharm, WebStorm, etc.). Provides AI chat, code completion, refactoring suggestions, and Junie coding agent.",
      zh: "所有 JetBrains IDE（IntelliJ IDEA、PyCharm、WebStorm 等）的内置 AI 助手。提供 AI 对话、代码补全、重构建议和 Junie 编程 Agent。"
    },
    freeTier: {
      models: {
        en: "JetBrains AI (multi-model: Claude Sonnet 4.6, GPT-4.1, Gemini 2.5 Pro, Junie agent)",
        zh: "JetBrains AI（多模型：Claude Sonnet 4.6, GPT-4.1, Gemini 2.5 Pro, Junie Agent）"
      },
      limits: {
        en: "AI Free tier: Limited daily AI requests. Included with all JetBrains IDE downloads.",
        zh: "AI 免费版：每日 AI 请求次数有限。随所有 JetBrains IDE 下载附带。"
      }
    },
    paidTier: {
      price: {
        en: "Included with JetBrains All Products Pack ($28.90/mo) | AI Pro Add-on available",
        zh: "包含在 JetBrains All Products Pack ($28.90/月) 中 | 可购买 AI Pro 附加包"
      },
      models: {
        en: "Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, GPT-4.1, Gemini 2.5 Pro, Junie (coding agent)",
        zh: "Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, GPT-4.1, Gemini 2.5 Pro, Junie（编程 Agent）"
      },
      limits: {
        en: "Full AI Pro: Unlimited AI chat and code completion. Full Junie agent capabilities. Multiple model selection.",
        zh: "AI Pro 全量版：无限 AI 对话和代码补全。完整 Junie Agent 功能。支持多模型选择。"
      }
    },
    registration: {
      process: {
        en: "Download any JetBrains IDE. AI features available after JetBrains account login.",
        zh: "下载任意 JetBrains IDE。登录 JetBrains 账号后可使用 AI 功能。"
      },
      requirements: {
        en: "JetBrains account required. AI Pro requires active IDE subscription or separate AI add-on.",
        zh: "需要 JetBrains 账号。AI Pro 需要有效 IDE 订阅或单独购买 AI 附加包。"
      }
    },
    promotions: {
      trials: {
        en: "AI Free tier available for all users. JetBrains IDE Community editions are free.",
        zh: "所有用户均可使用 AI 免费版。JetBrains IDE 社区版免费。"
      }
    },
    extraInfo: {
      en: "Leverages JetBrains' deep code analysis capabilities. Junie agent can run tests, fix errors, and perform multi-step coding tasks autonomously.",
      zh: "利用 JetBrains 深度代码分析能力。Junie Agent 可以自主运行测试、修复错误和执行多步骤编码任务。"
    }
  },
  {
    id: "amp",
    name: "Amp (Sourcegraph)",
    category: "cli",
    isOpenSource: false,
    hasFreeTier: true,
    status: "active",
    website: "https://ampcode.com",
    github: "",
    installCmd: "npm install -g @anthropic/amp",
    desc: {
      en: "Sourcegraph's agentic coding tool (formerly Cody Agent). An AI coding agent that works in the terminal or as a VS Code extension with deep codebase understanding.",
      zh: "Sourcegraph 的 Agent 编程工具（前身为 Cody Agent）。一个可在终端或 VS Code 扩展中使用的 AI 编程 Agent，具备深度代码库理解能力。"
    },
    freeTier: {
      models: {
        en: "Claude Sonnet 4.6 (via Sourcegraph proxy)",
        zh: "Claude Sonnet 4.6（通过 Sourcegraph 代理）"
      },
      limits: {
        en: "Free tier with generous usage limits. Automatic codebase context retrieval.",
        zh: "免费版提供充裕的使用额度。自动检索代码库上下文。"
      }
    },
    paidTier: {
      price: {
        en: "$19/mo (Pro) | Custom (Enterprise)",
        zh: "$19/月 (Pro) | 自定义 (Enterprise)"
      },
      models: {
        en: "Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, Gemini 2.5 Pro, BYOK",
        zh: "Claude Opus 4.7, Claude Sonnet 4.6, GPT-5.5, Gemini 2.5 Pro, BYOK"
      },
      limits: {
        en: "Pro: Increased usage limits and priority access. Enterprise: Unlimited with self-hosted Sourcegraph.",
        zh: "Pro：增加使用限制和优先访问。Enterprise：自托管 Sourcegraph 无限使用。"
      }
    },
    registration: {
      process: {
        en: "Install via npm or VS Code marketplace. Sign in with Sourcegraph account.",
        zh: "通过 npm 或 VS Code 市场安装。使用 Sourcegraph 账号登录。"
      },
      requirements: {
        en: "Sourcegraph account required (free to create).",
        zh: "需要 Sourcegraph 账号（免费创建）。"
      }
    },
    promotions: {
      trials: {
        en: "Free tier available for individual developers.",
        zh: "为个人开发者提供免费版。"
      }
    },
    extraInfo: {
      en: "Successor to Sourcegraph Cody's agent mode. Deep code graph understanding from Sourcegraph's search infrastructure. Works alongside Cody for complementary capabilities.",
      zh: "Sourcegraph Cody Agent 模式的继任者。依托 Sourcegraph 搜索基础设施实现深度代码图谱理解。可与 Cody 配合使用实现功能互补。"
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
    tabWeb: "Web Builders",
    filterFree: "Has Free Tier",
    filterOs: "Open Source",
    btnDetails: "Details",
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
    cardFreeTitle: "Free Tier Available Models",
    cardPaidTitle: "Paid Tier Supported Models",
    cardFreeModels: "Free Models",
    cardPaidModels: "Paid Models",
    cardPrice: "Price",
    cardNoFree: "Paid Only",
    cardBYOK: "BYOK (Bring Your Own Key)",
    cardFreeSoftware: "Free Software",
    cardDiscontinued: "Discontinued / Enterprise Only",
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
    modalSourceBtn: "Source Code",
    footerText: "AI Coding Tools Portal &mdash; Comprehensive comparison of developer AI assistants.",
    footerNote: "Data updated May 2026. Pricing and model availability may change."
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
    tabWeb: "Web 构建器",
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
    cardFreeTitle: "免费可用具体模型",
    cardPaidTitle: "付费支持具体模型",
    cardFreeModels: "免费可用模型",
    cardPaidModels: "付费可用模型",
    cardPrice: "费用",
    cardNoFree: "仅限付费",
    cardBYOK: "自带 Key (BYOK)",
    cardFreeSoftware: "完全免费开源",
    cardDiscontinued: "已停止个人服务 / 仅限企业级",
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
    modalSourceBtn: "查看开源源码",
    footerText: "AI 编程工具门户 &mdash; 全面对比开发者 AI 编程助手。",
    footerNote: "数据更新于 2026 年 5 月。价格和模型可用性可能随时变化。"
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
  document.getElementById("tab-web").textContent = t.tabWeb;
  
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
  if (modelsStr.startsWith("BYOK") || modelsStr.startsWith("自带 Key")) {
    const innerPart = modelsStr.substring(modelsStr.indexOf("("));
    return `<span class="model-tag">${t.cardBYOK}</span>` + (innerPart ? ` <span class="model-tag empty-tag" style="background:rgba(255,255,255,0.02)">${innerPart}</span>` : "");
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
  
  // Dynamically update total tracked stats based on the data length
  document.querySelector("#stat-total-tools .stat-number").textContent = toolsData.length;

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
    { value: "Roo Code", label: "Roo Code", type: "tool", icon: "layers" },
    { value: "Sourcegraph Cody", label: "Sourcegraph Cody", type: "tool", icon: "layers" },
    { value: "Supermaven", label: "Supermaven", type: "tool", icon: "layers" },
    { value: "Trae", label: "Trae (ByteDance Trae)", type: "tool", icon: "layout" },
    { value: "Tongyi Lingma", label: "Tongyi Lingma (通义灵码)", type: "tool", icon: "layers" },
    { value: "Replit Agent", label: "Replit Agent", type: "tool", icon: "layout" },
    { value: "Tabnine", label: "Tabnine", type: "tool", icon: "layers" },
    { value: "PearAI", label: "PearAI", type: "tool", icon: "layout" },
    { value: "OpenHands", label: "OpenHands", type: "tool", icon: "terminal" },
    { value: "Google Antigravity", label: "Google Antigravity", type: "tool", icon: "layout" },
    { value: "Augment Code", label: "Augment Code", type: "tool", icon: "layers" },
    { value: "Devin", label: "Devin (Cognition)", type: "tool", icon: "terminal" },
    { value: "Zed", label: "Zed", type: "tool", icon: "layout" },
    { value: "Bolt.new", label: "Bolt.new (StackBlitz)", type: "tool", icon: "globe" },
    { value: "Amazon Q Developer", label: "Amazon Q Developer", type: "tool", icon: "layers" },
    { value: "JetBrains AI Assistant", label: "JetBrains AI Assistant", type: "tool", icon: "layers" },
    { value: "Amp (Sourcegraph)", label: "Amp (Sourcegraph)", type: "tool", icon: "terminal" }
  ],
  models: [
    { value: "Claude Sonnet 4.6", label: "Claude Sonnet 4.6", type: "model", icon: "cpu" },
    { value: "Claude Opus 4.7", label: "Claude Opus 4.7", type: "model", icon: "cpu" },
    { value: "Claude Opus 4.6", label: "Claude Opus 4.6", type: "model", icon: "cpu" },
    { value: "Claude Haiku 4.5", label: "Claude Haiku 4.5", type: "model", icon: "cpu" },
    { value: "GPT-5.5", label: "GPT-5.5", type: "model", icon: "cpu" },
    { value: "GPT-5.4", label: "GPT-5.4", type: "model", icon: "cpu" },
    { value: "GPT-4o", label: "GPT-4o", type: "model", icon: "cpu" },
    { value: "Grok 4.3", label: "Grok 4.3 (xAI)", type: "model", icon: "cpu" },
    { value: "DeepSeek", label: "DeepSeek (R1/V3/V4)", type: "model", icon: "cpu" },
    { value: "Gemini", label: "Gemini 3 Pro / 2.5 Pro", type: "model", icon: "cpu" },
    { value: "SWE-1.6", label: "SWE-1.6 (Windsurf)", type: "model", icon: "cpu" },
    { value: "Qwen3-Coder", label: "Qwen3-Coder", type: "model", icon: "cpu" },
    { value: "Doubao", label: "Doubao-Code (Trae)", type: "model", icon: "cpu" },
    { value: "Ollama", label: "Ollama (Local LLMs)", type: "model", icon: "cpu" },
    { value: "Devstral", label: "Devstral (Mistral)", type: "model", icon: "cpu" }
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
  { value: "Claude Sonnet 4.6", label: "Claude Sonnet 4.6", type: "model", icon: "cpu" },
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
