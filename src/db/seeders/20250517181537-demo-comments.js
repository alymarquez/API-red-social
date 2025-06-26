'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Comments', [
      // POST 1 Bienvenidos a Pez World
      { postId: 1, userId: 2, comment: '¡Qué buena iniciativa! Me encanta la idea.', createdAt: now, updatedAt: now },
      { postId: 1, userId: 3, comment: '¡Genial! Listo para explorar Pez World.', createdAt: now, updatedAt: now },
      { postId: 1, userId: 4, comment: '¡Ya me siento parte de la familia!', createdAt: now, updatedAt: now },
      { postId: 1, userId: 5, comment: '¡Gran comunidad!', createdAt: now, updatedAt: now },
      { postId: 1, userId: 2, comment: '¿Hay algún canal de bienvenida?', createdAt: now, updatedAt: now },
      { postId: 1, userId: 3, comment: 'Listo para compartir mis ideas acá.', createdAt: now, updatedAt: now },
      { postId: 1, userId: 1, comment: 'Esperando ver muchas publicaciones nuevas.', createdAt: now, updatedAt: now },
      { postId: 1, userId: 4, comment: '¡Comencemos con todo!', createdAt: now, updatedAt: now },
      { postId: 1, userId: 3, comment: 'Me encanta el nombre del grupo.', createdAt: now, updatedAt: now },

      // POST 2 Soy aliinyta
      { postId: 2, userId: 1, comment: '¡Bienvenida aliinyta! Esperamos verte mucho por aquí.', createdAt: now, updatedAt: now },
      { postId: 2, userId: 4, comment: '¡Hola! Un gusto tenerte en la comunidad.', createdAt: now, updatedAt: now },
      { postId: 2, userId: 3, comment: '¡Bienvenida aliinyta!', createdAt: now, updatedAt: now },
      { postId: 2, userId: 5, comment: 'Qué bueno que te sumaste.', createdAt: now, updatedAt: now },
      { postId: 2, userId: 1, comment: 'Acá vas a encontrar buena onda.', createdAt: now, updatedAt: now },
      { postId: 2, userId: 4, comment: 'Te esperamos en los foros.', createdAt: now, updatedAt: now },
      { postId: 2, userId: 2, comment: 'Gracias por la bienvenida.', createdAt: now, updatedAt: now },
      { postId: 2, userId: 3, comment: '¿De qué temas te gusta hablar?', createdAt: now, updatedAt: now },

      // POST 3 Experto en robar kills
      { postId: 3, userId: 1, comment: 'Jajaja, ¡un clásico en los juegos!', createdAt: now, updatedAt: now },
      { postId: 3, userId: 2, comment: '¡A mí también me pasa! 😂', createdAt: now, updatedAt: now },
      { postId: 3, userId: 5, comment: '¡Ya quiero jugar contra ti para ver eso!', createdAt: now, updatedAt: now },
      { postId: 3, userId: 1, comment: 'Jajaj sos terrible.', createdAt: now, updatedAt: now },
      { postId: 3, userId: 4, comment: 'Espero no cruzarte en partida jaja.', createdAt: now, updatedAt: now },
      { postId: 3, userId: 2, comment: 'Un clásico en cada lobby.', createdAt: now, updatedAt: now },
      { postId: 3, userId: 5, comment: 'Al menos lo admitís!', createdAt: now, updatedAt: now },
      { postId: 3, userId: 3, comment: 'Juego sucio pero efectivo 😈', createdAt: now, updatedAt: now },

      // POST 4 Que tus sueños sean más grandes que tus miedos
      { postId: 4, userId: 1, comment: '¡Qué lindo mensaje! Gracias por compartirlo.', createdAt: now, updatedAt: now },
      { postId: 4, userId: 3, comment: 'Muy inspirador, justo lo que necesitaba leer.', createdAt: now, updatedAt: now },
      { postId: 4, userId: 5, comment: '¡Qué motivador!', createdAt: now, updatedAt: now },
      { postId: 4, userId: 1, comment: 'Ideal para arrancar la semana.', createdAt: now, updatedAt: now },
      { postId: 4, userId: 3, comment: 'Gracias por estas palabras.', createdAt: now, updatedAt: now },
      { postId: 4, userId: 2, comment: '¡Esto va directo a mi fondo de pantalla!', createdAt: now, updatedAt: now },
      { postId: 4, userId: 3, comment: 'Me motivaste a volver al gimnasio.', createdAt: now, updatedAt: now },

      // POST 6 Desayunando un cafecito
      { postId: 6, userId: 1, comment: '¡Qué rico! Nada como un café para empezar.', createdAt: now, updatedAt: now },
      { postId: 6, userId: 4, comment: '¡Salud! ☕️', createdAt: now, updatedAt: now },
      { postId: 6, userId: 3, comment: 'Yo también, café y tostadas.', createdAt: now, updatedAt: now },
      { postId: 6, userId: 4, comment: 'Team mate por acá.', createdAt: now, updatedAt: now },
      { postId: 6, userId: 1, comment: 'Me diste ganas de preparar uno.', createdAt: now, updatedAt: now },
      { postId: 6, userId: 5, comment: '¡Arrancando el lunes con power!', createdAt: now, updatedAt: now },
      { postId: 6, userId: 2, comment: 'Café + comunidad = día perfecto.', createdAt: now, updatedAt: now },

      // POST 7 ¡Día increíble en el Parque de la Costa!
      { postId: 7, userId: 2, comment: '¡Qué envidia! Me encantaría ir.', createdAt: now, updatedAt: now },
      { postId: 7, userId: 1, comment: '¡Se ve que la pasaron genial! ', createdAt: now, updatedAt: now },
      { postId: 7, userId: 3, comment: '¡El Parque de la Costa es lo más! 🎉', createdAt: now, updatedAt: now },
      { postId: 7, userId: 1, comment: '¡Qué nostalgia ese lugar!', createdAt: now, updatedAt: now },
      { postId: 7, userId: 4, comment: '¿Fuiste a la Vuelta al Mundo?', createdAt: now, updatedAt: now },
      { postId: 7, userId: 3, comment: '¡Lo tengo pendiente!', createdAt: now, updatedAt: now },
      { postId: 7, userId: 2, comment: 'Me diste ganas de organizar una salida.', createdAt: now, updatedAt: now },

      // POST 8 Paseando a mi perro Rocco
      { postId: 8, userId: 5, comment: '¡Rocco es hermoso! Disfruten el paseo.', createdAt: now, updatedAt: now },
      { postId: 8, userId: 2, comment: '¡Qué lindo perrito! ❤️', createdAt: now, updatedAt: now },
      { postId: 8, userId: 1, comment: '¿Qué raza es Rocco?', createdAt: now, updatedAt: now },
      { postId: 8, userId: 5, comment: '¡El mío también se llama Rocco!', createdAt: now, updatedAt: now },
      { postId: 8, userId: 2, comment: 'El parque se ve genial para pasear.', createdAt: now, updatedAt: now },
      { postId: 8, userId: 3, comment: '¡Me sumo al próximo paseo!', createdAt: now, updatedAt: now },
      { postId: 8, userId: 4, comment: 'Le encanta correr detrás de las palomas.', createdAt: now, updatedAt: now },

      // POST 9 ¡Cumpleaños 100 de la abuela!
      { postId: 9, userId: 2, comment: '¡Felicidades a la abuela! Que sigan los festejos.', createdAt: now, updatedAt: now },
      { postId: 9, userId: 4, comment: '¡Qué bendición! Mucha salud para ella.', createdAt: now, updatedAt: now },
      { postId: 9, userId: 3, comment: '¡Qué emoción, felicitaciones!', createdAt: now, updatedAt: now },
      { postId: 9, userId: 2, comment: '¡Una inspiración de vida!', createdAt: now, updatedAt: now },
      { postId: 9, userId: 5, comment: 'Abrazos a la abuela.', createdAt: now, updatedAt: now },
      { postId: 9, userId: 4, comment: '¡Qué orgullo tenerla cerca!', createdAt: now, updatedAt: now },
      { postId: 9, userId: 1, comment: 'Ojalá llegue a ver mi título.', createdAt: now, updatedAt: now },

      // POST 10 Frases motivacionales
      { postId: 10, userId: 2, comment: '¡Ya te sigo! Siempre vienen bien estas frases.', createdAt: now, updatedAt: now },
      { postId: 10, userId: 5, comment: '¡Me encantan tus posts!', createdAt: now, updatedAt: now },
      { postId: 10, userId: 1, comment: '¡Ya te sigo!', createdAt: now, updatedAt: now },
      { postId: 10, userId: 3, comment: 'Publicá todos los días.', createdAt: now, updatedAt: now },
      { postId: 10, userId: 5, comment: 'Esto es justo lo que necesitaba.', createdAt: now, updatedAt: now },
      { postId: 10, userId: 2, comment: 'Tus frases me levantan el ánimo.', createdAt: now, updatedAt: now },
      { postId: 10, userId: 4, comment: 'Mañana subo más, ¡gracias!', createdAt: now, updatedAt: now }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
