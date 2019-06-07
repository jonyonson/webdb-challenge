const projectsDb = require('../dbConfig');

module.exports = {
  addProject,
  getProjects,
  getProjectById,
};

function addProject(project) {
  return projectsDb('projects').insert(project);
}

function getProjects() {
  return projectsDb('projects');
}

async function getProjectById(id) {
  const project = await projectsDb('projects').where({ id });
  const actions = await projectsDb('actions').where({ project_id: id });

  project[0].actions = actions;
  return project[0];
}
