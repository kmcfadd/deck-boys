const router = require('express').Router();
const cardController = require('../../controllers/cardController');

router.route('/decks')
    .get(cardController.findAll)

module.exports = router;