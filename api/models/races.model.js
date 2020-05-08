const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const racesSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
});

module.exports = racesSchema;