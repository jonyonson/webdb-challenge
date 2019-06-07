exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', p => {
    p.increments();
    p.string('name', 255);
    p.string('description', 512);
    p.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
