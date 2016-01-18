# Vergelijkende studie PHP <=> Node.js

## Inleiding

De strijd tussen de gevestigde aristocraat en de anarchistische jongeling... Zo zouden we de vergelijking tussen PHP en Node kunnen bekijken. PHP bestaat ondertussen meer dan 20 jaar en wordt op meer dan 240 miljoen websites gebruikt. Node.js daarentegen bestaat nu een 5-tal jaar maar de stable versie (5.2) is nog maar net gereleased op 9 december 2015. Ook PHP 7.0.0 is net uitgekomen, die volgens verschillende berichten een stuk sneller zou zijn dan de vorige versie. Ik zal in deze studie enkele basis functionaliteiten in beide technologieën testen en bespreken welke het meest efficiënt zijn qua syntax, performance, security etc.

## Runnen

Wat bij elke applicatie in eerste instantie in Node.js zal verschillen van PHP is het runnen van de file. In PHP zal het bestand op een web server moeten runnen, in dit geval maak ik gebruik van de bitnami WAMP stack om lokaal de bestanden te runnen. In Node daarentegen moet de server gecreëerd worden in de applicatie zelf. Door gebruik te maken van de 'http' module en de createServer functie. (Zie Hello.js) En dan moet het bestand gerund worden in een CLI.

## Variables & Syntax

De gekende verschillen in syntax tussen javascript en php gelden ook hier uiteraard. Node kan wel gewoon een array outputten terwijl het in PHP nodig is om het eerst te doorlopen en elke entry apart uit te lezen. Het interessante aan Node is natuurlijk dat we aan server-side ook in javascript werken. Dit brengt een groot voordeel met zich mee, bij full stack development moet er dan niet steeds de switch van syntax gemaakt worden.

## Hosting

Een PHP of Node website online deployen. Uiteraard heeft PHP hier een enorm voordeel, ten eerste omdat het al zo lang aanwezig is. Maar ten tweede ook omdat een node applicatie constant moet runnen om te blijven draaien. Bij een PHP applicatie is het gewoon kwestie van een paar nieuwe files te uploaden via ftp en alles werkt gewoon verder. Het aanbod in hosting voor Node is daarnaast ook veel kleiner, wat ook begrijpelijk is gezien de leeftijd. Er zijn wel specifieke hostings voor Node.js aan het komen, zoals bijvoorbeeld Nodejitsu.com en ook Openshift support Node.js (we spreken dan over support voor Node v0.10...).

## Performance

Om de performance van Node en PHP met elkaar te vergelijken gebruik ik de command line tool apache benchmark. Bij elke test laat ik 2000 requests uitvoeren. Ze zullen met 25 tegelijkertijd uitgevoerd worden. Onderstaande tabel toont de requests/second.

Test results:

|Tech  |Hello		 |Variables   	|
|------|-------------|--------------|
|PHP   |2301.29 req/s|3581.84 req/s |
|Node  |3229.49 req/s|3702.25 req/s |

## Voordelen Node
1. Snelheid: We zien duidelijk dat Node.js een stuk lichter is en sneller werkt dan PHP
2. Tools: Door de npm package manager is het uitzonderlijk makkelijk om nieuwe tools en pakketten rechtstreeks in je applicatie te installeren
3. Real-time: Door het gebruiken van het webscoket protocol is Node ideaal om real-time, multi-user applicaties te maken. Zoals games en chats. Websockets zijn kanalen waarover in 2 richtingen kan worden gecommuniceerd. De websockets werken via TCP en vermeiden dus zo de overhead die HTTP met zich meebrengt. In Node is Socket.io de populairste websocket library op het moment.
4. Data streaming: Door de non-blocking werking van Node is het mogelijk om bijvoorbeeld video en audio bestanden al te beginnen transcoden terwijl ze nog aan het uploaden zijn. 
5. Community: Naast de meer dan 220.000 npm packages die door de community zijn gecreëerd wordt er over node.js een heleboel lezingen gegeven, en ook op websites zoals stackoverflow zijn er een heleboel mensen die hun kennis hierover willen delen. 

## Voordelen PHP
1. Documentatie: php is perfect gedocumenteerd op php.net aangevuld met code snippets van gebruikers. Daarnaast zijn er ontelbaar veel tutorials, tips en tricks te vinden online
2. Deployment: Voor een paar euro per maand kan je een PHP server gebruiken.
3. Optimized: Omdat PHP gemaakt is om te communiceren met bijvoorbeeld GET's en POST's zitten deze dingen al standaard in PHP ingebouwd. Het is iets meer straight forward om zulke dingen uit te voeren in PHP dan in Node.
4. Frameworks: PHP in combinatie met frameworks, een heel krachtige combo. Laravel, CodeIgniter, CakePHP... om er maar enkele op te noemen zorgen voor handige extra functies, database creatie en toegang etc.

## Versions
- Node.js: v4.2.1
- PHP: 7.0.0