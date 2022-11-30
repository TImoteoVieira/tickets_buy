import dotenv from 'dotenv';
dotenv.config({
  path:'../../.env'
})

import {Knex} from 'knex';
const CON_DB = process.env.CONNECTION_DB;

//console.log(CON_DB);

const configuration: Knex.Config =  {
  client: 'postgresql',
  connection: CON_DB,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './migrations',
    tableName: "knex_migrations", 
  }
};

export default configuration ;