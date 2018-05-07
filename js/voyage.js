"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _number) {
        this._nom = _nom;
        this._number = _number;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "number", {
        get: function () {
            return this._number;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [];
        this._sejour.push(new Sejour("StHerblain", 22));
        this._sejour.push(new Sejour("Paris", 18));
        this._sejour.push(new Sejour("Lilles", 15));
    }
    SejourService.prototype.getSejour = function (nom) {
        return this._sejour.find(function (element) { return element.nom == nom; });
    };
    return SejourService;
}());
var service = new SejourService();
var sejour = service.getSejour("Lilles");
console.log(sejour.nom);
