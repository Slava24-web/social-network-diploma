require('dotenv').config();

const Koa = require('koa');
const config = require('./lib/config');
const handlers = require('./handlers');
const mongooseConfig = require('./lib/mongoose-config');
const controllers = require('./controllers');

const app = new Koa();

/** Middleware */
handlers.forEach(h => app.use(h));

app.use(controllers.routes());
app.use(controllers.allowedMethods());
mongooseConfig();

app.listen(config.port, () => {
    console.log(`Server has been started on port ${config.port}...`);
})