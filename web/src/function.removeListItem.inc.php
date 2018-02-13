<?php
	
function removeListItem($path, $id) {
	$file = file_get_contents($path);
	$data = json_decode($file, true);
	unset($data[$id]);
	$data = array_values($data);
	$data = json_encode($data);
	file_put_contents($path, $data);
	return $data;
}
?>