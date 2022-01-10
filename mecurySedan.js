//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

import Vehicle from "./vehicleBaseClass.js";

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take everyone.");
            }
        }
    }

    start() {
        if(this.fuel > 0) {
            console.log('The vehicle has started!')
            return this.started = true;
        } else {
            console.log('The vehicle does not have sufficient fuel to start.')
            return this.started = false;
        }
    }

    scheduleService(mileage) {
        if(mileage > 30000) {
            console.log('Time for a service check!')
            this.scheduleService == true;
            return this.scheduleService;
        }
    }
}