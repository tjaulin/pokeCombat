function Pokemon(niveauEvolution) {
    if (this.constructor === Pokemon) {
        throw new Error();
    }

	this.nom = "";
    this.type = -1;
    this.niveauEvolution = niveauEvolution;
    this.vie = 100 * niveauEvolution;
}

//Création des types
const types = {
    Plante: 1,
    Eau: 2,
    Feu: 3
}

//Création des types de pokémon
function pokemonFeu(){
    Pokemon.call(this);
    this.type = types.Feu;
}

pokemonFeu.prototype = Object.create(Pokemon.prototype);
 
Object.defineProperty(pokemonFeu.prototype, 'constructor', {
	value: pokemonFeu,
	enumerable: false,
	writable: true,
});

function pokemonPlante(){
    Pokemon.call(this);
    this.type = types.Plante;
}

pokemonPlante.prototype = Object.create(Pokemon.prototype);

Object.defineProperty(pokemonPlante.prototype, 'constructor', {
	value: pokemonPlante,
	enumerable: false,
	writable: true,
});

function pokemonEau(){
    Pokemon.call(this);
    this.type = types.Eau;
}

pokemonEau.prototype = Object.create(Pokemon.prototype);

Object.defineProperty(pokemonEau.prototype, 'constructor', {
	value: pokemonEau,
	enumerable: false,
	writable: true,
});

//création des pokémons de type feu

function Salameche(){
    pokemonFeu.call(this);
    this.nom = "Salamèche";
    this.niveauEvolution = 1;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Salameche.prototype = Object.create(pokemonEau.prototype);

Object.defineProperty(Salameche.prototype, 'constructor', {
	value: Salameche,
	enumerable: false,
	writable: true,
});

function Reptincel(){
    pokemonFeu.call(this);
    this.nom = "Reptincel";
    this.niveauEvolution = 2;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Reptincel.prototype = Object.create(pokemonFeu.prototype);

Object.defineProperty(Reptincel.prototype, 'constructor', {
	value: Reptincel,
	enumerable: false,
	writable: true,
});

function Dracaufeu(){
    pokemonFeu.call(this);
    this.nom = "Dracaufeu";
    this.niveauEvolution = 3;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Dracaufeu.prototype = Object.create(pokemonFeu.prototype);

Object.defineProperty(Dracaufeu.prototype, 'constructor', {
	value: Dracaufeu,
	enumerable: false,
	writable: true,
});

console.log(Salameche(), Reptincel(), Dracaufeu());

//Création des pokemons de type plante

function Bulbizarre(){
    pokemonPlante.call(this);
    this.nom = "Bulbizarre";
    this.niveauEvolution = 1;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Bulbizarre.prototype = Object.create(pokemonPlante.prototype);

Object.defineProperty(Bulbizarre.prototype, 'constructor', {
	value: Bulbizarre,
	enumerable: false,
	writable: true,
});

function Herbizarre(){
    pokemonPlante.call(this);
    this.nom = "Herbizarre";
    this.niveauEvolution = 2;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Herbizarre.prototype = Object.create(pokemonPlante.prototype);

Object.defineProperty(Herbizarre.prototype, 'constructor', {
	value: Herbizarre,
	enumerable: false,
	writable: true,
});

function Florizarre(){
    pokemonPlante.call(this);
    this.nom = "Florizarre";
    this.niveauEvolution = 3;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Florizarre.prototype = Object.create(pokemonPlante.prototype);

Object.defineProperty(Florizarre.prototype, 'constructor', {
	value: Florizarre,
	enumerable: false,
	writable: true,
});

console.log(Bulbizarre(), Herbizarre(), Florizarre());

//Création des pokemons de type eau
function Carapuce(){
    pokemonEau.call(this);
    this.nom = "Carapuce";
    this.niveauEvolution = 1;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Carapuce.prototype = Object.create(pokemonEau.prototype);

Object.defineProperty(Carapuce.prototype, 'constructor', {
	value: Carapuce,
	enumerable: false,
	writable: true,
});

function Carabaffe(){
    pokemonEau.call(this);
    this.nom = "Carabaffe";
    this.niveauEvolution = 2;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Carabaffe.prototype = Object.create(pokemonEau.prototype);

Object.defineProperty(Carabaffe.prototype, 'constructor', {
	value: Carabaffe,
	enumerable: false,
	writable: true,
});

function Tortank(){
    pokemonEau.call(this);
    this.nom = "Tortank";
    this.niveauEvolution = 3;
    this.vie = 100 * niveauEvolution;
    //let tab = [this.nom, this.type, this.niveauEvolution];
    let obj = {
        nom: this.nom,
        type: this.type,
        niveauEvolution: this.niveauEvolution,
        vie: this.vie
    }

    return obj;
}

Tortank.prototype = Object.create(pokemonEau.prototype);

Object.defineProperty(Tortank.prototype, 'constructor', {
	value: Tortank,
	enumerable: false,
	writable: true,
});

console.log(Carapuce(), Carabaffe(), Tortank());

//Création des attaques

function Attaque(element, niveau, puissance) {
    this.element = element;
    this.niveau = niveau;
    this.puissance = puissance; 
    this.puissance = 10 * niveau;
    this.commencerCombat = ()=>{

    }
}

function Combat(poke1, poke2) {
    this.poke1 = poke1;
    this.poke2 = poke2;

}

//Création des attaques
let attaquePlante = new Attaque(types.Plante,);
