const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*

    name,
    characterClass,
    level,
    race,
    experience,

*/

const characterSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true,
    },
    charClass: {
        type: Schema.Types.ObjectId,
        unique: false,
        required: true,
        ref: 'Classes'
    },
    level: {
        type: Number,
        unique: false,
        required: true,
    },
    race: {
        type: Schema.Types.ObjectId,
        unique: false,
        required: true,
        ref: 'Races',
    },
    experience: {
        type: Number,
        unique: false,
        required: true,
    },
});

module.exports = characterSchema;