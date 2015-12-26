# Vergelijkende studie PHP <=> Node.js

## Inleiding

De strijd tussen de gevestigde aristocraat en de anarchistische jongeling... Zo zouden we de vergelijking tussen PHP en Node kunnen bekijken. PHP bestaat ondertussen meer dan 20 jaar en wordt op meer dan 240 miljoen websites gebruikt. Node.js daarentegen bestaat nu een 5-tal jaar maar de stable versie (5.2) is nog maar net gereleased op 9 december 2015. Toevallig is ook PHP 7.0.0 uitgekomen, die volgens verschillende berichten een stuk sneller zou zijn dan de vorige versie. Ik zal in deze studie enkele basis functionaliteiten in beide technologieën testen en bespreken welke het meest efficiënt zijn qua syntax, performance, security etc.

## Runnen

Wat bij elke applicatie in eerste instantie in Node.js zal verschillen van PHP is het runnen van de file. In PHP zal het bestand op een web server moeten runnen, in dit geval maak ik gebruik van de bitnami WAMP stack om lokaal de bestanden te runnen. In Node daarentegen moet de server gecreëerd worden in de applicatie zelf. Door gebruik te maken van de 'http' module en de createServer functie. (Zie Hello.js) En dan moet het bestand gerund worden in een CLI.

## Variables & Syntax

De gekende verschillen in syntax tussen javascript en php gelden ook hier uiteraard. Node kan wel gewoon een array outputten terwijl het in PHP nodig is om het eerst te doorlopen en elke entry apart uit te lezen. Het interessante aan Node is natuurlijk dat we aan server-side ook in javascript werken. Dit brengt een groot voordeel met zich mee, bij full stack development moet er dan niet steeds de switch van syntax gemaakt worden.

## Hosting

Een PHP of Node website online deployen. Uiteraard heeft PHP hier een enorm voordeel, ten eerste omdat het al zo lang aanwezig is. Maar ten tweede ook omdat een node applicatie constant moet runnen om te blijven draaien. Bij een PHP applicatie is het gewoon kwestie van een paar nieuwe files te uploaden via ftp en alles werkt gewoon verder. Het aanbod in hosting voor Node is daarnaast ook veel kleiner, wat ook logisch is gezien de omstandigheden. Er zijn wel specifieke hostings voor Node.js aan het komen, zoals bijvoorbeeld Nodejitsu.com en ook Openshift support Node.js (we spreken dan over support voor Node v0.10... gene vette dus).

## Performance

## Versions
- Node.js: v5.2.0
- PHP: 7.0.0

## Logboek

- 10/12: Project start-up, eerste tests
- 19/12: Readme aanvulling & benchmarking
