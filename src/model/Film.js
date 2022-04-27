import { limpaStringVazia, convertePrimeiraLetraMaiuscula } from "../util/util";

export default class FilmModel {
    constructor(data){
        this.id = data;
        this.name = data?.title ? data.title : "";
        this.director = data?.director ? data.director : "";
        this.producer = data?.producer ? data.producer : "";
        this.episode = data?.episode_id ? data.episode_id : "";
        this.characters = data;
        this.planets = data;
        this.starships = data;
        this.species = data;
        this.vehicles = data;
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
    get director() {
        return this._director;
    }
    set director(director) {
        this._director = director;
    }
    get producer() {
        return this._producer;
    }
    set producer(producer) {
        this._producer = producer;
    }
    get episode() {
        return this._episode;
    }
    set episode(episode) {
        this._episode = episode;
    }
    get characters() {
        return this._characters;
    }
    set characters(obj){
        if(obj && obj.characters) {
            let characters = [];
            
            obj.characters.forEach(film => {
                
                let array = film.split("/");
                array = array ? array.filter(limpaStringVazia) : [];
            
                if(array.length > 0) {
                    characters.push(parseInt(array[array.length - 1]));
                }
            });

            this._characters = characters;
        } else {
            this._characters = [];
        }
    }
    get planets() {
        return this._planets;
    }
    set planets(obj){
        if(obj && obj.planets) {
            let planets = [];
            
            obj.planets.forEach(film => {
                
                let array = film.split("/");
                array = array ? array.filter(limpaStringVazia) : [];
            
                if(array.length > 0) {
                    planets.push(parseInt(array[array.length - 1]));
                }
            });

            this._planets = planets;
        } else {
            this._planets = [];
        }
    }
    get species() {
        return this._species;
    }
    set species(obj){
        if(obj && obj.species) {
            let species = [];
            
            obj.species.forEach(film => {
                
                let array = film.split("/");
                array = array ? array.filter(limpaStringVazia) : [];
            
                if(array.length > 0) {
                    species.push(parseInt(array[array.length - 1]));
                }
            });
            

            this._species = species;
        } else {
            this._species = [];
        }
    }
    get starships() {
        return this._starships;
    }
    set starships(obj){
        if(obj && obj.starships) {
            let starships = [];
            
            obj.starships.forEach(film => {
                
                let array = film.split("/");
                array = array ? array.filter(limpaStringVazia) : [];
            
                if(array.length > 0) {
                    starships.push(parseInt(array[array.length - 1]));
                }
            });
            

            this._starships = starships;
        } else {
            this._starships = [];
        }
    }
    get vehicles() {
        return this._vehicles;
    }
    set vehicles(obj){
        if(obj && obj.vehicles) {
            let vehicles = [];
            
            obj.vehicles.forEach(film => {
                
                let array = film.split("/");
                array = array ? array.filter(limpaStringVazia) : [];
            
                if(array.length > 0) {
                    vehicles.push(parseInt(array[array.length - 1]));
                }
            });
            

            this._vehicles = vehicles;
        } else {
            this._vehicles = [];
        }
    }
    
}