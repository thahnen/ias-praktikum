<!--
    Buchungsübersicht für den Aussteller
-->
@var i;@
@var entry;@
@for entry in context@
  <h3>Halle #entry#</h3>
  @if context[entry].length != 0@
    <table class="tblAussteller">
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
  @else@
    <p>Keine Buchungen</p>
  @endif@
</table>
@endfor@

<button type="button" id="btnStornieren">Stornieren</button>
