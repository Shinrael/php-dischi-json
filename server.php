<?php

// Trasformo in una stringa il json

$json_string = file_get_contents('dischi.json');

// Codifico la stringa e la trasformo in un elemento PHP

$list = json_decode($json_string, true);

// Prima controlliamo con isser se esiste in post la nuova task, e se esiste la aggiungiamo al file json

if(isset($_POST['newTaskTitle'])){
  $new_item = [
    'title' => $_POST['newTaskTitle'],
    'author' => $_POST['newTaskAuthor'],
    'year' => $_POST['newTaskYear'],
    'poster' => $_POST['newTaskPoster'],
    'genre' => $_POST['newTaskGenre'],
  ];
  $list[] = $new_item;
  file_put_contents('dischi.json', json_encode($list));
}

// Trasformo l'elemento PHP come se fosse un JSON

header('Content-Type: application/json');

// Stampo di nuovo la lista ritraformata in stringa

echo json_encode($list);

?>