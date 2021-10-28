const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        status: "On",
        title: "Node API",
    });
});


const controller = require('../controllers/github');
router.get('/list/all', controller.getAll);

module.exports = router;
