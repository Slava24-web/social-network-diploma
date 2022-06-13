const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const privatePaths = require('mongoose-private-paths');

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, private: true},
    fullName: {type: String},
    age: {type: String},
    job: {type: String},
    birthday: {type: Date},
    country: {type: String},
    city: {type: String},
    interests: {type: String},
    phone: {type: String},
    contacts: [
        {
            site: {type: String},
            github: {type: String},
            vk: {type: String},
            youtube: {type: String},
        }
    ],
    createdDate: {type: Date, default: Date.now()},
})

userSchema.plugin(privatePaths);

module.exports = mongoose.model('User', userSchema);