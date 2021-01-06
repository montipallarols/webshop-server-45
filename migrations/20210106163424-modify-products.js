'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "products",
      "description",
      { type: Sequelize.TEXT },
      {}
    );
    await queryInterface.addColumn(
      "products",
      "price",
      { type: Sequelize.INTEGER },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "description", {});
    await queryInterface.removeColumn("products", "price", {});
  }
};
