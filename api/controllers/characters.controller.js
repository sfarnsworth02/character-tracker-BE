const Characters = require('../dal/characters.dal');

function handleError(res, err) {
    console.log('encountered error... ', err);
    res.json({
        error: err
    });
}


exports.create = function (req, res, next) {
    // i need to create a data structure (object)
    // that has all of the information from the request (req.body);
    Characters.create(req.body, function (err, character) {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json({
            message: "Character created successfully.",
            character,
        });
    })
}
exports.getAll = function (req, res, next) {
    const query = {};
    Characters.get(query, (err, results) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json(results);
    });
}
exports.getById = function (req, res, next) {
    const query = {
        _id: req.params.id
    };
    Characters.get(query, (err, results) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json(results);
    });
}
exports.getCharacter = function (req, res, next) {
    const query = {
        name: req.params.name
    };
    Characters.get(query, (err, results) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json(results);
    });
}
exports.update = function (req, res, next) {
    const query = {
        _id: req.params.id
    };
    Characters.update(query, req.body, (err, character) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json({
            message: "Character updated successfully.",
            character,
        });
    });
}
exports.delete = function (req, res, next) {
    const query = {
        _id: req.params.id
    };
    Characters.delete(query, (err, character) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json({
            message: "Character deleted successfully.",
            character,
        });
    });
}