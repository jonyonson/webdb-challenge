exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: 'Complete expense log',
          notes: 'find all travel receipts',
          completed: false,
          project_id: 1,
        },
        {
          description: 'Get w2 detail from accountant',
          notes: 'accountant has wage and income transcript from irs',
          completed: false,
          project_id: 1,
        },
        {
          description: 'This is an action for fence project',
          notes: 'these are notes for the action',
          completed: false,
          project_id: 2,
        },
        {
          description: 'this is another action for fence proect',
          notes: 'these are notes for the action',
          completed: false,
          project_id: 2,
        },
        {
          description: 'This is an action for bathroom project',
          notes: 'these are notes for the action',
          completed: false,
          project_id: 3,
        },
        {
          description: 'this is another action for bathroom proect',
          notes: 'these are notes for the action',
          completed: false,
          project_id: 3,
        },
      ]);
    });
};
