const client = require('../connection_database');

const registerDataMapper = {
  register: async (newUser) => {
    const query = {
      // eslint-disable-next-line quotes
      text: `INSERT INTO "user" ("lastname", "firstname", "email", "password", "role_id") VALUES ($1, $2, $3, $4, 2);`,
      values: [newUser.lastname, newUser.firstname, newUser.email, newUser.password],
    };

    try {
      const result = await client.query(query);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  update: async (info, idUser) => {
    const query = {
      text: `UPDATE "user"
      SET "email" = $1, "firstname" = $2, "lastname" = $3, "password" = $4
      WHERE id = $5;`,
      values: [info.email, info.firstname, info.lastname, info.password, idUser],
    };
    try {
      const result = await client.query(query);
      if (result.rowCount === 0) {
        // eslint-disable-next-line no-throw-literal
        throw ({
          detail: "cet utilisateur n'existe pas et n'a pu être modifié",
        });
      }
      return {
        message: 'modification(s) enregistrée(s)',
        isError: false,
      };
    } catch (error) {
      console.log(error);
      return {
        message: error.detail,
        isError: true,
      };
    }
  },
  delete: async (fakeId) => {
    const query = {
      text: 'DELETE FROM "user" WHERE "id" = $1;',
      values: [fakeId],
    };

    try {
      const result = await client.query(query);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  login: async (email) => {
    const query = {
      text: 'SELECT * FROM "user" WHERE "email" = $1',
      values: [email],
    };

    try {
      const result = await client.query(query);
      return result.rows[0];
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getHash: async (email) => {
    const query = {
      text: 'SELECT "password" FROM "user" WHERE "email" = $1',
      values: [email],
    };

    try {
      const result = await client.query(query);
      return result.rows[0];
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getUser: async (id) => {
    const query = {
      text: 'SELECT "lastname", "firstname", "email", "role_id" FROM "user" WHERE id = $1',
      values: [id],
    };
    try {
      const result = await client.query(query);
      return result.rows[0];
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
module.exports = registerDataMapper;
