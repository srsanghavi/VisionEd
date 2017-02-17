<?php
	$code = $_REQUEST['code_txtArea'];
	//echo $code;
	$myfile = fopen("temp.py", "w") or die("Unable to open file!");
	fwrite($myfile, $code);
	fclose($myfile);

	 $call=("C:\\Python27\\python.exe temp.py");
    $last_line= exec($call,$retval);
    echo $last_line;
    echo "<img src=\"temp.jpg\" border=0>";
?>