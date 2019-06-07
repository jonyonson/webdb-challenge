const router = require('express').Router();

const {
  addProject,
  getProjects,
  getProjectById,
  removeProject,
  updateProject,
} = require('../data/helpers/projects-model');

router.get('/', (req, res) => {
  getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.post('/', (req, res) => {
  addProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.get('/:id', (req, res) => {
  getProjectById(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  removeProject(req.params.id)
    .then(deleted => {
      if (deleted > 0) {
        res.status(200).end();
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  updateProject(id, changes)
    .then(updated => {
      if (updated > 0) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
