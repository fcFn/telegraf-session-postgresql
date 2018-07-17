const Telegraf = require('Telegraf')
	, PostgreSQLSession = require('./index.js')

const bot = new Telegraf('token')


const session = new PostgreSQLSession({
	user: 'postgres',
	host: 'localhost',
	database: 'name',
	password: '1234',
	port: 5432,
})

bot.use(session)

bot.on('message', ctx => {
	
	ctx.session.counter = ctx.session.counter ? ctx.session.counter : 0

	ctx.session.counter++

	ctx.reply(ctx.session.counter)
})


bot.startPolling()

// install telegraf