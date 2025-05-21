const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
require('dotenv').config();
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, 'pong');
});

const Parser = require('rss-parser');
const parser = new Parser(); 
const rssUrl = 'https://www.coindesk.com/arc/outboundfeeds/rss/';

// Функция для загрузки новостей
async function fetchNews() {
    try {
        console.log(`📰 Попытка получить новости...`);

        const feed = await parser.parseURL(rssUrl);

        if (!feed.items || feed.items.length === 0) {
            console.log('❌ Ошибка: Новости не найдены.');
            return null;
        }

        console.log(`✅ Новости успешно получены.`);

        let newsMessage = `*📰 Последние новости CoinDesk:*\n\n`;

        feed.items.slice(0, 5).forEach((item, index) => {
            newsMessage += `${index + 1}. [${item.title}](${item.link})\n📅 ${item.pubDate}\n\n`;
        });
       return newsMessage;
    } catch (error) {
        console.error(`❌ Ошибка при получении новостей: ${error.message}`);
        return null;
    }
}

// Обработчик команды /news
bot.onText(/\/news/, async (msg) => {
    const chatId = msg.chat.id;
    console.log(`📩 Получено сообщение от пользователя: /news`);

    const newsMessage = await fetchNews();
    if (newsMessage) {
        bot.sendMessage(chatId, newsMessage, { parse_mode: "Markdown" });
    } else {
        bot.sendMessage(chatId, "❌ Ошибка: не удалось загрузить новости.");
    }
});
// Обработка команды /price
bot.onText(/\/price/, async (msg) => {
  const chatId = msg.chat.id;
  console.log("📥 Получено сообщение от пользователя: /price");

  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd'
    );

    const btc = response.data.bitcoin.usd;
    const eth = response.data.ethereum.usd;

    const priceMessage = `💰 *Current Prices:*\n\n` +
                         `• BTC: *$${btc}*\n` +
                         `• ETH: *$${eth}*`;

    bot.sendMessage(chatId, priceMessage, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("❌ Ошибка при получении цен:", error.message);
    bot.sendMessage(chatId, "⚠️ Не удалось загрузить цены.");
  }
});
bot.onText(/\/buy (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const symbol = match[1].toUpperCase();

  const allowed = ['BTC', 'ETH'];
  if (!allowed.includes(symbol)) {
    return bot.sendMessage(chatId, `❌ Unsupported asset: ${symbol}. Try BTC or ETH.`);
  }

  try {
  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin,ethereum',
        vs_currencies: 'usd'
      }
    });

    const price = symbol === 'BTC' ? response.data.bitcoin.usd : response.data.ethereum.usd;
    const buyMessage = `🛒 *Simulated Buy Order for ${symbol}*\nCurrent Price: $${price}\nOrder comple>

    bot.sendMessage(chatId, buyMessage, { parse_mode: "Markdown" });

  } catch (error) {
    console.error("Error fetching price:", error.message);
    bot.sendMessage(chatId, "❌ Failed to fetch price.");
  }
});


