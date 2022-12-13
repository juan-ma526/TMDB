const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  hashGen(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hashGen(password, this.salt).then(
      (hash) => hash === this.password
    );
  }
}

User.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.VIRTUAL,
      get() {
        return `${this.nombre} ${this.apellido}`;
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    edad: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);
User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;

  return user
    .hashGen(user.password, salt)
    .then((hash) => (user.password = hash));
});

module.exports = User;
