'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post_Images', [
      {
        url: "https://picsum.photos/id/1/800/500",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/28/800/500",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/99/800/500",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/45/800/500",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/85/800/500",
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/56/800/500",
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://picsum.photos/id/31/800/500",
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        url: "https://picsum.photos/id/100/800/500",
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        url: "https://picsum.photos/id/101/800/500",
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        url: "https://picsum.photos/id/102/800/500",
        postId:7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        url: "https://picsum.photos/id/103/800/500",
        postId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        url: "https://picsum.photos/id/104/800/500",
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
