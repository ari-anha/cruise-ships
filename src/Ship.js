function Ship(startingPort) {
    this.currentPort = startingPort;
    this.passengerNos = 0;
};

Ship.prototype.setSail = function() {
    this.currentPort = "";
};

/*
dock(port) {
    this.currentPort = port;
}


Ship.prototype.dock = function(port) {
    this.currentPort = port;
};
*/
module.exports = Ship;