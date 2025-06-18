'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post_Images', [
      {
        url: "https://picsum.photos/id/1/200/300",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/28/200/300",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/99/200/300",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/45/200/300",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/85/200/300",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/56/200/300",
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/31/200/300",
        postId: 2,
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
