<h1>Aula coding 2016</h1>


<?php 

include 'conn.php';

$sql = "select * from aula order by cognome";

$q= mysql_query($sql);

echo "<table>";
$i=0;
while ($r = mysql_fetch_array($q)) {

	echo "<tr>";
$e = ++$i;
		echo "<td>".$e."</td>";
		echo "<td>$r[nome]</td>";
		echo "<td>$r[cognome]</td>";
		echo "<td>$r[data_nascita]</td>";

	echo "</tr>";

}


echo "</table>";

 ?>