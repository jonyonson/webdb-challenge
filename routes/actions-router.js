const router = require('express').Router();
const { addAction, getActions } = require('../data/helpers/actions-model');

router.get('/', (req, res) => {
  getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.post('/', (req, res) => {
  addAction(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
