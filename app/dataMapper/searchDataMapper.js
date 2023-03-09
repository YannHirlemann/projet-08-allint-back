const client = require('../connection_database');

const searchDataMapper = {
  select: async (allergy) => {
    const query = {
      // eslint-disable-next-line quotes
      text: `INSERT INTO "allergy" ("name", "allergens") VALUES ($1, TRUE);`,
      values: [allergy.name, allergy.allergens],
    };
    try {
      const result = await client.query(query);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  selectAllergiesFromUser: async (userId) => {
    const query = {
      text: `
      SELECT A.*
      FROM "user_allergy" as UA
      LEFT JOIN "allergy" as A ON UA.allergy_id = A.id
      WHERE UA.user_id = $1;
      `,
      values: [userId],
    };

    try {
      const result = await client.query(query);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  insertUserAllergy: async (allergyId, userId) => {
    const query = {
      // eslint-disable-next-line quotes
      text: `INSERT INTO "user_allergy" ("user_id", "allergy_id") VALUES ($1, $2);`,
      values: [userId, allergyId],
    };

    try {
      const result = await client.query(query);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  deleteUserAllergy: async (allergyId, userId) => {
    const query = {
      text: 'DELETE FROM "user_allergy" WHERE "allergy_id" = $1 AND "user_id" = $2;',
      values: [allergyId, userId],
    };
    try {
      const result = await client.query(query);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

};

module.exports = searchDataMapper;
