import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('services', function(table){
    table.increments('id');
    table.text('type');

    table.integer('client_id')
      .notNullable();
    table.foreign('client_id').references('clients.id').onDelete('CASCADE');

  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('services');
}

