const router = require("express").Router();

const { validateUser } = require("../middleware/auth");

const {
  allUser,
  registerUser,
  loginUser,
  secretUser,
  logOutUser,
  userFavorites,
  userFavoritesId,
  deleteFavorites,
} = require("../controllers/user");

// Aca van los pedidos

router.get("/", allUser);

// deberia poner datos cuando estoy registrando como cuando estoy haciendo un login, creo

router.post("/register", registerUser);

router.post("/login", loginUser);
router.get("/secret", secretUser);
router.post("/logout", logOutUser);

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

router.post("/favorites", userFavorites);

router.get("/favorites/:id", userFavoritesId);

router.post("/delete", deleteFavorites);

module.exports = router;
