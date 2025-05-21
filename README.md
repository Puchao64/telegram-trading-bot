# Telegram Trading Bot 🛠️  
Telegram bot for live crypto prices, crypto news feed, and simulated trading.  
👉 Try it in Telegram: [@SignalForgeBot](https://t.me/SignalForgeBot)

---

## ✨ Features  
- `/ping` — check bot availability  
- `/price` — real-time BTC & ETH prices (via CoinGecko API)  
- `/news` — latest crypto news (via CoinDesk RSS)  
- `/buy BTC` or `/buy ETH` — simulate buy order at current price  

---

## 🖼️ Preview  

| Command    | Screenshot |
|------------|------------|
| `/price`   | ![price](./assets/price.png) |
| `/news`    | ![news](./assets/news.png) |
| `/buy BTC` | ![buy](./assets/buy%20BTC.png) |

---

## 🔧 Stack  
- Node.js  
- Telegram Bot API (`node-telegram-bot-api`)  
- CoinGecko API  
- CoinDesk RSS (`rss-parser`)  
- Axios  
- dotenv  

---

## 🚀 Installation  

```bash
git clone https://github.com/Puchao64/telegram-trading-bot.git  
cd telegram-trading-bot  
npm install
```

---

## 🧪 Create .env file  

```bash
cp .env.example .env
```

Then open `.env` and add your bot token:  

```env
BOT_TOKEN=your_token_here
```

---

## ▶️ Run  

```bash
node bot.js
```

---

## 🗂️ Project Structure  

```
.
├── assets/         # Screenshots  
├── bot.js          # Main bot code  
├── .env.example    # Environment variable example  
└── README.md       # Project documentation  
```

---

## 👤 Author  

**Artur Puchinin**  
📍 Costa Adeje, Spain  
📧 puchininarturl@gmail.com  
🔗 [GitHub](https://github.com/Puchao64)  
🔗 [LinkedIn](https://www.linkedin.com/in/artur-puchinin)
