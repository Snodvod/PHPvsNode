<?php
	$i = 9;
	$a = "Big big textlinez";

	$array = array("John", "Franky", "Pierre");
	// array to string conversion problem
	echo $i . " " . $a . "\n" . $array . "\n";
	// loop is needed to print out all items
	foreach($array as $item) {
		echo $item . " ";
	}
?>