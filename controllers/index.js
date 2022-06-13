const Router = require('koa-router');

const auth = require('./auth');
const posts = require('./post');
const postLikes = require('./post-likes');
const postComments = require('./post-comments');
const users = require('./users');
const subscriptions = require('./subscriptions');

const router = new Router().prefix('/api');

router.use(auth, posts, postLikes, postComments, users, subscriptions);

module.exports = router;