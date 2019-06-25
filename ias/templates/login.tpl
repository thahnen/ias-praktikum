<!--
    Login-Fenster

    => es wird zurück auf die Homepage geleitet, egal ob erfolgreich oder nicht!
-->

<div class="div--login">
    <form action="/eval_login" method="post" class="form form--login">
        <div class="div--username">
            <input name="username" type="text" placeholder="Username" required>
        </div>
        <div class="div--password">
            <input name="password" type="password" placeholder="Password" required>
        </div>
        <div class="div--submit">
            <input type="submit" value="Login">
        </div>
    </form>
</div>