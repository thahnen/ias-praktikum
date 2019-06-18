<!-- Navigationsleiste -->
<ul>
	<!--
		Jeweilige Aktion (unterschiedliche bei den verschiedenen Gruppen!)

		Besucher:		Suchen -> Seite zum Suchen der Aussteller
		Aussteller:		Übersicht -> Übersicht seiner Buchungen
		Mitarbeiter:	Überishct -> Übersicht aller Buchungen
	-->
	<li>
		<a href="##" data-action="#context[0][0]#">#context[0][1]#</a>
	</li>

	<!-- Auflistung aller vorhandenen Hallen! -->
	<p> Alle Hallen: </p>
	
@var entry;@
@var loop;@
@for loop = 1; loop < context.length; loop++@
	@entry = context[loop];@
	<li>
   		<a href="##" data-action="#entry[0]#">#entry[1]#</a>
   	</li>
@endfor@
</ul>
