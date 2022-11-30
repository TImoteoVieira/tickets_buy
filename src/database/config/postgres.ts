const knex = require('knex');
import configuration from '../knexfile';

const config = configuration;

const connectionPostgreSQL = knex(config);

export default connectionPostgreSQL ;