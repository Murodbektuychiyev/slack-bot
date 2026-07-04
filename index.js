require("dotenv").config();
const { App } = require("@slack/bolt");
const axios = require("axios"); 

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// Cat fact command
app.command("/uz-bot-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `🐱 *Cat Fact:* \n_${response.data.fact}_` });
  } catch (err) {
    await respond({ text: "❌ Failed to fetch a cat fact. Please try again later." });
  }
});

// Joke command
app.command("/uz-bot-joke", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({ text: `💬 *Joke:* \n>${response.data.setup}\n\n*${response.data.punchline}*` });
  } catch (err) {
    await respond({ text: "❌ Failed to fetch a joke. Please try again later." });
  }
});

// Ping command
app.command("/uz-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `🏓 *Pong!* \nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("⚡️ Slack bot is running smoothly!");
})();
