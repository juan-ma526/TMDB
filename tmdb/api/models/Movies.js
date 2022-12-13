const Sequelize = require("sequelize");
const db = require("../config/db");

class Movies extends Sequelize.Model {}

Movies.init(
  {
    movieId: {
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    overview: {
      type: Sequelize.TEXT,
    },
    rating: {
      type: Sequelize.FLOAT,
    },
    img: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "movies" }
);
module.exports = Movies;
