# PostgreSQL session middleware for Telegraf

User session stored in PostgreSQL for the framework [Telegraf](https://github.com/telegraf/telegraf).

## Installation

```js
$ npm install telegraf-session-postgresql
```

## Setup

you should create a table named sessions in your database.
```SQL
CREATE TABLE telegraf_session(id varchar, session varchar);
```

## Example

```js
const Telegraf              = require('telegraf')
    , PostgreSQLSession     = require('telegraf-session-postgresql')
    , bot = new Telegraf(process.env.BOT_TOKEN)

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
```

## API
The database connection configuration is described in The PostgreSQL API -- [PostgreSQL](https://node-postgres.com).

### Contacts 

my telegram: @JSusDev, channel https://t.me/Jsusdevs

if you have any questions and suggestions please email me in telegram if you find bugs I will be very grateful if you also let me know.

![logo](https://jsusdev.github.io/home-page/logo/logo_40.png?, "telegraf-session-postgresql by JSus")
