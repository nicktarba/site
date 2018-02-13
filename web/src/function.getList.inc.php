<?php
function getList($path) {
	$file = file_get_contents($path);
	return $file;
}
?>