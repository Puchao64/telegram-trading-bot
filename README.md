Telegram Trading Bot 🛠️

Telegram bot for live crypto prices, crypto news feed, and simulated trading.
👉 Try it in Telegram: @SignalForgeBot

✨ Features
	•	/ping — проверка отклика бота
	•	/price — текущие цены BTC и ETH (CoinGecko API)
	•	/news — последние крипто-новости с CoinDesk (RSS)
	•	/buy BTC или /buy ETH — симуляция покупки по текущей цене

🖼️ Preview

/price — см. assets/price.png
/news — см. assets/news.png
/buy BTC — см. assets/buy BTC.png

🔧 Stack

Node.js
Telegram Bot API (node-telegram-bot-api)
CoinGecko API
CoinDesk RSS (rss-parser)
Axios
dotenv

🚀 Installation

git clone https://github.com/Puchao64/telegram-trading-bot.git
cd telegram-trading-bot
npm install

Создай .env файл на основе примера:
cp .env.example .env

Добавь свой Telegram Bot Token в .env:
BOT_TOKEN=your_token_here

▶️ Run

node bot.js

📁 Project Structure

.
├── assets/          # Скриншоты
├── bot.js           # Основной код
├── .env.example     # Пример переменных окружения
└── README.md        # Документация проекта

👤 Author

Artur Puchinin
📍 Costa Adeje, Spain
📧 puchininarturl@gmail.com
GitHub: https://github.com/Puchao64
LinkedIn: https://www.linkedin.com/in/artur-puchinin
