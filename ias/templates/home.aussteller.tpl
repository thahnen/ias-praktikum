<!--
    Buchungsübersicht für den Aussteller
-->
<div class="div--home--aussteller">
@var i;@
@var entry;@
@for entry in context@
    <div class="container">
    <h3>Halle #entry#</h3>
    @if context[entry].length != 0@
        <table class="tblAussteller" class="tabelle#entry#">
            <tr>
                <th>Reihe</th>
                <th>Spalte</th>
            </tr>
        @for i = 0; i < context[entry].length; i++@
            <tr id="t#entry#r#context[entry][i][0]#c#context[entry][i][1]#">
                <td>#context[entry][i][0]#</td>
                <td>#context[entry][i][1]#</td>
            </tr>
        @endfor@
        </table>
    @else@
        <p>Keine Buchungen</p>
    @endif@
    </div>
@endfor@

    <button type="button" id="btnStornieren">Stornieren</button>
</div>
