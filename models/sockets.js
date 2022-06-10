const Markers = require("./markers.model");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.markers = new Markers();
        
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log({newUser: socket.id});

            socket.emit('markers-actives', this.markers.actives)

            socket.on('marker-new', (marker) => {
                console.log({markerNew: marker});
                this.markers.addMarker(marker);
                
                socket.broadcast.emit('marker-new', marker);

            })

            socket.on('marker-move', (marker) => {
                this.markers.updateMarker(marker);
                socket.broadcast.emit('marker-move', marker);
            })
        
        });
    }


}


module.exports = Sockets;