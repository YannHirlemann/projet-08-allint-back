const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const registerDataMapper = require('../dataMapper/registerDataMapper');

const profilController = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    // reste à hasher le mdp
    // const saltRounds = 10;

    // on récupère le mdp hashé qui correspond à cet email
    const hash = await registerDataMapper.getHash(email);

    // on compare le mdp envoyé par le front et le mdp hashé
    const checkPassword = await bcrypt.compare(password, hash.password);

    if (!checkPassword) {
      res.status(401).json({ error: 'user or password is not found' });
    }

    // on récupère l'user car les mdp correspondent
    const result = await registerDataMapper.login(email);

    if (result) {
      // utilsateur a été trouvé

      const token = jwt.sign({ userId: result.id }, process.env.JWT_SECRET);
      res.send(token);
    } else {
      // utilisateur n'a pas été trouvé
      res.status(401).json({ error: 'user or password is not found' });
    }
  },

  registerUser: async (req, res) => {
    const newUser = req.body;
    console.log(newUser);

    // reste à hasher le mdp
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    const result = await registerDataMapper.register(newUser);

    if (result) {
      res.json('Utilisateur bien enregistré');
    } else {
      res.json('Cet email existe déjà');
    }
  },
  updateUser: async (req, res) => {
    const infoUserToUpdate = req.body;
    const idUser = req.token.userId;

    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    infoUserToUpdate.password = await bcrypt.hash(infoUserToUpdate.password, salt);

    const result = await registerDataMapper.update(infoUserToUpdate, idUser);

    if (!result.isError) {
      res.json('modification(s) enregistrée(s)');
    } else {
      res.json(result.message);
    }
  },
  deleteUser: async (req, res) => {
    const id = req.token.userId;

    const result = await registerDataMapper.delete(id);

    if (result) {
      res.json('Utilisateur a bien supprimé');
    }
  },
  getUser: async (req, res) => {
    const id = req.token.userId;
    const result = await registerDataMapper.getUser(id);
    console.log(result);
    if (result) {
      res.json(result);
    }
  },
};

module.exports = profilController;
