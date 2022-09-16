// import module
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// server.start() berjalan secara asynchronous
const init = async () => {
  const server = Hapi.server({
    port: 5000, // port 5000
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // bebas
      },
    },
  });

  server.route(routes); // server memanggil routes

  await server.start(); // memanggil await pada server.start
  console.log(`Server berjalan pada ${server.info.uri}`); // cetak kalimat
};

init(); // inisialisasi keseluruhan
