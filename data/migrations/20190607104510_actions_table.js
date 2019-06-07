exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', a => {
    a.increments();
    a.string('description', 512);
    a.string('notes', 1024);
    a.boolean('completed');

    a.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
