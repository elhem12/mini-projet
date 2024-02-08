const express = require('express');
const http = require('http');
const port = 3000;
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// Gérez les connexions WebSocket
io.on('connection', (socket) => {
    console.log('Nouvelle connexion WebSocket établie');
    // Écoutez les messages du client
    socket.on('chatMessage', (message) => {
        // Émettez le message à tous les clients connectés
        io.emit('chatMessage', message);
    });
});


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// Gérez les connexions WebSocket
io.on('connection', (socket) => {
    console.log('Nouvelle connexion WebSocket établie');
    // Écoutez les messages du client
    socket.on('chatMessage', (message) => {
        // Émettez le message à tous les clients connectés
        io.emit('chatMessage', message);
    });
});

server.listen(port, () => {
    console.log("Serveur WebSocket écoutant sur le port ${port}");
});