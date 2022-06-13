const Router = require('koa-router');
const User = require('../models/User');

const router = new Router().prefix('/users');

/** @GET '/'
 * @description Получение всех пользователей
 */
router.get('/', async (ctx) => {
    const { _id } = ctx.params;
    const user = await User.findById(_id);
    if (user) {
        ctx.body = user;
    } else {
        ctx.throw(404);
    }
});

/** @GET '/:id'
 * @description Получение пользователя по id
 */
router.get('/:id', async (ctx) => {
    const { _id } = ctx.params;
    const user = await User.findById(_id);
    if (user) {
        ctx.body = user;
    } else {
        ctx.throw(404);
    }
});

module.exports = router.routes();