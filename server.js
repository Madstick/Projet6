const http = require('http') // On appelle l'objet 'http' de node
const app = require('./app') // On appelle l'application que renverra le serveur

const normalizePort = (val) => {
  // la fonction normalizePort renvoie un port valide, fourni sous la forme d'un numéro ou d'une chaîne 
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}
const port = normalizePort(process.env.PORT || '3000')

app.set('port', port) // On spécifie le port sur lequel tourne l'application (port 3000 par défaut) 

const errorHandler = (error) => { // Recherche les différentes erreurs et les gère de manière appropriée
  if (error.syscall !== 'listen') {
    throw error
  }
  const address = server.address()
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.')
      process.exit(1)
      break
    default:
      throw error
  }
}

const server = http.createServer(app) 

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port)