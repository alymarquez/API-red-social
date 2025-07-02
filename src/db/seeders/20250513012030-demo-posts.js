'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        title: '¡Bienvenidos a nuestra comunidad!',
        content: 'Bienvenidos a Pez World, un espacio para conectar y compartir todo lo que nos apasiona. ¡Esperamos que disfruten su estadía!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: 'Presentación',
        content: '¡Hola a todos! Soy aliinyta, estoy muy emocionada de unirme a esta comunidad.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        title: 'El Ladrón de Kills',
        content: 'Experto en robar kills, no sólo en Fortnite, también en Rainbow Six. No sé hacer otra cosa que robar, pues soy el mayor ladrón de todo el gaming. ¡Prepárense!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        title: 'Sueños sin límites',
        content: 'Que tus sueños sean más grandes que tus miedos, lo suficiente para impulsarte a volar alto, a creer sin límites y a transformar cada obstáculo en un escalón hacia aquello que tu corazón anhela. ¡Nunca dejes de soñar!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        title: 'Navidad 2025',
        content: '¡Feliz Navidad 2025 y Feliz Cumpleaños para mi!!! Esperando con ansias las fiestas y pasar tiempo con la familia. ¡Qué alegría!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: 'Un buen comienzo del día',
        content: 'Desayunando un cafecito para empezar el día con energía. ¡Nada mejor para cargar pilas!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        title: 'Diversión en el EcoParque',
        content: '¡Día increíble en el EcoParque de Bs As! El cóndor y las jirafas fueron lo mejor. ¡Totalmente recomendado!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        title: 'Paseando a Rocco',
        content: 'Paseando a mi perro Rocco por el parque. ¡Siempre es bueno salir a disfrutar del aire libre con él!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Celebrando a la Abuela',
        content: '¡Cumpleaños 100 de la abuela! Con un poco de suerte, me va a ver recibirme. Es un honor poder celebrar con ella.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        title: 'Frases motivacionales',
        content: 'Seguime para más frases motivacionales que te inspirarán a alcanzar tus metas y vivir una vida plena. ¡No te las pierdas!',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        userId: 3,
        title: 'Noche de cine',
        content: '¡Salida al cine! A ver la última película de acción. ¿Alguna recomendación para la próxima?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: '¡Retro Start 10 Años!',
        content: '👾 El 5 y 6 de Julio festejamos 10 años del mejor evento de videojuegos retro de Argentina! 3 PISOS gigantescos con 2 ESCENARIOS!!! Repletos de actividades, shows, desafíos, invitados, charlas, concursos y sorteos!!!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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