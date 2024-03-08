DAY 6
Esercizio di oggi: Laravel Boolfolio - API
Ciao ragazzi,
continuiamo a lavorare sul codice dei giorni scorsi, ma in una nuova repo.
L’esercizio di oggi è suddiviso in milestone ed è importante che ne seguiate l’ordine.

Milestone 1
nome repo 1: laravel-api
Aggiungiamo al nostro progetto Laravel una nuovo Api/ProjectController. Questo controller risponderà a delle richieste via API e si occuperà di restituire la lista dei progetti presenti nel database in formato json.

Milestone 2
Testiamo la chiamata API tramite Postman e assicuriamoci di ricevere i dati correttamente.

Milestone 3
nome repo 2: vite-boolfolio
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.
Colleghiamo questo progetto ad una repo separata.

Milestone 4
Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end.
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.

Milestone 5
Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.

Bonus:
Gestire la paginazione dei risultati

DAY 7
Continuate a lavorare sulla stessa repo di venerdì. Implementate Vue Router nel vostro progetto e create le rotte con le relative componenti da mostrare.
Esercizio Base: Realizzare una homepage e la pagina con l'elenco dei progetti. Implementando vue router verificare che cliccando sulle voci di menù apposite, si atterri nella pagina corretta.
BONUS:
Gestire la pagina 404 per quelle rotte che non hanno una componente specifica associata

DAY 8
Continuate a lavorare sulla repo dei giorni scorsi e realizzate la pagina di dettaglio dei progetti. Dovete quindi creare una rotta apposita nel file router.js in cui passate il parametro e la relativa componente pagina. Create poi l'endpoint nel file api.php ed il metodo show nel controller.
Bonus:
Creare una pagina in cui mostrare le i progetti appartenenti ad una singola categoria.

DAY 9
Ciao a tutti, oggi continuate con l'esercizio Boolfolio implementando una form per inviare una mail. Seguite i passaggi visti a lezione.
Bonus: gestite gli errori ed i relativi messaggi se l'utente sbaglia ad inserire valori nei campi
SUPER BONUS: creare una Thank You page alla quale essere reindirizzati se la mail viene inviata con successo.