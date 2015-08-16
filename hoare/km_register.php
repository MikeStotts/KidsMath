<?php
	$name = $_POST["name"];
	$pass = $_POST["pass"];
	setcookie("name", $name, 0);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- km_register.php 
	Register new user
     -->
<html xmlns = "http://www.w3.org/1999/xhtml">
  <head> <title> Kids Math </title>
  </head>
  <body>
<?php
	$file = fopen("km_user.txt", "a") or die ("error opening file");
	fputs($file, "$name:$pass\n");
	fclose($file);
 ?>
<h1>Kids Math Registration </h1>
<strong>You are registered </strong> <br />
<input type = "button" onClick = "parent.location='km_question2.html'"
		value = "Continue" />
  </body>
</html>
