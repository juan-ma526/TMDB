const User = require("../models/Users");
const { generateToken } = require("../config/token");

const Movies = require("../models/Movies");

const allUser = (req, res) => {
  User.findAll().then((usuario) => res.send(usuario));
};

// deberia poner datos cuando estoy registrando como cuando estoy haciendo un login, creo

const registerUser = (req, res, next) => {
  const { nombre, apellido, password, email, edad } = req.body;
  User.create({ nombre, apellido, password, email, edad })
    .then((usuario) => res.status(201).send(usuario))
    .catch((error) => next(error));
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    user
      .validatePassword(password)
      .then((isValid) => {
        if (!isValid) return res.sendStatus(401);

        let payload = {
          id: user.id,
          email: user.email,
          name: user.nombre,
          lastname: user.apellido,
        };
        let token = generateToken(payload);
        res.cookie("token", token);
        res.send(payload);
      })
      .catch(next);
  });
};
const secretUser = (req, res) => {
  res.send(req.user);
};
const logOutUser = (req, res) => {
  res.clearCookie("token").sendStatus(204);
};

const userFavorites = (req, res) => {
  const { userId, movie } = req.body;

  Movies.create({
    movieId: movie.id,
    title: movie.original_title,
    rating: movie.vote_average,
    overview: movie.overview,
    img: movie.poster_path,
  }).then((movies) => {
    User.findOne({ where: { id: userId } })
      .then((user) => {
        user.addMovies(movies);
        res.sendStatus(200);
      })
      .catch((error) => console.log(error));
  });
};

const userFavoritesId = (req, res) => {
  const id = req.params.id;
  User.findOne({ where: { id: id }, include: "movies" }).then((respuesta) =>
    res.send(respuesta.movies)
  );
};

const deleteFavorites = (req, res) => {
  const { userId, movieId } = req.body;
  User.findByPk(userId)
    .then((user) => user.removeMovie(movieId))
    .then(() => res.sendStatus(200))
    .catch((error) => res.status(500).send(error));
};

module.exports = {
  allUser,
  registerUser,
  loginUser,
  secretUser,
  logOutUser,
  userFavorites,
  userFavoritesId,
  deleteFavorites,
};
