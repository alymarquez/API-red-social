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
        userId: 5,
        comment: 'La vez que fui a visitarte no me recibiste con facturas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        userId: 4,
        comment: 'Hola aliinyta, soy titi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        userId: 3,
        comment: 'Envenenaste a mi perro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        userId: 5,
        comment: 'El más grande sigue siendo river plate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 5,
        userId: 5,
        comment: 'El diego es el mejor jugador del mundo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 5,
        userId: 1,
        comment: 'Tengo que desactivar bombas en el RainbowSix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        userId: 3,
        comment: 'Awante Boca Boca Boca',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        userId: 5,
        comment: 'Lukitas Figarola es un capo, entrevistalo en tu canal',
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
