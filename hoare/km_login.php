<?php
  	$name = $_POST["name"];
	$pass = $_POST["pass"];
	$base = $_POST["base"];
	$file = fopen("km_user.txt", "r") or die("User login file unavailable");
	while ($line = fgets($file, 255)) {
		$line = chop($line);
		$field = preg_split("/:/", $line, 2);
		if ($field[0] == $name && $field[1] == $pass) break;	
	}
	if ($field[0] == $name && $field[1] == $pass) {
		setcookie("name", $name, 0);
	} else {
		setcookie("name", "", time() - 86400);
	}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- km_login.php
     Kidsmath script to peform login 
     -->
<html xmlns = "http://www.w3.org/1999/xhtml">
  <head> <title> Kids Math </title>
  </head>
  <body>
  <?php
	if ($field[0] != $name || $field[1] != $pass) {
		print ("<h2>Login Failed </h2> <br />
		<input type = \"button\" 
			onClick = \"parent.location = 'http://umsl.edu/~mlsn87/km.9/km_start.html'\"
			value = 'Continue' />");
	} else {
		print ("<h2>Login Successful</h2><br />
		<input type = \"button\" 
			onClick = \"parent.location = 'km_question2.html'\"
			value = 'Continue' />");
	}
?>
  </body>
</html>

