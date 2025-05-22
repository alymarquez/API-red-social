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
        nickName: 'Aliinyta',
        email: '123123@gmail.com',
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
        email: 'thiagomutuverria@hotmail.com',
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
