function Ship(startingPort) {
    this.startingPort = startingPort;
    this.passengerNos = 0;
};

Ship.prototype.setSail = function() {
//ship.startingport needs to be falsy
    this.startingPort = "";
}

module.exports = Ship;