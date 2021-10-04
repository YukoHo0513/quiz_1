// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'quiz1_db'
    },
    migrations: {
      tableName: 'migrations',
      directory: 'db/migrations'
    },
    seeds: {
      directory: "db/seeds"
    }
  }

};
