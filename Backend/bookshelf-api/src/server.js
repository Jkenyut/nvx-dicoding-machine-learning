const Hapi = require("@hapi/hapi");
const Qs = require("qs");
const routes = require("./routes/bookshelf");

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: "localhost",
        routes: {
            cors: {
                origin: ["*"],
            },
        },
        query: {
            parser: (query) => Qs.parse(query),
        },
    });
    server.route(routes);
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
