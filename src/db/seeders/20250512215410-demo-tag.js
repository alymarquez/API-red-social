'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      {
        tag: 'Bienvenida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'VidaDiaria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Gaming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Inspiración',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Celebración',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Entretenimiento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Mascotas', // Mantuvimos esta porque encaja perfecto
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