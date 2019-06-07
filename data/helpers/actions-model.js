const actionsDb = require('../dbConfig');

module.exports = {
  addAction,
  getActions,
  getActionById,
  removeAction,
  updateAction,
};

function addAction(action) {
  return actionsDb('actions').insert(action);
}

function getActions() {
  return actionsDb('actions');
}

function getActionById(id) {
  return actionsDb('actions').where({ id });
}

function removeAction(id) {
  return actionsDb('actions')
    .where({ id })
    .del();
}

function updateAction(id, changes) {
  return actionsDb('actions')
    .where({ id })
    .update(changes);
}
