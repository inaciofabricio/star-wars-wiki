import { limpaStringVazia, convertePrimeiraLetraMaiuscula } from "../util/util";

export default class PlanetModel {
    constructor(data){
        this.id = data;
        this.name = data?.name ? data.name : "";
        this.climate = data?.climate ? data.climate : "";
        this.diameter = data?.diameter ? data.diameter : "";
        this.gravity = data?.gravity ? data.gravity : "";
        this.orbitalPeriod = data?.orbital_period ? data.orbital_period : "";
        this.rotationPeriod = data?.rotation_period ? data.rotation_period : "";
        this.surfaceWater = data?.surface_water ? data.surface_water : "";
        this.population = data?.population ? data.population : "";
        this.terrain = data?.terrain ? data.terrain : "";
        this.films = data;
        this.residents = data;
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
    get climate() {
        return this._climate;
    }
    set climate(climate) {
        this._climate = convertePrimeiraLetraMaiuscula(climate);
    }
    get diameter() {
        return this._diameter;
    }
    set diameter(diameter) {
        this._diameter = diameter === "unknown" ? "..." : `${diameter} Km`;
    }
    get gravity() {
        return this._gravity;
    }
    set gravity(gravity) {
        let g = gravity === "unknown" ? ["..."] : gravity.split(",");
        this._gravity = g[0];
    }
    get orbitalPeriod() {
        return this._orbitalPeriod;
    }
    set orbitalPeriod(orbitalPeriod) {
        this._orbitalPeriod = orbitalPeriod === "unknown" ? "..." : `${orbitalPeriod} D`;
    }
    get rotationPeriod() {
        return this._rotationPeriod;
    }
    set rotationPeriod(rotationPeriod) {
        this._rotationPeriod = rotationPeriod === "unknown" ? "..." : `${rotationPeriod} Hs`;
    }
    get surfaceWater() {
        return this._surfaceWater;
    }
    set surfaceWater(surfaceWater) {
        this._surfaceWater = surfaceWater;
    }
    get population() {
        return this._population;
    }
    set population(population) {
        this._population = population;
    }
    get terrain() {
        return this._terrain;
    }
    set terrain(terrain) {
        this._terrain = convertePrimeiraLetraMaiuscula(terrain);
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
    get residents() {
        return this._residents;
    }
    set residents(obj){
        if(obj && obj.residents) {
            let residents = [];
            
            obj.residents.forEach(film => {
                
                let array = film.split("/");
                array = array ? array.filter(limpaStringVazia) : [];
            
                if(array.length > 0) {
                    residents.push(parseInt(array[array.length - 1]));
                }
            });
            

            this._residents = residents;
        } else {
            this._residents = [];
        }
    }
    
}