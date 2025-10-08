function validarPassword() {
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;

    if (usuario === "" || password === "") {
        alert('Todos los campos son obligatorios');
        return false;
    }

    <!-- en este espacio van los nombre de usuario -->

    const validUsers = {
       'glendyalv': 'saldo1.html',
        'veronicah': 'saldo2.html',
        'danielacosta': 'saldo3.html',
        'alvarofloresl': 'saldo4.html',
        'arturoesquivel': 'saldo5.html',
        'blancaauxiliogarcia': 'saldo6.html',
        'leovezarate': 'saldo7.html',
        'leticiarodriguez': 'saldo8.html',
        'AnabelGutierrezzuno': 'saldo9.html',
        'glendyalvarado': 'saldo10.html',
        'albertc9': 'saldo11.html',
        'doragiron': 'saldo12.html',
        'pascual77': 'saldo13.html',
        'javier2': 'saldo14.html',
        'luisj': 'saldo15.html',
        'juan36': 'saldo16.html',
        'alfredo5': 'saldo17.html',
        'carlos5': 'saldo18.html',
        'javier65': 'saldo19.html',
        'alvarofl': 'saldo20.html'
        
    };

    if (validUsers.hasOwnProperty(usuario)) {
        if (password === '92564368') {  <!-- en este espacio van la contraseña, todos tienen la misma contraseña -->
            alert('Bienvenido: ' + usuario);
            window.location.href = validUsers[usuario];
            return false; // Evitar el envío del formulario
        } else {
            alert('Usuario o clave incorrecta');
            return false;
        }
    } else {
        alert('Usuario o clave incorrecta');
        return false;
    }
}





