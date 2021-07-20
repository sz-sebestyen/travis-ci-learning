const app = require("./app");
require("./mongoDB.config")();

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

process.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
