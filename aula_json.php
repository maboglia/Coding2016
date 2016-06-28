<?php 

//collegamento al database
include 'conn.php';

//query su database
$sql = "select * from aula order by cognome";

$q= mysql_query($sql);

//array php
$allievi = array();


while ($r = mysql_fetch_array($q)) {
	//riempio l'array
	$allievi['elenco_allievi'][] = $r;


}

//modifico header per far credere che si tratti di un file json
header('Content-type: application/json; charset=utf-8');

//evito i problemi dovuti al CORS, vedi 
//https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
header('Access-Control-Allow-Origin: *');

//istruzione php per creare un json a partire d un array php
echo json_encode($allievi);


 ?>