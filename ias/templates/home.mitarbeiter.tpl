<!--
    Buchungsübersicht für den Mitarbeiter
-->
<div class="div--home--mitarbeiter">
@var halle;@
@var ausstellerId;@
@var entry@
@for halle in context@
    <div class="container">
        <h3>Halle #halle#</h3>
        <table class="tblAussteller" class="tabelle#halle#">
            <tr>
                <th>Austeller</th>
                <th>Reihe</th>
                <th>Spalte</th>
            </tr>
        @for ausstellerId in context[halle]@
            @for entry in context[halle][ausstellerId]["area"]@
                <tr id="t#halle#r#context[halle][ausstellerId]["area"][entry][0]#c#context[halle][ausstellerId]["area"][entry][1]#">
                    <td>#context[halle][ausstellerId]["name"]#</td>
                    <td>#context[halle][ausstellerId]["area"][entry][0]#</td>
                    <td>#context[halle][ausstellerId]["area"][entry][1]#</td>
                </tr>
            @endfor@
        @endfor@
        </table>
    </div>
@endfor@

    <button type="button" id="btnStornieren">Stornieren</button>
</div>
