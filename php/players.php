<?php

// return all records
if (isset($_GET['all'])) {
    $sourceJson = file_get_contents('players.json');
    $data = json_decode($sourceJson, true);
    echo json_encode($data);
}

// create a new player 
if (isset($_POST['name']) && isset($_POST['position']) && isset($_POST['description']) && $_GET['action'] == 'create') {
    $sourceJson = file_get_contents('players.json');
    $data = json_decode($sourceJson, true);    
    $data[] = $_POST;
    $newData = json_encode($data);
    file_put_contents('players.json', $newData);
    // $msg = array('success' => true, 'message' => 'Joueur ajouté');
    echo json_encode($_POST);
}
// update an existing player
if (isset($_GET['id']) && $_GET['action'] == 'update') {
    $sourceJson = file_get_contents('players.json');
    $data = json_decode($sourceJson, true);
    $id = array_search($_GET['id'], array_column($data, 'id'));
    $data[$id] = $_POST;
    $newData = json_encode(array_values($data));
    file_put_contents('players.json', $newData);
    // $msg = array('success' => true, 'message' => 'Joueur modifié');
    echo json_encode($_POST);    
}
// delete an existing player
if (isset($_GET['id']) && $_GET['action'] == 'delete') {
    $sourceJson = file_get_contents('players.json');
    $data = json_decode($sourceJson, true);
    // find element in array where id = $_GET['id']
    $id = array_search($_GET['id'], array_column($data, 'id'));
    unset($data[$id]);
    $newData = json_encode(array_values($data));
    file_put_contents('players.json', $newData);
    $msg = array('success' => true, 'message' => 'Joueur supprimé');
    echo json_encode($msg);
}