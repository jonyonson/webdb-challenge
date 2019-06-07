exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'File Taxes',
          description: 'Submit 2018 Tax Return',
          completed: false,
        },
        {
          name: 'Build a Fence',
          description: 'Build a backyard privacy fence',
          completed: false,
        },
        {
          name: 'Renovate bathroom',
          description: 'New tile, toilet, tub',
          completed: false,
        },
      ]);
    });
};
