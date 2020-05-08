// npm packages that i want to import
const express = require('express');
const cors = require('cors');
require('dotenv').config();


// import my database connection settings
const db = require('./config/database');

// initializing the connection to the database
db();


// import my generic generator files
const routerGen = require('./api/routes/generic.router');
const modelGen = require('./api/dal/generic.dal');

// import my schemas
const charSchema = require('./api/models/characters.model');
const raceSchema = require('./api/models/races.model');
const classesSchema = require('./api/models/characterClasses.model');

// create models for all of my schemas
const Characters = modelGen('Characters', charSchema);
const Races = modelGen('Races', raceSchema);
const Classes = modelGen('Classes', classesSchema);


// get constants from my settings file
let {
    PORT,
    APPNAME
} = require('./config/settings');


// define the app
const app = express();
app.use(cors());
app.use(express.json());

app.use(logger);

function logger(req, res, next) {
    console.log(`Incoming ${req.method} request to ${req.url}...`);
    next();
}

// create express router object for the project
const router = express.Router();
const uiRouter = express.Router();


// tell the app to use our api routes
app.use('/', routerGen(Characters));
app.use('/', routerGen(Races));
app.use('/', routerGen(Classes));

app.listen(PORT, () => {
    console.log(`${APPNAME} is listening on port ${PORT}...`);
});