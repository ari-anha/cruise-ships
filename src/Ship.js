class Ship {
    constructor(startingPort) {
        this.currentPort = startingPort;
    }

    setSail() {
        this.currentPort = null;
    }

    dock(port) {
        this.currentPort = port;
    }
}

module.exports = Ship;