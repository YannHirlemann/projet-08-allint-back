const jwt = require('jsonwebtoken');

// isLogged
// Middleware qui permet de vérifier que l'utilisateur est bien connecté
module.exports = function () {
  return function (req, res, next) {
    // Bearer ezpzejfpizjfzpefz5zf5zef1ez4fezfez
    if (
      !req.headers.authorization
      || !req.headers.authorization.startsWith('Bearer ')
    ) {
      res.status(401).json({ error: 'no token found' });
    } else {
      const token = req.headers.authorization.replace('Bearer ', '');
      // verify a token symmetric
      // {userid: 1, expire: 251452214414}

      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      // TODO Verifier si le token est expire
        if (!error) {
          req.token = decoded;
          next();
        } else {
          res.status(401).json({ error: 'user not logged' });
        }
      });
    }
  };
};
