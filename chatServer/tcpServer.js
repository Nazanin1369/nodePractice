var net = require('net');

var chatServer = net.createServer(),
    clients = [];

chatServer.on('connection', function(socket) {

    socket.name = socket.remoteAddress + " - " + socket.remotePort;

    clients.push(socket);

    socket.on('data', function(data) {
        console.log(socket.name + ' > ' +  data);
    });

    socket.on('end', function() {
        clients.splice(clients.indexOf(socket), 1);
        broadcast(socket.name + " left the chat.\n");
    });

    function broadcast(message, sender) {
        clients.forEach(function(client) {
            if (client === sender) return;
            client.write(message);
        });
        console.log(message);
    }
}).listen(9000);


console.log('TCP server started on port 9000');