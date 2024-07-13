/*snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.*/


console.log("SNACK 3");

//Crea un array di oggetti che rappresentano degli animali.
const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
]
console.log("Tutti gli animali:" + animals);

//Crea un nuovo array(vuoto) per pushare la lista dei mammiferi.
const animaliMammiferi = [];

//con il ciclo for: visualizza per ogni animale la proprità classe. (ITERARE)
for (let i = 0; i < animals.length; i++) {
    const animaleCorrente = animals[i];
    const classe = animaleCorrente.classe;

    //inserimento di condizioni per riconoscere quale animale va inserito nel nuovo array
    if (classe === 'mammiferi') {
        animaliMammiferi.push(animaleCorrente);
    }
}

console.log("Lista dei mammiferi:" + animaliMammiferi);


//Per stampare tutti i mammiferi singolarmente con metodo FOREACH:
animaliMammiferi.forEach(animale => {
    console.log(`Nome: ${animale.nome}, Famiglia: ${animale.famiglia}, Classe: ${animale.classe}`);
});