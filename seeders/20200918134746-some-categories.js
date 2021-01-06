"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("categories", [
      {
        name: "Lifestyle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Personal Care",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("categories", null, {});
  },
};
