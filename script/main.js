/***************************************************************************\
 * 
 * ESERCIZIO: OGGETTO STUDENTI
 * 
 *  1) Creare un oggetto che descriva uno studente
 *  -  lo studente avrà  le seguenti proprietà: nome, cognome e età.
 *  3) Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
 * 
\**************************************************************************/

jQuery(document).ready(function($) {
    console.log('JS è stato inserito correttamente');
    
    var student = {
        nome : 'Carmine',
        cognome: 'Lentisco',
        città: 'Parma' 
    }

    for ( var key in student ) {
        console.log(  key + ' : ' + student[key] );
    }

} );