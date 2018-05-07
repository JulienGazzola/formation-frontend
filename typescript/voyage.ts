class Sejour {
    constructor(private _nom:string , private _number:number){
    }

    get nom() {
        return this._nom
    }

    get number() {
        return this._number;
    }

}

class SejourService {
    private _sejour:Sejour[] = [];
    constructor() { 
        this._sejour.push(new Sejour("StHerblain", 22));
        this._sejour.push(new Sejour("Paris", 18));
        this._sejour.push(new Sejour("Lilles", 15));
    }

    getSejour(nom:string):any {
       return this._sejour.find(element => element.nom == nom);
    }
}

let service = new SejourService();
let sejour = service.getSejour("Lilles");
console.log(sejour.nom);