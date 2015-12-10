# Vergelijkende studie PHP <=> Node.js

## Inleiding

De strijd tussen de gevestigde aristocraat en de anarchistische jongeling... Een manier om de vergelijking tussen PHP en Node te bekijken. PHP bestaat ondertussen meer dan 20 jaar en wordt op meer dan 240 miljoen websites gebruikt. Node.js daarentegen bestaat nu een 5-tal jaar maar de stable versie (5.2) is nog maar net gereleased op 9 december 2015. Toevallig is ook PHP 7.0.0 uitgekomen, die volgens verschillende berichten een stuk sneller zou zijn dan de vorige versie. Ik zal in deze studie enkele basis functionaliteiten in beide technologieën testen en bespreken welke het meest efficiënt zijn qua syntax, performance, security etc.

## Basics compared
´<?php
	$i = 9;
	$a = "Big big textlinez";

	$array = array("John", "Franky", "Pierre");
	// array to string conversion problem
	echo $i . " " . $a . "\n" . $array . "\n";
	// loop is needed to print out all items
	foreach($array as $item) {
		echo $item . " ";
	}
?>´


## Versions
···Node.js: v5.2.0
···PHP: 7.0.0

## Logboek

- 10/12: Project start-up, eerste tests
