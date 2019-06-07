const router = require('express').Router();

const {
  addAction,
  getActions,
  getActionById,
  removeAction,
  updateAction,
} = require('../data/helpers/actions-model');

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

router.get('/:id', (req, res) => {
  getActionById(req.params.id)
    .then(action => {
      if (action.length > 0) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'Action not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.delete('/:id', (req, res) => {
  removeAction(req.params.id)
    .then(deleted => {
      if (deleted > 0) {
        res.status(200).end();
      } else {
        res.status(404).json({ message: 'Action not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  updateAction(id, changes)
    .then(updated => {
      if (updated > 0) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Action not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
