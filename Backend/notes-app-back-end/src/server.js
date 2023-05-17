/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
require("dotenv").config();
const Hapi = require("@hapi/hapi");

const notes = require("./api/notes");
// const NotesService = require("./services/inMemory/NotesService");
const NotesService = require("./services/postgres/NoteService");
const NotesValidator = require("./validator/notes");

console.log(process.env.HOST, process.env.PORT);
const init = async () => {
  const notesService = new NotesService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    },
  });
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
