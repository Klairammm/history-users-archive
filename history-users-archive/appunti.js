//JAVASCRIPT

// Struttura generale:
// o	HTML -> Elementi della pagina
// o	CSS -> Lo stile degli elementi di HTML
// o	JS -> Linguaggio di programmazione che dà dinamicità alla pagina. 

// API -> Application Programming Interfaces
// Cioè, livelli extra su JS

// INTRODUZIONE

// Ordine di lettura del codice -> dall’alto al basso (tendenzialmente)

// JS è un codice interpretato, cioè viene passato al browser e, di conseguenza letto dal browser, così come noi lo scriviamo. 
// A differenza di linguaggi che sono codici compilati (come C++), cioè viene compilato in linguaggio macchina dopo che è stato scritto da una persona umana.

// Client-side -> quando apriamo il browser, il codice che arriva in parte viene scaricato. Visibile su Ispeziona e poi su Network. Quindi, tutto ciò che è client-side vuol dire che accade sul nostro browser.

// Server-side -> parte del codice che non compare sul browser ma che sta sulla macchina, sul server. Come il login. Utilizzabile, ad esempio, con Node JS

// Defer e Async -> permettono alla pagina di caricarsi e poi eseguire il codice JS. 
// Defer -> una volta che il documento si è caricato, gli script partiranno in ordine per come sono scritti, correlati tra loro.
// Sintassi:
{/* <script src='/' defer></script> */}

// Async -> una volta che il documento si è caricato, partiranno in maniera indipendente.
// Sintassi:
{/* <script src='/' async></script> */}

// Commenti -> ctrl+k+c e per togliere il commento ctrl+k+u

// LE VARIABILI

// Cosa sono? 
// Una scatola che può contenere dati indefiniti, cioè che possono cambiare nel tempo.
// Utili per avere programmi dinamici.

// Come dichiarare e inizializzare una variabile?
// Con let e accanto scrivere il nome che vogliamo darle. 
// Sintassi:
let sorella = 'moni'
// Importante è dare nomi coerenti in base ai dati che andremo a passare. Case-sensitive, quindi sorella è diverso da Sorella. Con nomi complessi usare CamelCase. Non usare accenti. L’inizializzazione avviene solo nel momento in cui le assegniamo un dato. 

// Come aggiornare una variabile?
// Non dichiararla di nuovo, basta riprendere il nome e scrivere il nuovo dato da assegnare.
// Sintassi:
sorella = 'federica'

// Tipi di variabili:
// o	Numeri
// o	Stringhe
// o	Boolean
// o	Array -> una collezione di dati: [“federica”, true, 16]. Gli array partono a contare da 0, l’indice 0. Quindi “federica” sarà in posizione (index) zero, scritto anche [0]
// o	Object -> una rappresentazione programmatica di dati della realtà: {nome: “federica”, sorella: true, eta: 16, coloreOcchi: “castano”, interessi: [“libri”, “videogiochi”, “disegno”]}

// Tipizzazione dinamica
// JS quando dichiariamo una variabile non siamo costretti a dichiararne il tipo. Quindi, ad esempio, per la variabile sorella non dobbiamo andare a specificare che è di tipo string.

// LE COSTANTI

// Cosa sono?
// Una scatola con valori immutabili. 

// Come si dichiarano e inizializzano?
const sore = 'federica'

// MATEMATICA DI BASE

// Tipi di numeri:
// o	interi -> 40
// o	float -> 3,6

// Il typeOf sarà in ogni caso number

// Metodo toFixed(), come funziona?
const number1 = 3.445253
console.log(number1.toFixed('qui mettere quanti decimale vogliamo dopo la virgola'))

// Convertire una string in un number?
const number2 = '45'
console.log( Number(number2) )

// Operatori: + - * / % **

// Operatori di incremento e di decremento: ++ --

// Operatori di assegnazione: += -= *= /=

// Operatori di comparazione: === !== (diversi da == e !=) < > <= >=
10 == 10 //-> true, verifica che il valore sia uguale
10 == '10' //-> true
10 === 10 //-> true, verifica che sia il valore che il type siano uguali
10 === '10' //-> false

// LE STRINGHE

// Per JS una stringa è un oggetto.

'Ciao sono una stringa' // scritta con le quotes 
'Ciao sono un\’altra stringa'  // con \ perché altrimenti ci sarebbe stato un errore

// Come concatenare le stringhe?
// Con l’operatore +

// Backtick con alt + 96 -> ``
// Che permettono di poter inserire dati dentro una stringa
`oggi è ${lunedì}` //-> l’indomani sarà martedì

// METODI UTILI STRINGHE

let stringa = 'stamattina a colazione ho bevuto il cappuccino'

// lunghezza -> stringa.length

// carattere specifico -> stringa[0]

// parte di stringa -> stringa.indexOf(‘ho’) -> per sapere da che indice inizia la parte che voglio (dovrebbe essere indice 23):
let indexHo = stringa.indexOf('ho')
stringa.slice(indexHo)

//cambiare maiuscolo/minuscolo-> stringa.toUpperCase() oppure stringa.toLowerCase()

//cambiare parti:
stringa.replace('bevuto', 'sorseggiato')

// GLI ARRAY

// Cosa sono?
// Una lista di valori

// Come passare in rassegna tutti i valori?
// Ciclare:
for( i = 0; i < array.length; i++)

//Da string a array
let citta = "Milano,Torino,Catania,Parma,Napoli,Venezia"
console.log(citta)
let data = citta.split(',') // perché la virgola è il separatore

// da array a string
let citta = data.join(',') // se vogliamo che il separatore sia la virgola

// aggiungere elementi:
data.push('Firenze')

// eliminare l’ultimo elemento:
data.pop()

data.unshift()
// elimina il primo elemento:
data.shift()


// IF ELSE (possibili annidamenti)

if(nome == 'Claretta') {
console.log(`Ciao ${nome}`)}
else{
console.log(`Ciao persona`)
}

// con più condizioni -> ELSE IF

if(nome == 'Claretta') {
console.log(`Ciao ${nome}`) }

else if (nome == 'Federica') {
console.log(`Ciao ${nome}`)}

else{
console.log('Ciao persona')}

// OPERATORI LOGICI

// And -> && -> tutte le condizioni devono essere soddisfatte
// Or -> || -> almeno una condizione deve essere soddisfatta
// Not -> !(condizione)  !(nome == ‘Luca’) cioè il nome non è == a Luca

// SWITCH

let name = 'Luca'

switch(name) {
	case 'Luca':
	console.log('Ciao Luca')
	break;
	case 'Marco':
	console.log('Ciao Marco')
	break;
	case 'Sara':
	console.log('Ciao Sara')
	break;
	default:
	console.log('Ciao utente sconosciuto')
}

// TERNARY OPERATOR

numero = 21
let nome = (numero < 20) ? 'Luca' : 'Sara'
//cioè se il numero è minore di 20 scrivi Luca, altrimenti scrivi Sara

// LOOP

let array = [23,13,34,56,999,101]

for (let i=0; i<array.length; i++) {

    console.log(array[i])

    //se noi ad un certo punto volessimo uscire dal loop

    if(array[i] == 56){
        break //mettere continue se vogliamo saltare solo il 56 o tutti i numeri pari -> %2 == 0
    }
}

// WHILE

let i = 0
while(i<array.length) {
    console.log(array[i-1])
    i++
}

// DO WHILE , esegue il codice e poi dopo controlla la condizione

let k = 0
do{
    console.log(array[k-1])
    k++
}while(k<array.length)

// FUNZIONI



