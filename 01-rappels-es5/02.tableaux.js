var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(element){
    console.log(element);
});

function filtreLettre(ville){
    return ville.includes('a');
}
function filtreTiret(ville){
    return ville.includes('-');
}

function filtreEspace(ville){
    return ville.includes(' ');
}

console.log(villes.every(filtreLettre));
console.log(villes.some(filtreTiret));

var villesSansTiretSansEspace = villes.filter(ville => filtreEspace(ville) == false).filter(ville => filtreTiret(ville) == false);
console.log(villesSansTiretSansEspace);

