<!-- Navigationsleiste -->
<ul>
	<!--
		Besucher-Aktionen:
		- Suchen    ->      Um nach Ausstellern zu suchen
        - Login     ->      Um sich einzuloggen/ in anderen Bereich wechseln!
	-->
	<li>
		<a href="##" data-action="#context[0][0]#">#context[0][1]#</a>
	</li>
    <li>
		<a href="##" data-action="#context[1][0]#">#context[1][1]#</a>
	</li>

	<!-- Auflistung aller vorhandenen Hallen! -->
	<p> Alle Hallen: </p>
	
@var entry;@
@var loop;@
@for loop = 2; loop < context.length; loop++@
	@entry = context[loop];@
	<li>
   		<a href="##" data-action="#entry[0]#">#entry[1]#</a>
   	</li>
@endfor@
</ul>
