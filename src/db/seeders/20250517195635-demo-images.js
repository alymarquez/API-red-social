'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post_Images', [
      // Post 1: '¡Bienvenidos a nuestra comunidad!' - Varias imágenes de comunidad/conexión
      // Usamos IDs de Picsum que suelen ser paisajes o escenas generales.
      {
        postId: 1,
        url: "https://i.ibb.co/LzXXSm8H/Logo-Pez-World.png", // Paisaje genérico
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        url: "https://picsum.photos/id/10/800/500",   // Camino, conexión
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        url: "https://picsum.photos/id/20/800/500",   // Gente interactuando
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        url: "https://picsum.photos/id/237/800/500",  // Perro (genérico, para conectar)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        url: "https://picsum.photos/id/1004/800/500", // Árbol, naturaleza (unión)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        url: "https://i.ibb.co/fzfBXsgL/alina.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 3: 'El Ladrón de Kills' - Imagen de Fortnite (MANTENIDA)
      {
        postId: 3,
        url: "https://mitchcactus.co/wp-content/uploads/2025/04/Fortnite-player-count.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 4: 'Sueños sin límites' - Imágenes de inspiración/paisajes
      {
        postId: 4,
        url: "https://picsum.photos/id/1019/800/500", // Montañas, cielo
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 4,
        url: "https://picsum.photos/id/1043/800/500", // Vistas amplias
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 5: 'Frases motivacionales' - Imagen de cita/inspiración
      // ID de Picsum que puede ser un fondo abstracto o simple.
      {
        postId: 5,
        url: "https://picsum.photos/id/1080/800/500", // Fondo abstracto, minimalista
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 6: 'Un buen comienzo del día' (cafecito)
      // ID de Picsum que se asemeja a un café.
      {
        postId: 6,
        url: "https://picsum.photos/id/29/800/500",   // Taza o bebida
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 7: 'Diversión en el Parque de la Costa' - Imágenes de parque de diversiones
      // IDs de Picsum que pueden ser lugares con gente o actividad.
      {
        postId: 7,
        url: "https://picsum.photos/id/1024/800/500", // Escenario con gente
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 7,
        url: "https://picsum.photos/id/1039/800/500", // Ciudad nocturna (luces, diversión)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Post 8: 'Paseando a mi perro Rocco' - Imágenes de Rocco (MANTENIDAS)
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