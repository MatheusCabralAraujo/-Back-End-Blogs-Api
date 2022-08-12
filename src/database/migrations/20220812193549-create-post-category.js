"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PostCategories", {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "BlogPosts",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PostCategories");
  },
};