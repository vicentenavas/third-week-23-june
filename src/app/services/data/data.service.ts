import { Injectable } from '@angular/core';
import { Servizio, img, siOcuppa } from 'src/app/models/shared/model';
import { Observable, of, throwError } from 'rxjs';
import { NavigationEnd, Route, Router } from '@angular/router';
import { Contact } from 'src/app/models/shared/model';
import { Socio } from 'src/app/models/shared/model';
@Injectable({
  providedIn: 'root',
})
export class DataService {



  constructor(private router: Router) { }


  //all the services of the interprice, i decided to set an array of imgs to make the code more esay and in that way model 
  //the ngFor without the necesity of take an specific img, example <img [src]="item.img[0].url" alt="" class="md:h-88 h-screen w-full object-none opacity-80">
  //here the img 0 is the img of home, the img of serviziDetail will be the the [1] in that way is esaier to create and understand the html
  //the same dilema with description and siOCuppa   !!
  
  private servizioList: Servizio[] = [
    {
      id: 0,
      name: 'Impianti Termoidraulici',
      homeDescription: '',
      homeTitle: 'Termoidraulici',
      description: 
      [
        {id: 1, text: "L’attività di progettazione, viene svolta nell’ambito di impianti termoidraulici per il settore civile e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori....",},
        {id: 2, text: "Progettazione impianti termoidraulici e reti trasporto gas e liquidi"},
        {id: 3, text: "L’attività di progettazione, viene svolta nell’ambito di impianti termoidraulici per il settore civile e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori."}
      ],
    
        img: [{ id: 1, url: '/assets/img/home/img33.jpg' },
      {id:2, url: '/assets/img/home/img18.jpg' }],
        siOcuppa:[
          {id:1, info:"impianti di climatizzazione nel settore civile, industriale, ospedaliero eccs"},
          {id:2, info:"reti energetiche per teleriscaldamento abbinati a sistemi di generazione, cogenerazione o trigenerazione"},
          {id:3, info:"reti acquedottistiche urbane e extraurbane"},
          {id:4, info:"reti smaltimento acque bianche"},
          {id:5, info:"reti fognarie"},
          {id:6, info:"centrali di produzione aria propanata e centrali di stoccaggio gas"},
          {id:7, info:"impianti gas medicali in ambienti ad uso medico"},
          {id:8, info:"impianti di rilevazione incendio e/o spegnimento"},
          {id:9, info:"reti cittadine di distribuzione gas metano ad uso civile ed industriale in BP"},
          {id:10, info:"reti di distribuzione gas naturale, metano, GPL, aria propanata, aria compressa, ecc."},
          {id:11, info:"impianti a biomassa o biogas"},
          {id:12, info:"impianti solari o di solar cooling"},
          {id:13, info:"impianti geotermici"},
          {id:14, info:"impianti idroelettrici"},
          {id:15, info:"impianti di produzione e trasporto vapore e/o acqua surriscaldata nel settore industriale e ospedaliero"},
          {id:16, info:"progettazioni antincendio"},
          {id:17, info:"impianti di cogenerazione o rigenerazione"},
          {id:18, info:"analisi e simulazioni energetiche"},
          {id:19, info:"piani energetici ambientali d’ambito"},
          {id:20, info:"green buildings"}
  
        ]
    },

    {
      id: 1,
      name: 'Impianti Elettrici',
      homeDescription: '',
      homeTitle: 'Impianti Elettrici',
      description:
       [
        {id: 1, text: "L’attività di progettazione elettrica viene svolta per impianti elettrici MT e BT nel settore civile, industriale e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori....",},
        {id: 2, text: "L’attività di progettazione elettrica viene svolta per impianti elettrici MT e BT nel settore civile, industriale e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori."},
   
      ],
      img: [{ id: 1, url: '/assets/img/home/img13.jpg' },
      { id: 1, url: '/assets/img/home/img19.jpg' }],
      
      siOcuppa:[
        {id: 0, info: "Impianti in luoghi particolari ad alto rischio di incendio, locali di pubblico spettacolo, ambienti con pericolo di esplosione, ad uso medico e di sicurezza."},
        {id: 1, info: "Reti cablate."},
        {id: 2, info: "Impianti di rivelazione incendio e antintrusione."},
        {id: 3, info: "Progettazione di impianti parafulmine."},
        {id: 4, info: "Impianti di illuminazione pubblica con valutazione economica attualizzata delle diverse tipologie in uso."},
        {id: 5, info: "Impianti fotovoltaici."},
        {id: 6, info: "Analisi dei carichi, delle contemporaneità e dei consumi di energia."}

      ]
    },
    
    {
      id: 2,
      name: 'Progettazione Architettonica',
      homeDescription: '',
      homeTitle: 'Progettazione Architettonica',
      description: [
        {id: 1, text: "L’attività di progettazione architettonica è volta alla realizzazione di opere pubbliche e di opere private, con particolare attenzione ai canoni di risparmio energetico e di consulenza alla progettazione “efficiente”, con studio dei particolari esecutivi e dell’eliminazione di ponti termici ed acustici....",},
        {id: 2, text: "Progettazione architettonica e strutturale"},
        {id: 3, text: "L’attività di progettazione architettonica è volta alla realizzazione di opere pubbliche e di opere private, con particolare attenzione ai canoni di risparmio energetico e di consulenza alla progettazione “efficiente”, con studio dei particolari esecutivi e dell’eliminazione di ponti termici ed acustici."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img29.jpg' },
      { id: 2, url: '/assets/img/home/img20.jpg' }],
      
      siOcuppa:[
        {id:1, info: "edifici residenziali a basso impatto ambientale e a basso consumo"},
        {id:2, info: "edifici di importanza pubblica"},
        {id:3, info: "edifici tutelati dai beni culturali"},
        {id:4, info: "responsabili di progetto e coordinamento progettazione"},
        {id:5, info: "strutture architettoniche speciali quali serre fotovoltaiche o coperture in legno di grandi dimensioni"},
        {id:6, info: "interventi di riqualificazione energetica di edifici esistenti"},
     
        
      ]
    },
    {
      id: 3,
      name: 'Illuminazione Pubblica',
      homeDescription: '',
      homeTitle: 'Illuminazione Pubblica',
      description: [
        {id: 1, text: "Redazione e sviluppo piani regolatori di illuminazione comunale.....", },
        {id: 2, text: "Redazione e sviluppo Piani Regolatori di Illuminazione Comunale", },
        {id: 3, text: "L’attività di sviluppo dei piani regolatori di illuminazione pubblica richiesti dalla Legge Provinciale n.16/2007 viene svolta in stretto contatto con l’amministrazione."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img17.jpg' },
      { id: 2, url: '/assets/img/home/img21.png' }],
      
      siOcuppa:[
        {id: 0, info: "Identificazione degli obiettivi del Piano."},
{id: 1, info: "Rilievo dello stato attuale."},
{id: 2, info: "Formulazione di una soluzione integrata per l'illuminazione."},
{id: 3, info: "Definizione della distribuzione dei punti luce."},
{id: 4, info: "Specifica delle prestazioni richieste per le singole zone."},
{id: 5, info: "Selezione delle tipologie di riferimento costruttive e impiantistiche."},
{id: 6, info: "Considerazione dell'inserimento ambientale."},
{id: 7, info: "Classificazione delle strade secondo la normativa UNI e il codice della strada."},
{id: 8, info: "Elaborazione della prima bozza da condividere con l'amministrazione comunale."},
{id: 9, info: "Fase propedeutica per la stesura finale del piano."},
{id: 10, info: "Consegna del Piano alla Committenza per l'approvazione."},
{id: 11, info: "Inserimento del Piano nel Regolamento Edilizio Comunale."},
     
      ]
    },
    {
      id: 4,
      name: 'Certificazioni Energetiche',
      homeDescription: '',
      homeTitle: 'Certificazioni Energetiche',
      description: [
        {id: 1, text: "L’organico della Società è costituito da Professionisti qualificatisi nelle varie forme della certificazione energetica......",},
        {id: 2, text: "L’organico della Società è costituito da Professionisti qualificatisi nelle varie forme della certificazione energetica. Stea Progetto sviluppa tutti quei concetti, sia architettonici sia impiantistici sia di cantiere, che stanno alla base delle costruzioni civili certificate."},
        {id: 3, text: "Compito della Società è fornire tutte le informazioni che possano poi portare ad una scelta consapevole e corretta dal punto di vista normativo, anche alla luce dell’entrata in vigore del D.M. 26 giugno 2015, le Linee guida nazionali per la certificazione energetica degli edifici." }
      ],
      img: [{ id: 1, url: '/assets/img/home/img10.jpg' },
    {id:2, url: '/assets/img/home/img25.png'}],
      
      siOcuppa:[
        {id:1, info: "il sistema CasaClima di Bolzano"},
        {id:2, info: "certificazioni imposte dalla Provincia Autonoma di Trento per la costruzione di edifici pubblic"},
        {id:3, info: "il sistema LEED"},
        {id:4, info: "certificazione ARCA"},
   
      ]
    },
    {
      id: 5,
      name: 'Risparmio Energetico',
      homeDescription: '',
      homeTitle: 'Risparmio Energetico',
      description: [
        {id: 1, text: "Stea Progetto affronta l’argomento delle analisi energetiche ponendo l’attenzione a tutti gli aspetti in cui la problematica si articola......",},
        {id: 2, text: 'studio per analizzare il fabbisogno di energia elettrica. Partendo dai dati di consumo di prodotti petroliferi per il riscaldamento e dalla richiesta misurata dalla rete elettrica, lo studio illustra le attuali esigenze dell’utenza. Considerazioni sulla destinazione d’uso e sul tipo di attività consentono di dividere i consumi per comparti.'},
        {id: 3, text: 'analisi le fonti di approvvigionamento. Una volta calcolati i fabbisogni si analizzano le fonti di approvvigionamento, cioè le disponibilità di materie prime in termini di combustibili, e gli impianti di produzione, di calore ed elettricità. Il bilancio energetico valuta così le diverse modalità di produzione con particolare focus alle energie rinnovabili ed assimilate.'},


      ],
      img: [{ id: 1, url: '/assets/img/home/img32.jpg' }],
      
      siOcuppa:[
        {id:1, info: 'Approntamento del bilancio energetico complessivo vanno definendo alcuni obiettivi nel medio e lungo periodo operando attraverso interventi su più livelli:'},
        {id:2, info: 'interventi per la riduzione dei consumi;'},
        {id: 3, info: 'aumento della produzione da energie rinnovabili; '}, 
        {id:4 , info: 'promozione di un utilizzo efficiente dell’energia.'},
        {id:5, info: 'Gli obiettivi non possono prescindere per un verso dallo sviluppo previsto, per l’altro dai vincoli imposti dagli strumenti di pianificazione urbanistica, ovvero i PRG vigenti. Per il raggiungimento degli obiettivi vendono indicate le modalità di utilizzo degli incentivi presenti sia a livello nazionale sia a livello locale ed i possibili assetti societari rivolti alla gestione delle iniziative nel ramo energetico.'}
      ]
    },
    {
      id: 6,
      name: 'Sicurezza Cantieri',
      homeDescription: '',
      homeTitle: 'Sicurezza Cantieri',
      description: [
        {id: 1, text: "La nostra struttura svolge attività di coordinamento della sicurezza mediante predisposizione di Piani di Sicurezza e Coordinamento in fase progettuale e attività diretta di prevenzione e controllo presso i cantieri durante la fase esecutiva dell’opera......",},
        {id: 2, text: "Tra le attività svolte nei cantieri la Sicurezza è divenuta, con il passare degli anni, un argomento sempre di maggiore importanza. La nostra struttura ottempera alle disposizioni normative e legislative in ai sensi del Decreto Legislativo 81/2008 e ss. mm. e ii. svolgendo attività di coordinamento della sicurezza sia mediante la predisposizione di Piani di Sicurezza e Coordinamento in fase progettuale, sia mediante attività diretta di prevenzione e controllo presso i cantieri durante la fase esecutiva dell’opera. Nel corso degli anni si è avuta la possibilità di acquisire ed incrementare l’esperienza e di conseguire maggiore competenza grazie allo svolgimento di corsi specifici di aggiornamento."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img31.webP' },
      { id: 2, url: '/assets/img/home/img26.jpg' }],
      
      siOcuppa:[ 
      {id: 0, info: "Cantieri per la realizzazione di infrastrutture di interesse comunale"},
      {id: 1, info: "Cantieri per la nuova installazione elementi tecnologici"},
      {id: 2, info: "Cantieri per la costruzione edile e la realizzazione impiantistica di attività abitative residenziali, terziarie e industriali"},
      {id: 3, info: "Cantieri per la costruzione edile e la realizzazione impiantistica di attività tecnologiche"},
      {id: 4, info: "Cantieri di ristrutturazione impiantistica"},
      {id: 5, info: "Cantieri per la realizzazione di infrastrutture di interesse comunale"}]
    },
  ];

socioList: Socio[] = [
{id:0, name: 'ing. Giulia Benatti', description: [
  {id:0 , text: 'Iscritta al n. 2248 dell’Albo degli Ingegneri della Provincia di Trento  '},
  { id: 1, text: "Laurea in ingegneria civile – ind. Idraulica, conseguita presso l’Università degli Studi di Ferrara in data 09/02/2001 con voto 110/110, con tesi di laurea dal titolo “Modello di evoluzione altimetrica del fiume Po: analisi e previsioni di abbassamenti futuri”" },
{ id: 2, text: "Abilitazione all’esercizio della libera professione nell’agosto 2001, numero di iscrizione all’Albo degli Ingegneri n° 2248." },
{ id: 3, text: "Certificatrice energetica presso Odatech Trento n. AA00135" },
{ id: 4, text: "Certificatrice energetica presso Cened Lombardia n. 6267" },
{ id: 5, text: "Certificatrice energetica Emilia Romagna n.06536" },
{ id: 6, text: "Iscritta al n. TN02248I00672 dell’elenco dei tecnici abilitati per le certificazioni antincendio di cui al DM 05/08/2011" },
{ id: 7, text: "Esperta in Gestione dell’Energia in conformità alla norma UNI CEI 11339:2009 – settore Civile e Industriale – certificato n. 16-03261" },
{ id: 8, text: "Membro del Consiglio di Amministrazione Distretto Tecnologico Trentino Società consortile a r. l. – dal giugno 2016" },
{ id: 9, text: "Corso base per progettisti presso l’Agenzia CasaClima di Bolzano della durata di 20 ore formative" },
{ id: 10, text: "Corso avanzato per progettisti presso l’Agenzia CasaClima di Bolzano della durata di 40 ore formative" },
{ id: 11, text: "“Corsi di formazione in materia di Lavori Pubblici” presso il Collegio dei Periti industriali di Trento" },
{ id: 12, text: "Corso di formazione presso la sede della Società Aermec a Bevilacqua (VR) dal titolo “Corso su esempi di progettazione per termotecnici”" },
{ id: 13, text: "Corso di formazione presso la sede della Società Aermec a Bevilacqua (VR) dal titolo “Corso per progettisti”" },
{ id: 14, text: "Corso di formazione sulla termoregolazione e contabilizzazione presso l’Ordine degli Ingegneri di Trento in collaborazione con la Ditta Coster" },
{ id: 15, text: "Capacità servizi energetici:\n\n– capacità/esperienza nel campo amministrativo, finanziario, legale e contrattuale attinenti i contratti a garanzia del risultato\n\n– competenza nella gestione dell’energia e conoscenza dei mercati energetici\n\n– competenza per la progettazione nelle aree di intervento\n\n– capacità di realizzare l’intervento di miglioramento dell’efficienza energetica, compreso l’acquisto di beni e servizi necessari, la messa in servizio e il collaudo." },
{ id: 16, text: "Attività didattica\n\n2018 Progetto LifePrepair: docenza modulo base ed avanzato – Unità didattiche Area Tecnologica.\n\nCorso “Riqualificazione green dell’edilizia privata: ripartire dai condomini”\n\norganizzato da APRIE, fra gennaio ed aprile 2018, con 50 corsisti appartenenti a diverse categorie professionali: liberi professionisti, imprenditori artigiani, amministratori di condominio, rappresentanti del Tavolo Condomini.\n\nDocenza sul tema “Impiantistica condominiale e risparmio energetico negli edifici, interventi edilizi e di efficienza energetica sul fabbricato, fase di pianificazione e fase di esecuzione”." },
{ id: 17, text: "2016 Relatrice sul tema “Energia e spazio costruito. Docenza modulo “Riqualificazione energetica degli edifici pubblici.” per conto di Trentino School of Management di Trento." },
{ id: 18, text: "2016 Relatrice per conto della Provincia Autonoma di Trento e del Consorzio dei Comuni Trentini. Incontri territoriali sul tema dell’efficientamento e risparmio energetico." },
{ id: 19, text: "2015 Relatrice sul tema “Illuminazione pubblica e titoli di efficienza energetica” per il Collegio dei Periti di Varese." },
{ id: 20, text: "2013 Relatrice sul tema “Trasformare il costruito. Docenza modulo “Piani di fattibilità ed intervento di efficientamento energetico sul tema: E.S.Co.” per conto del CNA/SHV di Bolzano." },
{ id: 21, text: "2013 Relatrice sul tema “Modelli finanziari legati al risparmio energetico” relativa all’Innovatione School-Progetto AlpBC del’Area Tecnologie Alpine-Cluster Bau." },
{ id: 22, text: "2012 Relatrice sul tema “I nuovi Titoli di efficienza energetica (TEE) o certificati bianchi all’interno del modulo “Gestione dell’efficienza energetica” nell’ambito del “Corso per l’Esperto della frigoconservazione delle mele e dei piccoli frutti” istituito presso il Centro Istruzione e Formazione della Fondazione Edmund Mach." },
{ id: 23, text: "2005 Relatrice per il corso “Sempre più donne in una professione che costruisce il futuro – Energy Manager”, finanziato dalla Provincia Autonoma di Trento, Dipartimento Politiche Sociali e del Lavoro, Ufficio Fondo Sociale ed Europeo, e SATEF s.r.l." },
{ id: 24, text: "2004 Collaboratrice dell’Energy Service s.r.l. come relatore per il corso di formazione aziendale dal titolo “Riscaldamento e condizionamento”." },
{ id: 25, text: "Incarichi particolari\n\n2001 Collaborazione con l’Università di Ferrara e con l’Università di Bologna, dipartimento DSTART, nell’ambito di uno studio finanziato dalla Regione Lombardia, sull’abbassamento dell’alveo del fiume Po dal ponte della Becca a Pontelagoscuro, al fine di valutare la navigabilità del tratto e la quota da imporre all’avanconca del porto di Cremona per permettere l’ingresso delle navi commerciali." },
{ id: 26, text: "2001 Collaborazione con l’Università di Bologna, dipartimento DSTART, e il G.P.I.A. di Bologna, nell’ambito di uno studio finanziato dalla CMC da presentare al Ministero delle Opere Pubbliche, sugli effetti dell’attività antropica (estrazione di inerti) sull’abbassamento dell’alveo del fiume Po dal ponte della Becca a Pontelagoscuro." },
{ id: 27, text: "2004-5 Responsabile del settore impiantistico presso la Società Civil Engineering di Arco (TN), società di ingegneria operante in tutti i campi della progettazione architettonica e ingegneristica." },
{ id: 28, text: "2006 Progetto per l’allestimento della mostra “Presepi dal Trentino a Roma. Dolce Bambin Gesù” presso l’aula Paolo VI della Citta del Vaticano, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 29, text: "2007-11 Progetto per l’utilizzo dell’energia solare in connessione al vettore idrogeno per produrre energia elettrica presso il Rifugio “Ai Caduti dell’Adamello”, in collaborazione con il Dipartimento di Fisica dell’Università di Trento" },
{ id: 30, text: "2007 Progetto per l’allestimento della mostra “I presepi del Trentino fra arte, tradizione e solidarietà” presso il Braccio Carlo Magno della Città del Vaticano, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 31, text: "2008 Progetto per l’allestimento della mostra “I presepi Trentini a Costantinopoli” presso la Chiesa di S. Antonio ad Istanbul, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 32, text: "2010 Governatorato Città del Vaticano: progetto illuminotecnico per la nuova Fontana di San Giuseppe da posizionarsi all’interno dei Giardini Vaticani." },
{ id: 33, text: "2011 Collaborazione all’allestimento del Presepe presso la Basilica della Natività a Betlemme – Palestina, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 34, text: "2012 Progetto illuminotecnico per il Castello del Buonconsiglio a Trento. Coordinatore del gruppo di lavoro per la progettazione e la realizzazione degli impianti di illuminazione interni ed esterni." },
{ id: 35, text: "2012 Progetto per l’allestimento della mostra “Un Presepe e tanta arte popolare. L’omaggio di Tesero ai Maestri dei Presepi” presso la Città del Vaticano, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 36, text: "2013 Progetto per l’allestimento della mostra “Il presepe della regina”. Mostra allestita a Buckingham Palace presso l’invito del principe Carlo d’Inghilterra, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 37, text: "2013 Progetto per l’allestimento della mostra “I presepi del Trentino a Rio de Janeiro”, presso l’Istituto Italiano di Cultura di Rio de Janeiro, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 38, text: "2013 Progetto per l’allestimento della mostra “Il presepe di Niccolò e Giò Musella”. Mostra allestita presso la Casa del Mantegna di Mantova, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 39, text: "2013 Progetto per l’allestimento della mostra “I presepi del Trentino a Budapest”, presso l’Istituto Italiano di Cultura di Budapest, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 40, text: "2014 Progetto per l’allestimento della mostra “I presepi del Trentino a Varsavia”, presso l’Istituto Italiano di Cultura di Varsavia, in collaborazione con l’Associazione Amici del Presepe di Tesero" }
], img:[{id:1, url: 'data:image/png;base64,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'}]},
{id:1, name:'per. ind. Paolo Carlini', description:[{id:1, text:'Diploma di perito industriale con specializzazione elettrotecnica, conseguito presso l’I.T.I.S. “M. Buonarroti” di Trento in data luglio 1992'},
{id:2, text:'Abilitazione all’esercizio della libera professione nell’ottobre 1997, numero di iscrizione all’Albo dei Periti Industriali n° 1834.'},
{id:3, text:'Socio dal 1990 al 1998 in primaria azienda specializzata del settore elettrico, ha svolto mansioni di responsabile ufficio tecnico e direttore tecnico di cantiere per opere da elettricista.'},
{id:4, text:'Socio dal 1998 al 2008 dello Studio Associato ST.A.IN. e ST.A.IN. Engineering Srl – Trento'},
{id:5,text:'Abilitato ai sensi della D.L. 22/01/2008 n°37 (ex L.46/90) art.1 comma a), b), g)'},
{id:6, text:'Abilitato ai sensi del D.Lgs. 09/04/2008 n°81 (ex D.Lgs. 494/96) a seguito del corso di 120 ore ed in possesso dei requisiti richiesti dalla Legge per lo svolgimento di coordinatore in fase di progettazione ed esecuzione di opere.'},
{id:7,text:'Corsi di formazione in materia di Lavori Pubblici” presso il Consorzio dei Comuni Trentini di Trento 2004'},
{id:8, text: 'Corso di formazione su impianti fotovoltaici presso il CESI a Milano 2008'},
{id:0, text:'1999-2003 Docente per diverse ditte impiantistiche di corsi FSE di aggiornamento per gli impianti elettrici.'}], img:[{id:1, url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}]},


{id:2, name:'per. ind. Paolo Carlini', description:[{id:1, text:'Diploma di perito industriale con specializzazione elettrotecnica, conseguito presso l’I.T.I.S. “M. Buonarroti” di Trento in data luglio 1992'},
{id:2, text:'Abilitazione all’esercizio della libera professione nell’ottobre 1997, numero di iscrizione all’Albo dei Periti Industriali n° 1834.'},
{id:3, text:'Socio dal 1990 al 1998 in primaria azienda specializzata del settore elettrico, ha svolto mansioni di responsabile ufficio tecnico e direttore tecnico di cantiere per opere da elettricista.'},
{id:4, text:'Socio dal 1998 al 2008 dello Studio Associato ST.A.IN. e ST.A.IN. Engineering Srl – Trento'},
{id:5,text:'Abilitato ai sensi della D.L. 22/01/2008 n°37 (ex L.46/90) art.1 comma a), b), g)'},
{id:6, text:'Abilitato ai sensi del D.Lgs. 09/04/2008 n°81 (ex D.Lgs. 494/96) a seguito del corso di 120 ore ed in possesso dei requisiti richiesti dalla Legge per lo svolgimento di coordinatore in fase di progettazione ed esecuzione di opere.'},
{id:7,text:'Corsi di formazione in materia di Lavori Pubblici” presso il Consorzio dei Comuni Trentini di Trento 2004'},
{id:8, text: 'Corso di formazione su impianti fotovoltaici presso il CESI a Milano 2008'},
{id:0, text:'1999-2003 Docente per diverse ditte impiantistiche di corsi FSE di aggiornamento per gli impianti elettrici.'}], img:[{id:1, url: 'data:image/jpeg;base64,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'}]}

]


  //get all the services; check the models to understand the array
  getServizioList(): Servizio[] {
    return this.servizioList;
  }


  getSocio(): Socio[]{
    return this.socioList;
  }
  //dinamic routing...
  getServiizioDetailById(id: number): Servizio | undefined {
    const servizio =  this.servizioList.find(servizio => servizio.id === id);
    if(!servizio){
      this.router.navigate(['/404']);
    }
    return servizio;1
  }


  getSocioById(id: number): Socio | undefined {
    const socio = this.socioList.find(socio => socio.id === id);
    if (!socio) {
      this.router.navigate(['/404']);
    }
    return socio;
  }
//end of the home and service info
//<--------------------------------------------------------------------------------------------------------------------------------------->





//contact info
  private contact: Contact[] = [
    {id: 1, info: ' 0464 512776'},
    {id: 2, info: ' info@steaprogetto.com'},
    {id: 3, info: ' 0464 513715'},
    {id: 4, info: ' Via Santa Caterina, 60 - 38062 Arco TN'},
  ]



getContact(): Contact[]{
  return this.contact
}
//get the contact info
//end of contact section

}
