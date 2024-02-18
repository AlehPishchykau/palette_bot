require('dotenv').config();
const { Telegraf } = require('telegraf');
const { TELEGRAM_BOT_TOKEN, WEB_APP_URL, WEB_APP_NAME } = process.env;
const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

bot.command('start', async (ctx) => {
	const url = new URL(WEB_APP_URL)

	url.searchParams.append('userId', ctx.update.message.from.id)

	await ctx.setChatMenuButton(JSON.stringify({
		type: 'web_app',
		text: WEB_APP_NAME || 'Open Web App',
		web_app: { url: url.toString() }
	}));
})

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
