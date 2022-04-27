import { limpaStringVazia, convertePrimeiraLetraMaiuscula } from "../util/util";

export default class VehicleModel {
    constructor(data){
        this.id = data;
        this.name = data?.name ? data.name : "";
        this.cargoCapacity = data?.cargo_capacity ? data.cargo_capacity : "";
        this.consumables = data?.consumables ? data.consumables : "";
        this.costInCredits = data?.cost_in_credits ? data.cost_in_credits : "";
        this.crew = data?.crew ? data.crew : "";
        this.length = data?.length ? data.length : "";
        this.manufacturer = data?.manufacturer ? data.manufacturer : "";
        this.maxAtmospheringSpeed = data?.max_atmosphering_speed ? data.max_atmosphering_speed : "";
        this.model = data?.model ? data.model : "";
        this.passengers = data?.passengers ? data.passengers : "";
        this.vehicleClass = data?.vehicle_class ? data.vehicle_class : "";
        this.films = data;
        this.peoples = data;
    }

    get id() {
        return this._id;
    }
    set id(obj){
        if(obj && obj.url) {
            let array = obj.url.split("/");
            array = array ? array.filter(limpaStringVazia) : [];
            
            this._id = array.length > 0 ? parseInt(array[array.length - 1]) : 0;
        } else {
            this._id = obj.id;
        }
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = convertePrimeiraLetraMaiuscula(name);
    }

    get cargoCapacity() {
        return this._cargoCapacity;
    }
    set cargoCapacity(cargoCapacity) {
        this._cargoCapacity = cargoCapacity;
    }

    get consumables() {
        return this._consumables;
    }
    set consumables(consumables) {
        this._consumables = consumables;
    }

    get costInCredits() {
        return this._costInCredits;
    }
    set costInCredits(costInCredits) {
        this._costInCredits = costInCredits;
    }

    get crew() {
        return this._crew;
    }
    set crew(crew) {
        this._crew = crew;
    }

    get length() {
        return this._length;
    }
    set length(length) {
        this._length = `${length} m`;
    }

    get manufacturer() {
        return this._manufacturer;
    }
    set manufacturer(manufacturer) {
        this._manufacturer = manufacturer;
    }

    get maxAtmospheringSpeed() {
        return this._maxAtmospheringSpeed;
    }
    set maxAtmospheringSpeed(maxAtmospheringSpeed) {
        this._maxAtmospheringSpeed = maxAtmospheringSpeed;
    }

    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }

    get passengers() {
        return this._passengers;
    }
    set passengers(passengers) {
        this._passengers = passengers;
    }

    get vehicleClass() {
        return this._vehicleClass;
    }
    set vehicleClass(vehicleClass) {
        this._vehicleClass = vehicleClass;
    }

    get films() {
        return this._films;
    }
    set films(obj){
        if(obj && obj.films) {
            let films = [];
            
            obj.films.forEach(film => {
                
                let array = film.split("/");
                array = array ? array.filter(limpaStringVazia) : [];
            
                if(array.length > 0) {
                    films.push(parseInt(array[array.length - 1]));
                }
            });
            

            this._films = films;
        } else {
            this._films = [];
        }
    }

    get peoples() {
        return this._peoples;
    }
    set peoples(obj){
        if(obj && obj.pilots) {
            let peoples = [];
            
            obj.pilots.forEach(film => {
                
                let array = film.split("/");
                array = array ? array.filter(limpaStringVazia) : [];
            
                if(array.length > 0) {
                    peoples.push(parseInt(array[array.length - 1]));
                }
            });
            

            this._peoples = peoples;
        } else {
            this._peoples = [];
        }
    }
    
}