<?php 

    if ($_GET['action'] === "getList") {
        require_once 'src/function.getList.inc.php';
        echo getList("var/tasks.json");
    } else if ($_GET['action'] === "add") {
        require_once 'src/function.addListItem.inc.php';
        echo addListItem("var/tasks.json", $_GET['name']);
    } else if ($_GET['action'] === "edit") {
        require_once 'src/function.editListItem.inc.php';
        echo editListItem("var/tasks.json", $_GET['i'], $_GET['newValue']);
    } else if ($_GET['action'] === "remove") {
        require_once 'src/function.removeListItem.inc.php';
        echo removeListItem("var/tasks.json", $_GET['i']);
    } else {
       require_once 'templates/home.html';
    }
?>