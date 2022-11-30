import { Knex } from "knex";

const tableName = 'ticket';
exports.up = async function (knex: Knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await knex.schema.createTable(tableName, function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()')),
        table.string('entity'),
        table.text('description'),
        table.date('data'),
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    }

exports.down = function(knex: Knex) {
    return knex.schema.dropTable(tableName);
};

