const router = require("express").Router();

const axios = require("axios");

const apiKey = "45c519909f0a8dd6854cb8f7066ffc3e";

// Aca van los pedidos

// modo 2 de pedir las cosas con then
router.get("/:id", (req, res, next) => {
  const respuesta = axios.get(
    `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${apiKey}`
  );
  respuesta.then((peli) => res.send(peli.data));
});

module.exports = router;
