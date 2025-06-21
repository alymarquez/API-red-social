'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      {
        tag: 'Tecnología',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Paisajes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Mascotas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Comidas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Motivación',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
