const DBNAME = 'firstdb';
module.exports = {
    PORT: 3333,
    DBNAME,
    APPNAME: 'D&D Character Tracker',
    DBURI: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@contactsapp-z9t9p.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
};