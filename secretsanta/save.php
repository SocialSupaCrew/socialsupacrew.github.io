<?php 

$usersFile = 'data/users';

$postdata = file_get_contents("php://input");
$data = json_decode($postdata, true);

$data_insert = "[";

for ($i=0; $i < sizeof($data); $i++) {
	if($i == sizeof($data)-1)
		$data_insert .= '{"name": "' . $data[$i]['name'] . '", "mail": "' . $data[$i]['mail'] . '"}';
	else
		$data_insert .= '{"name": "' . $data[$i]['name'] . '", "mail": "' . $data[$i]['mail'] . '"}, ';
}

$data_insert .= "]";

file_put_contents($usersFile, $data_insert);

?>