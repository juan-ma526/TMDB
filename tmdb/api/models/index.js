const Movies = require("./Movies");
const User = require("./Users");

// La relacion

Movies.belongsToMany(User, { through: "favorites" });
User.belongsToMany(Movies, { through: "favorites" });

module.exports = { Movies, User };
