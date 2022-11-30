import { Knex } from "knex";

const tableName = 'transaction';
exports.up = async function (knex: Knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await knex.schema.createTable(tableName, function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.uuid('fk_users_uuid');
        table.uuid('fk_ticket_uuid');
        table.foreign('fk_users_uuid').references('users.id');
        table.foreign('fk_ticket_uuid').references('ticket.id');
        table.float('title_amount'),
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    }

exports.down = function(knex: Knex) {
    return knex.schema.dropTable(tableName);
};

