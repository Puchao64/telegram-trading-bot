# Telegram Trading Bot 🛠️

Telegram bot for live crypto prices, crypto news feed, and simulated trading.  
👉 Try it in Telegram: [@SignalForgeBot](https://t.me/SignalForgeBot)

## ✨ Features

- `/ping` — check bot availability  
- `/price` — real-time BTC & ETH prices (via CoinGecko API)  
- `/news` — latest crypto news (via CoinDesk RSS)  
- `/buy BTC` or `/buy ETH` — simulate buy order at current price

## 🖼️ Preview

| Command   | Screenshot                        |
|-----------|-----------------------------------|
| `/price`  | ![price](./assets/price.png)      |
| `/news`   | ![news](./assets/news.png)        |
| `/buy BTC`| ![buy](./assets/buy%20BTC.png)    |

## 🔧 Stack

- Node.js  
- Telegram Bot API (`node-telegram-bot-api`)  
- CoinGecko API  
- CoinDesk RSS (`rss-parser`)  
- Axios  
- dotenv

## 🚀 Installation

```bash
git clone https://github.com/Puchao64/telegram-trading-bot.git
cd telegram-trading-bot
npm install
