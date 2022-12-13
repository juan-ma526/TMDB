const { validateToken } = require("../config/token");

function validateUser(req, res, next) {
  const payload = validateToken(req.cookies.token);
  req.user = payload;
  if (req.user) res.send(payload);
  res.sendStatus(401);
}

module.exports = { validateUser };
