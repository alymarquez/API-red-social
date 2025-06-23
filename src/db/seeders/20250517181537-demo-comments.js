'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      // Comentarios para Post 1: '¡Bienvenidos a nuestra comunidad!'
      {
        postId: 1,
        userId: 2,
        comment: '¡Qué buena iniciativa! Me encanta la idea.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        userId: 3,
        comment: '¡Genial! Listo para explorar Pez World.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Comentarios para Post 2: 'Presentación'
      {
        postId: 2,
        userId: 1,
        comment: '¡Bienvenida aliinyta! Esperamos verte mucho por aquí.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 2,
        userId: 4,
        comment: '¡Hola! Un gusto tenerte en la comunidad.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Comentarios para Post 3: 'El Ladrón de Kills'
      {
        postId: 3,
        userId: 1,
        comment: 'Jajaja, ¡un clásico en los juegos!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 3,
        userId: 2,
        comment: '¡A mí también me pasa! 😂',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 3,
        userId: 5,
        comment: '¡Ya quiero jugar contra ti para ver eso!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Comentarios para Post 4: 'Sueños sin límites'
      {
        postId: 4,
        userId: 1,
        comment: '¡Qué lindo mensaje! Gracias por compartirlo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 4,
        userId: 3,
        comment: 'Muy inspirador, justo lo que necesitaba leer.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Comentarios para Post 5: 'Frases motivacionales'
      {
        postId: 5,
        userId: 2,
        comment: '¡Ya te sigo! Siempre vienen bien estas frases.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 5,
        userId: 5,
        comment: '¡Me encantan tus posts!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Comentarios para Post 6: 'Un buen comienzo del día'
      {
        postId: 6,
        userId: 1,
        comment: '¡Qué rico! Nada como un café para empezar.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 6,
        userId: 4,
        comment: '¡Salud! ☕️',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Comentarios para Post 7: 'Diversión en el Parque de la Costa'
      {
        postId: 7,
        userId: 2,
        comment: '¡Qué envidia! Me encantaría ir.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 7,
        userId: 1,
        comment: '¡Se ve que la pasaron genial!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 7,
        userId: 3,
        comment: '¡El Parque de la Costa es lo más! 🎉',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Comentarios para Post 8: 'Paseando a Rocco'
      {
        postId: 8,
        userId: 5,
        comment: '¡Rocco es hermoso! Disfruten el paseo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 8,
        userId: 2,
        comment: '¡Qué lindo perrito! ❤️',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Comentarios para Post 9: 'Celebrando a la Abuela'
      {
        postId: 9,
        userId: 2,
        comment: '¡Felicidades a la abuela! Que sigan los festejos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 9,
        userId: 4,
        comment: '¡Qué bendición! Mucha salud para ella.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Los Posts 10 ('Feliz Navidad 2025') y 11 ('Noche de cine')
      // NO tienen comentarios, cumpliendo con la consigna de al menos 2 sin comments.
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};