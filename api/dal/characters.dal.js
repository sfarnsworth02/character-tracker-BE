const mongoose = require('mongoose');
const characterSchema = require('../models/characters.model');

// CRUD stands for CREATE, READ, UPDATE, DELETE
characterSchema.statics = {
    create: function (data, callback) {
        const character = new this(data);
        character.save(callback);
    },
    get: function (query, callback) {
        this.find(query, callback);
    },
    update: function (query, data, callback) {
        this.findOneAndUpdate(query, {
            $set: data
        }, callback);
    },
    delete: function (query, callback) {
        this.findOneAndDelete(query, callback);
    },
}

const characterModel = mongoose.model('Characters', characterSchema);
module.exports = characterModel;