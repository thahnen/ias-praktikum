<!--
    Hier wird der jeweilige Benutzer angezeigt, mit "Modus", sowie ein Logout-Knopf
    Variable Context mit Aufbau:
    context-Typ = Arrays
    1) context[0] -> Cookie "type"
    2) context[0] -> Cookie "username"
-->
<div class="div--headline">
    <h1>Messeplaner // User: #context[1]# // Type: #context[0]#</h1>
</div>
<div class="div--logout">
    <form action="/eval_logout" method="post">
        <input id="btnLogout" type="submit" value="Logout">
    </form>
</div>
