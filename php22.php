<?php

$Connection = mysql_connect("localhost", "root", "");
$db = mysql_select_db("finaleproject", $connection); // Selecting Database
//Fetching Values from URL
$fname = $_POST['Firstname'];
$sname =$_POST['Secondname'];
$tname =$_POST['Thirdname'];
$dateofbirth=$_POST['Dateofbirth'];
$county =$_POST['Countyofbirth'];
$country =$_POST['country'];
$nationalid =$_POST['Nationalid'];
$gender =$_POST['Ff_nm_Gender'];
$highestlevelofedu=$_POST['education'];
$otherlanguages =$_POST['language'];
$anydisability =$_POST['Anydisability'];
$ddescription =$_POST['disabilitydescription'];

//Insert query
$query = mysql_query ("INSERT INTO personal information (fname , sname, tname, dateofbirth,county,country,nationalid,gender,highestlevelofedu, otherlanguages,anydisability,ddescription) 
    VALUES ('$fname','$sname','$tname','$county','$country',$nationalid,'$gender','$highestlevelofedu', '$otherlanguages','$anydisability','$ddescription');

echo 'Form Submitted Succesfully';
mysql_close($connection);
?>