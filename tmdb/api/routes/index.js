const router = require("express").Router();
const movies = require("./movies");
const user = require("./user");

router.use("/movies", movies);
router.use("/user", user);

module.exports = router;
