function validarPassword() {
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;

    if (usuario === "" || password === "") {
        alert('Todos los campos son obligatorios');
        return false;
    }

    const validUsers = {
        'Silvia0324': 'saldo1.html',
        'Angelina Ortega flores': 'saldo2.html',
        'carlos42': 'saldo3.html',
        'javier23': 'saldo4.html',
        'luisjk': 'saldo5.html',
        'juan': 'saldo6.html',
        'andre36': 'saldo7.html',
        'carlos50': 'saldo8.html',
        'javier6': 'saldo9.html',
        'luisdf': 'saldo10.html'
         'carlos42': 'saldo11.html',
        'javier23': 'saldo12.html',
        'luisjk': 'saldo13.html',
        'juan': 'saldo14.html',
        'andre36': 'saldo15.html',
        'carlos50': 'saldo16.html',
        'javier6': 'saldo17.html',
        'luisdf': 'saldo18.html'
       'javier6': 'saldo19.html',
        'luisdf': 'saldo20.html'
    };

    if (validUsers.hasOwnProperty(usuario)) {
        if (password === '92564368') {
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

    
   
        
    
