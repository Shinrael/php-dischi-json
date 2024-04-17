<?php

// Trasformo in una stringa il json

$json_string = file_get_contents('dischi.json');

// Codifico la stringa e la trasformo in un elemento PHP

$list = json_decode($json_string);

/*


*/

// Trasformo l'elemento PHP come se fosse un JSON

header('Content-Type: application/json');

// Stampo di nuovo la lista ritraformata in stringa

echo json_encode($list);

?>