//ENUM TYPES
const TYPES = {
	plante: 1,
	eau: 2,
	feu: 3
}

//ATTAQUE
function Attaque(element, niveauEvolution) {
	this.element = element;
	this.niveau = niveauEvolution;
	this.puissance = this.niveau * 10;
}

//POKEMON - Classe de base
function Pokemon(niveauEvol) {
	if (this.constructor === Pokemon) {
		throw new Error("Pokemon est une classe abstraite, instanciation impossible");
	}

	this.nom = "";
	this.type = -1;
	this.niveauEvol = niveauEvol;
	this.vie = this.niveauEvol * 100;
	this.nombreAttaque = 0;
}
Pokemon.prototype.attaquer = function() {
	this.nombreAttaque++;
	let element = this.nombreAttaque > 0 && (this.nombreAttaque % 5 === 0) ? this.type : null;
	const attaque = new Attaque(element, this.niveauEvol);
	console.log(`${this.nom} lance une attaque ${element ? "élémentale " : ""}avec une puissance de ${attaque.puissance}`);
	return attaque;
}
Pokemon.prototype.subir = function (attaque) {
	let puissanceAttaque = attaque.puissance;
	if (attaque.element) {
		const effetElement = this.determinerActionElement(attaque.element);
		if (effetElement === true) {
			puissanceAttaque = puissanceAttaque * 0.5;
			console.log("Ce n'est pas très efficace");
		} else if (effetElement === false) {
			puissanceAttaque = puissanceAttaque * 1.5;
			console.log("C'est très efficace !")
		}
	}
	this.vie -= puissanceAttaque;
	console.log(`${this.nom} subit ${puissanceAttaque} de dégâts, il lui reste ${this.vie} PV`);
	if (this.vie < 0) {
		console.log(`${this.nom} est HS`);
		return false;
	} else if (this.vie < 15) {
		console.log(`${this.nom} s'enfuit`);
		return null;
	}
	return true;
}
Pokemon.prototype.determinerActionElement = function (element) {
	switch(element) {
		case TYPES.plante:
			if (this.type === TYPES.eau) {
				return false;
			} else if (this.type === TYPES.feu) {
				return true;
			}
			break;
		case TYPES.eau:
			if (this.type === TYPES.feu) {
				return false;
			} else if (this.type === TYPES.plante) {
				return true;
			}
			break;
		case TYPES.feu:
			if (this.type === TYPES.plante) {
				return false;
			} else if (this.type === TYPES.eau) {
				return true;
			}
			break;
	}

	return null;
}

//PLANTE
function PokemonPlante(niveauEvol) {
	if (this.constructor === PokemonPlante) {
		throw new Error("PokemonPlante est une classe abstraite, instanciation impossible");
	}
	Pokemon.call(this, niveauEvol);
	this.type = TYPES.plante;
}
PokemonPlante.prototype = Object.create(Pokemon.prototype);
Object.defineProperty(PokemonPlante.prototype, "constructor", {
	value: PokemonPlante,
	enumerable: false,
	writable: true,
});

function Bulbizarre() {
	PokemonPlante.call(this, 1);
	this.nom = "Bulbizarre";
}
Bulbizarre.prototype = Object.create(PokemonPlante.prototype);
Object.defineProperty(Bulbizarre.prototype, "constructor", {
	value: Bulbizarre,
	enumerable: false,
	writable: true,
});
function Herbizarre() {
	PokemonPlante.call(this, 2);
	this.nom = "Herbizarre";
}
Herbizarre.prototype = Object.create(PokemonPlante.prototype);
Object.defineProperty(Herbizarre.prototype, "constructor", {
	value: Herbizarre,
	enumerable: false,
	writable: true,
});
function Florizarre() {
	PokemonPlante.call(this, 3);
	this.nom = "Florizarre";
}
Florizarre.prototype = Object.create(PokemonPlante.prototype);
Object.defineProperty(Florizarre.prototype, "constructor", {
	value: Florizarre,
	enumerable: false,
	writable: true,
});

//EAU
function PokemonEau(niveauEvol) {
	if (this.constructor === PokemonEau) {
		throw new Error("PokemonEau est une classe abstraite, instanciation impossible");
	}
	Pokemon.call(this, niveauEvol);
	this.type = TYPES.eau;
}
PokemonEau.prototype = Object.create(Pokemon.prototype);
Object.defineProperty(PokemonEau.prototype, "constructor", {
	value: PokemonEau,
	enumerable: false,
	writable: true,
});

function Carapuce() {
	PokemonEau.call(this, 1);
	this.nom = "Carapuce";
}
Carapuce.prototype = Object.create(PokemonEau.prototype);
Object.defineProperty(Carapuce.prototype, "constructor", {
	value: Carapuce,
	enumerable: false,
	writable: true,
});
function Carabaffe() {
	PokemonEau.call(this, 2);
	this.nom = "Carabaffe";
}
Carabaffe.prototype = Object.create(PokemonEau.prototype);
Object.defineProperty(Carabaffe.prototype, "constructor", {
	value: Carabaffe,
	enumerable: false,
	writable: true,
});
function Tortank() {
	PokemonEau.call(this, 3);
	this.nom = "Tortank";
}
Tortank.prototype = Object.create(PokemonEau.prototype);
Object.defineProperty(Tortank.prototype, "constructor", {
	value: Tortank,
	enumerable: false,
	writable: true,
});

//FEU
function PokemonFeu(niveauEvol) {
	console.log("PokemonFeu this", this);
	if (this.constructor === PokemonFeu) {
		throw new Error("PokemonFeu est une classe abstraite, instanciation impossible");
	}
	Pokemon.call(this, niveauEvol);
	this.type = TYPES.feu;
}
PokemonFeu.prototype = Object.create(Pokemon.prototype);
Object.defineProperty(PokemonFeu.prototype, "constructor", {
	value: PokemonFeu,
	enumerable: false,
	writable: true,
});

function Salameche() {
	console.log("this SalaMeche", this);
	PokemonFeu.call(this, 1);
	this.nom = "Salameche";
}
Salameche.prototype = Object.create(PokemonFeu.prototype);
Object.defineProperty(Salameche.prototype, "constructor", {
	value: Salameche,
	enumerable: false,
	writable: true,
});
function Reptincel() {
	PokemonFeu.call(this, 2);
	this.nom = "Reptincel";
}
Reptincel.prototype = Object.create(PokemonFeu.prototype);
Object.defineProperty(Reptincel.prototype, "constructor", {
	value: Reptincel,
	enumerable: false,
	writable: true,
});
function Dracofeu() {
	PokemonFeu.call(this, 3);
	this.nom = "Dracofeu";
}
Dracofeu.prototype = Object.create(PokemonFeu.prototype);
Object.defineProperty(Dracofeu.prototype, "constructor", {
	value: Dracofeu,
	enumerable: false,
	writable: true,
});

//COMBAT
function Combat() {
}
//Méthode "statique"
Combat.lancerCombat = function(pokemon1, pokemon2) {
	let pokemonAttaque;
	let pokemonDefense;
	const pileOuFace = Math.random() < 0.5;
	if (pileOuFace) {
		pokemonAttaque = pokemon1;
		pokemonDefense = pokemon2;
	} else {
		pokemonAttaque = pokemon2;
		pokemonDefense = pokemon1;
	}

	let continuerCombat = true;
	let tours = 1;
	while(continuerCombat) {
		console.log(`---- TOUR ${tours++} ----`);
		const attaque = pokemonAttaque.attaquer();
		const etatPokemonDefense = pokemonDefense.subir(attaque);
		if (etatPokemonDefense === null || etatPokemonDefense === false) {
			const typeVictoire = etatPokemonDefense === null ? "forfait" : "ko";
			console.log(`Fin du combat, ${pokemonAttaque.nom} vainqueur par ${typeVictoire}`);
			break;
		}
		const variableTemporaire = pokemonAttaque;
		pokemonAttaque = pokemonDefense;
		pokemonDefense = variableTemporaire;
	}
}

const pk1 = new Reptincel();
const pk2 = new Carapuce();
Combat.lancerCombat(pk1, pk2);