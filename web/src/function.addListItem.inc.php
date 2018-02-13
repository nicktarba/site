<?php

function addListItem($path, $task) {
	$file = file_get_contents($path);
	$data = json_decode($file);
	$data[] = $task;
	$data = json_encode($data);
	file_put_contents($path, $data);
	return $data;
}

?>