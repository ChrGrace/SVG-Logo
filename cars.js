class Car {
    constructor(color, make, model) {
        this.color = color;
        this.make = make;
        this.model = model;
    }
}

class Toyota extends Car {
    drift() {
        console.log('My '+this.color+ ' Toyota is Drifting!');
    }
}

module.exports = { Car, Toyota };