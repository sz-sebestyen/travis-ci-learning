const app = require("./app");
require("./mongoDB.config")();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
