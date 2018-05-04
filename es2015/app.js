//let
let favoriteCityId = "rome";
//console.log(favoriteCityId);

//const
favoriteCityId = "paris";
//console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
//console.log(citiesId);

citiesId.push("tokyo");
//console.log(citiesId);

//Création d'objet
function getWeather(cityId){
    let city = cityId;
    let temperature = 20;
    return {city, temperature};
}
const weather = getWeather("paris");
//console.log(weather);

//Affectation destructurée
const {city, temperature} = weather;
//console.log(city);
//console.log(temperature);

//Rest operator
let [parisId, nycId, ...othersCitiesId] = citiesId;
//console.log(parisId);
//console.log(nycId);
//console.log(othersCitiesId);

//Classe
class Trip{
    constructor(id, name, imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString(){
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }
    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price = newPrice;
    }

    static getDefaultTrip(){
        return new Trip ('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}

let parisTrip = new Trip("paris", 'Paris', 'img/paris.jpg');
parisTrip.price = 100;
//console.log(parisTrip);
//console.log(parisTrip.name);
//console.log(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip();
//console.log(defaultTrip);
//console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }
    toString(){
        return `Free${super.toString()}`;
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
//console.log(freeTrip.toString());



class TripService {

    constructor() {
        // TODO Set of 3 trips
        this.tripsSet = new Set();
        //
        this.tripsSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.tripsSet.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.tripsSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        // TODO return promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let trip = Array.from(this.tripsSet).find(t => t.name == tripName);
           
                if(trip){
                    resolve(trip);
                } else{
                    reject(`No trip with name ${tripName}`);
                } 
            }, 2000);
        });
    }
}

class PriceService {
    constructor() {
        // TODO Map of 2 trips
        this.tripsMap = new Map();
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        this.tripsMap.set('paris', 100);
        this.tripsMap.set('rio-de-janeiro', 800);

        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {
        // TODO return promise
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                
                let tripsPrice = this.tripsMap.get(tripId);
                if(tripsPrice){
                    resolve(tripsPrice);
                } else{
                    reject(`No price found for id ${tripId}`);
                } 
            }, 2000);
        })
    }
}

tripService = new TripService();
priceService = new PriceService();

tripService.findByName('Rio de Janeiro')
    .then(trip => console.log(trip), error => console.log(error));


tripService.findByName('Rio de Janeiro')
    .then((trip) => {
        return priceService.findPriceByTripId(trip.id);
    })
    .then(price => console.log(price), error => console.log(error));







