function validarPassword() {
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;

    if (usuario === "" || password === "") {
        alert('Todos los campos son obligatorios');
        return false;
    }

    <!-- en este espacio van los nombre de usuario -->

    const validUsers = {
       'Silvia0324': 'saldo1.html',
        'Angelina Ortega flores': 'saldo2.html',
        'lusvindl': 'saldo3.html',
        'isaaccruz': 'saldo4.html',
        'jarquinriosemilia': 'saldo5.html',
        'paguagaortezjose': 'saldo6.html',
        'MarthaRamírez': 'saldo7.html',
        'robertobebcaz': 'saldo8.html',
        'AnabelGutierrezzuno': 'saldo9.html',
        'ArturoHernández': 'saldo10.html',
        'Juan Núñez': 'saldo11.html',
        'lusvindl': 'saldo12.html',
        'carlos4': 'saldo13.html',
        'javier2': 'saldo14.html',
        'luisj': 'saldo15.html',
        'juan36': 'saldo16.html',
        'andre3': 'saldo17.html',
        'carlos5': 'saldo18.html',
        'javier65': 'saldo19.html',
        'luisd': 'saldo20.html'
        
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
