<?php

    $login_normal = "user";
	$login_admin = "admin";
	$password = "ajax";

    session_start();
    if(isset($_POST['login']) && isset($_POST['password']) ){
        if($_POST['login'] == $login_normal && $_POST['password'] == $password){
            $_SESSION['user'] = $login_normal;
            //return response success 
            $data = array('success' => true, 'message' => 'Authentification en tant qu\'utilisateur réussie');
            echo json_encode($data);

        }
        else if ($_POST['login'] == $login_admin && $_POST['password'] == $password){
            $_SESSION['user'] = $login_admin;
            //return response success 
            $data = array('success' => true, 'message' => 'Authentification en tant qu\'administrateur réussie');
            echo json_encode($data);
	    }
        else{
            //return response failed
            $data = array('error' => true, 'message' => 'Mauvais identifiant ou mot de passe');
            echo json_encode($data);
        }
    }