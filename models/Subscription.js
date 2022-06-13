const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    // Подписчик
    subscriber: {type: Schema.Types.ObjectId, ref: 'users', required: true},
    // Пользователь, на которого подписан подписчик
    profile: {type: Schema.Types.ObjectId, ref: 'users', required: true},
    createdDate: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('subscriptions', subscriptionSchema);