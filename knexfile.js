// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://postgres:145900Qq@localhost:5432/localreq',
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {
    client: 'pg', 
    connection: {connectionString: process.env.DATABASE_URL, ssl: {
      rejectUnauthorized: false
    }}, 
    
    migrations: {
       directory: './data/migrations',
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
};
