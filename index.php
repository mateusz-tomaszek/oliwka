<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zabezpieczona Strona</title>
</head>
<body>

<?php
    $password = "twoje_haslo";

    if (isset($_POST['submit'])) {
        $enteredPassword = $_POST['password'];

        if ($enteredPassword == $password) {
            echo "<h1>Witaj na zabezpieczonej stronie!</h1>";
            // Dodaj resztę treści strony tutaj
        } else {
            echo "<p>Błędne hasło. Spróbuj ponownie.</p>";
            displayForm();
        }
    } else {
        displayForm();
    }

    function displayForm() {
        echo '
            <form method="post" action="">
                <label for="password">Wprowadź hasło:</label>
                <input type="password" name="password" required>
                <input type="submit" name="submit" value="Zaloguj">
            </form>
        ';
    }
?>

</body>
</html>