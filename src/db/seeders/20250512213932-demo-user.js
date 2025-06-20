'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        nickName: 'CrisPez',
        email: 'crispez@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nickName: 'Alu',
        email: 'unidadAritmeticoLogica@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nickName: 'Alesi',
        email: 'elmascapodefortnite@ojoconmigo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nickName: 'Titi',
        email: 'tititiMutu@pipipi.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nickName: 'LCardona',
        email: 'luckyStrike@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
