'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        postId: 1,
        userId: 2,
        comment: 'Muy buen canal, me suscribiré',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 3,
        userId: 1,
        comment: 'He jugado con él y me roba todos los kills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        userId: 4,
        comment: 'Hola aliinyta, soy titi',
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
