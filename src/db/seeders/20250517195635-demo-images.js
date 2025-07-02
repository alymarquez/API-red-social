'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post_Images', [
      // Post 1: '¡Bienvenidos a nuestra comunidad!'
      {
        postId: 1,
        url: "https://i.ibb.co/LzXXSm8H/Logo-Pez-World.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        url: "https://picsum.photos/id/10/800/500",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        url: "https://picsum.photos/id/20/800/500",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        url: "https://picsum.photos/id/237/800/500",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        url: "https://picsum.photos/id/1004/800/500",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        url: "https://i.ibb.co/fzfBXsgL/alina.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 3: 'El Ladrón de Kills' - Imagen de Fortnite
      {
        postId: 3,
        url: "https://mitchcactus.co/wp-content/uploads/2025/04/Fortnite-player-count.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 5: 'Frases motivacionales'
      {
        postId: 5,
        url: "https://services.meteored.com/img/article/papa-noel-reparte-regalos-navidad-usando-fisica-cuantica-santa-juguetes-trineo-renos-carta-1702717089004_1024.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 5,
        url: "https://i.ibb.co/zhzTZSqr/Whats-App-Image-2025-06-25-at-23-32-06.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        postId: 5,
        url: "https://contracorriente.red/wp-content/uploads/2024/12/Portada-de-Teddy-Navidades-diversas-Voces-Diversas.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 7: 'Diversión en el Parque de la Costa'
      {
        postId: 7,
        url: "https://picsum.photos/id/1024/800/500",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 7,
        url: "https://picsum.photos/id/1039/800/500",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 8: 'Paseando a mi perro Rocco'
      {
        postId: 8,
        url: "https://i.ibb.co/n9LGCg1/IMG-20200810-WA0001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 8,
        url: "https://i.ibb.co/ym05g3Gq/IMG-20200810-WA0003.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 8: '¡Retro Start 10 Años!'
      {
        postId: 12,
        url: "https://i.ibb.co/whxQP3cy/retrostart.jpg",
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