module.exports = {
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'marveldb',
  define: {
    timestamps: true,
    underscored: true,
  }
};

// created_at, updated_at