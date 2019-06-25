<!--
    Hallenplan (Mitarbeiter)
-->
<div class="div--innerHeader">
    <h1>Bearbeiten: Halle #context[0]#</h1>
</div>

<div class="div--halle">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg" width="200mm" height="100mm" viewBox="0 0 200 100">
        @var i;@
        @var j;@
        @for i = 0; i < 5; i++@
            @for j = 0; j < 10; j++@
                <rect id="r#i#c#j#" x="#20*j#" y="#20*i#" width="20" height="20"/>
            @endfor@
        @endfor@
    </svg>
</div>

<div class="div--controls">
    <select id="options" size="1">
        <option selected>Frei</option>
        @var loop;@
        @for loop = 0; loop < context[1].length; loop++@
            <option value="#context[1][loop][0]#">#context[1][loop][0]#</option>
        @endfor@
    </select>

    <button id="bearbeitenBtn">Ausgewählte Fläche bearbeiten</button>               
</div>
