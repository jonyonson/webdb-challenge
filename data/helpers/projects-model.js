const projectsDb = require('../dbConfig');

module.exports = {
  addProject,
  getProjects,
  getProjectById,
  removeProject,
  updateProject,
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

async function removeProject(id) {
  const project = await projectsDb('projects')
    .where({ id })
    .del();
  await projectsDb('actions')
    .where({ project_id: id })
    .del();

  return project;
}

function updateProject(id, changes) {
  return projectsDb('projects')
    .where({ id })
    .update(changes);
}
