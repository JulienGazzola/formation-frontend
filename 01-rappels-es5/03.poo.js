function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return ("nom : " + this.nom + " prenom : " + this.prenom + " pseudo : " + this.pseudo);
    }
}
Jules = new Personne("Jules", "LEMAIRE", "jules77");
Paul = new Personne("Paul", "LEMAIRE", "paul44");

console.log(Jules.getNomComplet());