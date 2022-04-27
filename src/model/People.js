import { limpaStringVazia, convertePrimeiraLetraMaiuscula } from "../util/util";

export default class PeopleModel {
    constructor(data){
        this.id = data;
        this.name = data?.name ? data.name : "";
        this.homeworld = data;
        this.gender = data?.gender ? data.gender : "";
        this.height = data?.height ? data.height : "";
        this.mass = data?.mass ? data.mass : "";
        this.eyeColor = data?.eye_color ? data.eye_color : "";
        this.hairColor = data?.hair_color ? data.hair_color : "";
        this.skinColor = data?.skin_color ? data.skin_color : "";
        this.birthYear = data?.birth_year ? data.birth_year : "";
        this.species = data;
        this.films = data;
        this.starships = data;
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
        this._name = name;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = convertePrimeiraLetraMaiuscula(gender);
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = `${String(height/100).replace(".",",")}m`;
    }
    get mass() {
        return this._mass;
    }
    set mass(mass) {
        this._mass = `${mass}kg`;
    }
    get homeworld() {
        return this._homeworld;
    }
    set homeworld(obj){
        if(obj && obj.homeworld) {
            let array = obj.homeworld.split("/");
            array = array ? array.filter(limpaStringVazia) : [];
            
            this._homeworld = array.length > 0 ? parseInt(array[array.length - 1]) : 0;
        } else {
            this._homeworld = obj.homeworld;
        }
    }
    get eyeColor() {
        return this._eyeColor;
    }
    set eyeColor(eyeColor) {
        this._eyeColor = convertePrimeiraLetraMaiuscula(eyeColor);
    }
    get hairColor() {
        return this._hairColor;
    }
    set hairColor(hairColor) {
        this._hairColor = convertePrimeiraLetraMaiuscula(hairColor);
    }
    get skinColor() {
        return this._skinColor;
    }
    set skinColor(skinColor) {
        this._skinColor = convertePrimeiraLetraMaiuscula(skinColor);
    }
    get birthYear() {
        return this._birthYear;
    }
    set birthYear(birthYear) {
        this._birthYear = convertePrimeiraLetraMaiuscula(birthYear);
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