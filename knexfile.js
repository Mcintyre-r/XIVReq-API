// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://postgres:145900@localhost:5432/XIVReq',
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
    connection: `${process.env.DATABASE_URL}`, 
    migrations: {
       directory: './data/migrations',
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
};
