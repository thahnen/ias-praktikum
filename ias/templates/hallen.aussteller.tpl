<!--
    Hallenplan (Aussteller)
-->
<h1>Buchen: Halle #context#</h1>

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

<button id="buchenBtn">Ausgewählte Halle buchen</button>
