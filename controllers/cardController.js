const db = require('../src/models');

module.exports = {
    findAll: function(req, res) {
        db.Card
            .find(req.query)
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err));
    },
    
}