import { limpaStringVazia, convertePrimeiraLetraMaiuscula } from "../util/util";

export default class SpecieModel {
    constructor(data){
        this.id = data;
        this.name = data?.name ? data.name : "";
        this.averageHeight = data?.average_height ? data.average_height : "";
        this.averageLifespan = data?.average_lifespan ? data.average_lifespan : "";
        this.classification = data?.classification ? data.classification : "";
        this.designation = data?.designation ? data.designation : "";
        this.eyeColors = data?.eye_colors ? data.eye_colors : "";
        this.hairColors = data?.hair_colors ? data.hair_colors : "";
        this.language = data?.language ? data.language : "";
        this.skinColors = data?.skin_colors ? data.skin_colors : "";
        this.homeworld = data?.homeworld ? data.homeworld : "";
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
    get averageHeight() {
        return this._averageHeight;
    }
    set averageHeight(averageHeight) {
        this._averageHeight = averageHeight;
    }
    get averageLifespan() {
        return this._averageLifespan;
    }
    set averageLifespan(averageLifespan) {
        this._averageLifespan = averageLifespan;
    }
    get classification() {
        return this._classification;
    }
    set classification(classification) {
        this._classification = classification;
    }
    get designation() {
        return this._designation;
    }
    set designation(designation) {
        this._designation = designation;
    }
    get eyeColors() {
        return this._eyeColors;
    }
    set eyeColors(eyeColors) {
        this._eyeColors = eyeColors;
    }
    get hairColors() {
        return this._hairColors;
    }
    set hairColors(hairColors) {
        this._hairColors = hairColors;
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }
    get skinColors() {
        return this._skinColors;
    }
    set skinColors(skinColors) {
        this._skinColors = skinColors;
    }
    get homeworld() {
        return this._homeworld;
    }
    set homeworld(obj){
        if(obj) {
            let array = obj.split("/");
            array = array ? array.filter(limpaStringVazia) : [];
            
            this._homeworld = array.length > 0 ? parseInt(array[array.length - 1]) : 0;
        } else {
            this._homeworld = obj.homeworld;
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
    get peoples() {
        return this._peoples;
    }
    set peoples(obj){
        if(obj && obj.people) {
            let peoples = [];
            
            obj.people.forEach(film => {
                
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