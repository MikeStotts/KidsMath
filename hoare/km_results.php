<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- km_results.php 
	record results of questions and prompt for more
     -->
<html xmlns = "http://www.w3.org/1999/xhtml">
  <head> <title> Kidsmath </title>
  </head>
  <body>
<?php
   $name = $_COOKIE["name"];
   $right = $_POST["right"];
   $wrong = $_POST["wrong"];
   $ques = $_POST["ques"];
   $percent = $right / $ques * 100;
   date_default_timezone_set("CST6CDT");
   $time = date("Y/m/d H:i:s e");
   print "$name, You got $right right and $wrong wrong out of $ques\n";
   print " for a score of $percent%";
   $file = fopen("km_results.txt", "a");
   fwrite($file, "$time:$name:$ques:$right:$wrong\n");
   fclose($file);
?>
  </body>
</html>
