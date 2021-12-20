<?php
// // Pour modifier les données 
// $data[0]['propriete'] = "valeur";
// pour sauvegarder de nouveau dans le source.json
// $newData = json_encode($data);
// file_put_contents('source.json', $newData);

//get players.json file

// return all records
if (isset($_GET['all'])) {
    $sourceJson = file_get_contents('players.json');
    $data = json_decode($sourceJson, true);
    echo json_encode($data);
}

// create a new player 
if (isset($_POST['name']) && isset($_POST['position']) && isset($_POST['description'])) {
    $sourceJson = file_get_contents('players.json');
    $data = json_decode($sourceJson, true);    
    $data[] = $_POST;
    $newData = json_encode($data);
    file_put_contents('players.json', $newData);
    $data = array('success' => true, 'message' => 'Joueur ajouté');
    echo json_encode($data);
}
// update an existing record
if (isset($_POST['update'])) {
    $sourceJson = file_get_contents('datas/players.json');
    $data = json_decode($sourceJson, true);
    $data[$_POST['id']] = $_POST;
    $newData = json_encode($data);
    file_put_contents('players.json', $newData);
}
// delete an existing record
if (isset($_POST['delete'])) {
    $sourceJson = file_get_contents('datas/players.json');
    $data = json_decode($sourceJson, true);
    unset($data[$_POST['id']]);
    $newData = json_encode($data);
    file_put_contents('players.json', $newData);
}