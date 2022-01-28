// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    
  development: {
      client: 'cockroachdb',
      connection: 'postgres://root@127.0.0.1:26257/db?sslmode=disable'
  },

};
