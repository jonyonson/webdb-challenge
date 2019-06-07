const actionsDb = require('../dbConfig');

module.exports = { addAction, getActions };

function addAction(action) {
  return actionsDb('actions').insert(action);
}

function getActions() {
  return actionsDb('actions');
}
