<html>

	<head>
		<title>Formulário de aluno</title>
		
		<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
		<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
		
		<link rel="stylesheet" href="//apps.bdimg.com/libs/jqueryui/1.10.4/css/jquery-ui.min.css">
		<link rel="stylesheet" href="jqueryui/style.css">
		
		<style>
		#feedback { font-size: 1.4em; }
		#selectable .ui-selecting { background: #FECA40; }
		#selectable .ui-selected { background: #F39814; color: black; }
		#selectable { list-style-type: none; margin: 0; padding: 0; width: 50%; }
		#selectable li { margin: 3px; padding: 0.4em; font-size: 25px; height: 18px; }
		</style>
		
		<script>
		$(function() {
			$( "#selectable" ).selectable();
		} );
		</script>
		
	</head>
	
	<body>
		<?php
			print("Qual matéria você prefere? <br>");
		?>
		
		<ol id="selectable">
			<li class="ui-widget-content">Matématica</li>
			<li class="ui-widget-content">Potuguês</li>
			<li class="ui-widget-content">Geografia</li>
			<li class="ui-widget-content">Ciências</li>
		</ol>
		
	</body>
	
	<script type="text/javascript">
		$(document).ready(function() {
			alert("Clique na alternativa que mais condiz!");
		});
	</script>
	
</html>

	