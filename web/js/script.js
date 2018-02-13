$(document).ready(function() {

	var pages = {};

	function addPage(pagename, file) {
		pages[pagename] = file;
	}

	function showAddPage() {
		$("#layout").empty();

		$.get(pages["#addPage"], function(response){
			$("#layout").append(response);

			$("#submitAddButton").unbind();
			$("#submitAddButton").bind("click", function() {

				if($("#addTf").val().length != 0) {
					$.ajax({
						url: "index.php",
						type: "GET",
						data: ({action:'add', name: $("#addTf").val()}),
						dataType: "text",
						success:showListPage
					});
				}

			});

			$("#returnToListPageButton").unbind();
			$("#returnToListPageButton").bind("click", function() {
				showListPage();
			});

		});
	}

	function showEditPage(id, str) {
		$("#layout").empty();

		$.get(pages["#editPage"], function(response){
			$("#layout").append(response);

			$("#deleteButton").unbind();
			$("#deleteButton").bind("click", function() {
				$.ajax({
					url: "index.php",
					type: "GET",
					data: ({action:'remove', i:id}),
					dataType: "text",
					success: showListPage
				});
			});

			$("#editTf").val(str);

			$("#okButton").unbind();
			$("#okButton").bind("click", function() {
				if($("#editTf").val().length != 0) {
					$.ajax({
						url: "index.php",
						type: "GET",
						data: ({action:'edit', i:id, newValue:$("#editTf").val()}),
						dataType: "text",
						success: showListPage
					});
				}
			});

		});
	}


	function showListPage(data) {

		$("#layout").empty();

		$.get(pages["#listPage"], function(response){

			$("#layout").append(response);

			$("#showAddPageButton").unbind();
			$("#showAddPageButton").bind("click", function() {
				showAddPage();
			});

			$("#returnToStartPageButton").unbind();
			$("#returnToStartPageButton").bind("click", function() {
				showStartPage();
			});

			$(".list").empty();

			var listBody = "";

			if(data != null) {

				data = JSON.parse(data);

				for(var id in data) {
					listBody+="<li class='list-group-item'>" + data[id] + "<img src='gfx/openButton1.png' id = " + id + "></li>";
				}

				$(".list").append(listBody);

				for(var id in data) {
					$(".list img").eq(id).unbind();
					$(".list img").eq(id).bind("click", function() {
						showEditPage(this.id, $(".list li").eq(this.id).text());
					});
				}
			}
		});
	}


	function showStartPage() {
		$("#layout").empty();
		$.get(pages["#startPage"], function(response){
			$("#layout").append(response);

			$("#showListButton").unbind();
			$("#showListButton").bind("click", function() {
				$.ajax({
					url: "index.php",
					data: ({action:'getList'}),
					dataType: "text",
					success: showListPage
				});
			});

		});
	}

	addPage("#startPage", "../templates/todo.html");
	addPage("#listPage", "../templates/list.html");
	addPage("#addPage", "../templates/add.html");
	addPage("#editPage", "../templates/edit.html");
	
	showStartPage();

})