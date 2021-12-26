<!DOCTYPE html>
<html lang="fr-FR">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style/style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <title>Rugby all blacks</title>
</head>

<body>
    <?php include('php/login.php')?>
    <header>
        <h1>Les ALL BLACKS</h1>
        <img src="img/logo-ab-white.jpg" alt="" class="logo" />
    </header>
    <h2>Menu</h2>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
        Se connecter
    </button>

    <ul id="nav-list" class="nav nav-pills">

    </ul>

    <input id="session" type="hidden" value="<?php echo $_SESSION['user']?>">

    <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-dark" id="loginModalLabel">Connexion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="login-form" method="POST">
                        <!-- user name and password -->
                        <div class="form-group">
                            <label class="text-dark" for="login">Identifiant</label>
                            <input type="text" class="form-control" id="login" placeholder="Entrer un identifiant" />
                            <!-- user name -->
                        </div>
                        <div class="form-group">
                            <label class="text-dark" for="password">Mot de passe</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter password" />
                            <!-- password -->
                        </div>
                        <!-- submit -->
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <div class="text-dark" id="error-message"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <section class="desc">
                <h2>Description générale</h2>
                <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </blockquote>
                <i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </i>
            </section>
            <section class="infos">
                <h3>Infos pratique</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
        </div>

        <div class="tab-pane fade show " id="pills-subSpace" role="tabpanel" aria-labelledby="pills-subSpace-tab">
            <ul>
                <li>
                    <a id="login" href="">Connexion</a>
                </li>
                <li>
                    <a href="">Mes informations</a>
                    <ol>
                        <li>Nom</li>
                        <li>Prénom</li>
                        <li>Numéro de téléphone</li>
                        <li>Email</li>
                    </ol>
                </li>
                <li>
                    <a href="">Messagerie</a>
                </li>
                <li>
                    <a href="">Historique</a>
                </li>
            </ul>
        </div>

        <div class="tab-pane fade show" id="pills-matchs" role="tabpanel" aria-labelledby="pills-matchs-tab">
            <ul>
                <li>
                    <figure>
                        <figcaption>Boooooooooo</figcaption>
                        <audio autoplay controls src="audio/applause.mp3">
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </figure>
                </li>
                <li>
                    <figure>
                        <figcaption>Clap clap clap</figcaption>
                        <audio controls src="audio/applause.mp3">
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </figure>
                </li>
                <li>
                    <figure>
                        <figcaption>C'est raté</figcaption>
                        <audio controls src="audio/boooo.mp3">
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </figure>
                </li>
                <li>
                    <figure>
                        <figcaption>cwdaaaAah</figcaption>
                        <audio controls src="audio/cwdaaaAah.mp3">
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </figure>
                </li>
            </ul>
        </div>

        <div class="tab-pane fade show" id="pills-highlight" role="tabpanel" aria-labelledby="pills-highlight-tab">
            <h2>Titre1</h2>
            <p>Desc1</p>
            <video controls width="250">
                <source src="video/video1.mp4" type="video/mp4" />

                Sorry, your browser doesn't support embedded videos.
            </video>
            <h2>Titre2</h2>
            <p>Desc2</p>
            <video controls autoplay width="250">
                <source src="video/video2.mp4" type="video/mp4" />

                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>


        <div class="tab-pane fade show" id="pills-players" role="tabpanel" aria-labelledby="pills-players-tab">

            <form id="add-player-form">
                <div id="form-group">
                    <label for="addName">Nom</label>
                    <input type="text" class="form-control" name="addName" id="addName" required />
                </div>
                <div id="form-group">
                    <label for="addImage">Image</label>
                    <input type="text" class="form-control" name="addImage" id="addImage" required />
                </div>
                <div id="form-group">
                    <label for="addPosition">Poste</label>
                    <input type="text" class="form-control" name="addPosition" id="addPosition" required />
                </div>
                <div id="form-group">
                    <label for="addDescription">Description</label>
                    <input type="text" class="form-control" name="addDescription" id="addDescription" required />
                </div>
                <input type="submit" value="Ajouter" />
            </form>

            <form id="edit-player-form">
                <div id="form-group">
                    <label for="editName">Nom</label>
                    <input type="text" class="form-control" name="editName" id="editName" required />
                </div>
                <div id="form-group">
                    <label for="editImage">Image</label>
                    <input type="text" class="form-control" name="editImage" id="editImage" required />
                </div>
                <div id="form-group">
                    <label for="editPosition">Poste</label>
                    <input type="text" class="form-control" name="editPosition" id="editPosition" required />
                </div>
                <div id="form-group">
                    <label for="editDescription">Description</label>
                    <input type="text" class="form-control" name="editDescription" id="editDescription" required />
                </div>
                <input type="submit" value="Modifier" />
            </form>

            <div class="container" style="margin-top: 100px">
                <div id="card-group" class="row row-cols-1 row-cols-md-2 g-4"></div>
            </div>
        </div>

        <div class="tab-pane fade show" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <form>
                <fieldset>
                    <legend>Nous contacter</legend>
                    <div class="form-example">
                        <label for="name">Nom: </label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div class="form-example">
                        <label for="name">Prenom: </label>
                        <input type="text" name="lastname" id="lastname" />
                    </div>
                    <div class="form-example">
                        <label for="email">email: </label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div class="form-example">
                        <label for="tel">Numéro téléphone: </label>
                        <input type="tel"
                            pattern="(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}"
                            name="tel" id="tel" />
                    </div>
                    <div class="form-example">
                        <label for="msg">Message: </label>
                        <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
                    </div>
                    <div class="form-example">
                        <input type="submit" value="Envoyer" />
                    </div>
                </fieldset>
            </form>
        </div>
    </div>

    <!-- <script type="text/javascript" src="js/playerTables.js"></script> -->
    <script type="text/javascript" src="js/menu.js"></script>
    <script type="text/javascript" src="js/playerCards.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
    </script>
</body>

</html>