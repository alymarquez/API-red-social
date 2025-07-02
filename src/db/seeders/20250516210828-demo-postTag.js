'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostTag', [
      // Post 1: '¡Bienvenidos a nuestra comunidad!' -> Bienvenida
      {
        postId: 1,
        tagId: 1, // Bienvenida
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 2: '¡Hola a todos! Soy aliinyta...' -> VidaDiaria
      {
        postId: 2,
        tagId: 2, // VidaDiaria
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 3: 'El Ladrón de Kills' -> Gaming
      {
        postId: 3,
        tagId: 3, // Gaming
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 4: 'Que tus sueños sean más grandes...' -> Inspiración
      {
        postId: 4,
        tagId: 4, // Inspiración
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 5: 'Seguime para más frases motivacionales' -> Inspiración
      {
        postId: 5,
        tagId: 4, // Inspiración
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 6: 'Desayunando un cafecito' -> VidaDiaria
      {
        postId: 6,
        tagId: 2, // VidaDiaria
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 7: '¡Día increíble en el Parque de la Costa!' -> Entretenimiento, VidaDiaria
      {
        postId: 7,
        tagId: 6, // Entretenimiento
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 7,
        tagId: 2, // VidaDiaria
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 8: 'Paseando a mi perro Rocco' -> Mascotas, VidaDiaria
      {
        postId: 8,
        tagId: 7, // Mascotas
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 8,
        tagId: 2, // VidaDiaria
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 9: '¡Cumpleaños 100 de la abuela!' -> Celebración, VidaDiaria
      {
        postId: 9,
        tagId: 5, // Celebración
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 9,
        tagId: 2, // VidaDiaria
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 10: '¡Navidad 2025!' -> Celebración
      {
        postId: 10,
        tagId: 5, // Celebración
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 11: '¡Salida al cine!' -> Entretenimiento, VidaDiaria
      {
        postId: 11,
        tagId: 6, // Entretenimiento
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 11,
        tagId: 2, // VidaDiaria
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 12,
        tagId: 3, // VidaDiaria
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 12,
        tagId: 6, // VidaDiaria
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