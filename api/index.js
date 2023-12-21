const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false })
.then(() => {
  server.listen(3001, () => {
    console.log('Server levantado en puerto: 3001'); // eslint-disable-line no-console
  });
})
.catch((error) => {
  console.log("Error al conectar:", error);
})
