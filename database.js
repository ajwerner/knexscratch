const knex = require('knex');
const config = require('./knexfile')['development'];
const database = knex(config);


async function up(knex) {
    // Table begins with `CREATE TABLE foo (i INT PRIMARY KEY, j NOT NULL);`
    // This migration alters the primary key to (j).
    database.schema.table('foo', table => {
        table.dropPrimary();
        table.primary(['j']);
    });
};

module.exports = { up };

