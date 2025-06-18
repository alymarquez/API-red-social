'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        content: 'Bienvenidos a Pez World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Soy aliinyta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        content: 'Experto en robar kills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        content: 'Que tus sueños sean más grandes que tus miedos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        content: 'Seguime para más frases motivacionales',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Me gusta mimir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Me gusta mimir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Me gusta mimir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Me gusta mimir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Me gusta mimir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Me gusta mimir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Me gusta mimir',
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
