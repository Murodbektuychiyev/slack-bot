# ⚡️ uz-bot | High-Performance Slack Bot

An interactive, asynchronous Slack bot built for the **Hack Club** workspace as part of the **NASA Stardance Summer Program 2026**. This bot leverages the Slack Bolt framework, operates via secure Socket Mode, and integrates external REST APIs to handle custom slash commands dynamically.

---

## 🚀 Features & Commands

All commands are prefixed with `uz-bot-` to prevent collisions in a crowded workspace environment:

*   **`/uz-bot-ping`** – Measures the exact WebSocket connection latency between the Slack client and the server.
*   **`/uz-bot-catfact`** – Fetches real-time educational facts about felines from the open CatFact API.
*   **`/uz-bot-joke`** – Pulls random setup/punchline jokes using the Official Joke API to keep the workspace engaging.

---

## 🛠️ Architecture & Tech Stack

*   **Runtime Environment:** Node.js (v18+ LTS)
*   **Application Framework:** `@slack/bolt`
*   **Networking Mode:** Socket Mode (WebSockets over port 443 — no public URL/ngrok required)
*   **HTTP Client:** `axios` (For synchronous, external API requests)
*   **Secrets Management:** `dotenv` (Environment configurations are decoupled from codebase core)

---

## ⚙️ Configuration & Installation

### 1. Clone & Install Dependencies
First, pull down the repository locally and populate the system node modules:
```bash
git clone [https://github.com/Murodbektuychiyev/slack-bot.git](https://github.com/Murodbektuychiyev/slack-bot.git)
cd slack-bot
npm install
