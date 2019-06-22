<!--
    Halle
-->
<div class="div--halle">
    <svg id="svg" width="200mm" height="100mm" viewBox="0 0 200 100">
        
        @var i;@
        @var j;@
        @for i = 0; i < 5; i++@
            @for j = 0; j < 10; j++@
                <rect id="r#i#c#j#" x="#20*j#" y="#20*i#" width="20" height="20"/>
            @endfor@
        @endfor@

        <text x="10" y="13">
            WC
        </text>
        <text x="190" y="13">
            WC
        </text>
        <text x="10" y="93">
            WC
        </text>
        <text x="190" y="93">
            WC
        </text>
        <text x="90" y="93">
            Büro
        </text>
        <text x="110" y="93">
            Info
        </text>
        <text x="90" y="13">
            Tür
        </text>
        <text x="110" y="13">
            Tür
        </text>
        <text x="50" y="93">
            Tür
        </text>
        <text x="150" y="93">
            Tür
        </text>
    </svg>
</div>
