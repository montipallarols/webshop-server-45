"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("users", [
      {
        fullName: "Montaga Pallarols",
        email: "montaga.pallarols@gmail.com",
        password: bcrypt.hashSync("mon", SALT_ROUNDS),
        address: "Amsterdam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Bas Koekkoek",
        email: "bas@fake.com",
        password: bcrypt.hashSync("bas", SALT_ROUNDS),
        address: "Amsterdam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
