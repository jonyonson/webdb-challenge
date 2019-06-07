const router = require('express').Router();
const {
  addProject,
  getProjects,
  getProjectById,
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

module.exports = router;
