<?php
	
function editListItem($path, $id, $newValue) {
	$file = file_get_contents($path);
	$data = json_decode($file, true);
	$data[$id] = $newValue;
	$data = json_encode($data);
	file_put_contents($path, $data);
	return $data;
}
?>