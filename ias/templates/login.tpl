<!--
    Login-Fenster

    => es wird zurück auf die Homepage geleitet, egal ob erfolgreich oder nicht!
-->
<form action="/eval_login" method="post" class="form form--login">
    <div class="form--field">
        <label for="login--username">
            <span>Username</span>
        </label>
        <input name="username" type="text" placeholder="Username" required>
    </div>
    <div class="form--field">
        <label for="login--password">
            <span>Password</span>
        </label>
        <input name="password" type="password" placeholder="Password" required>
    </div>
    <div class="form__field">
        <input id="lgnButton" type="submit" value="Login">
    </div>
</form>