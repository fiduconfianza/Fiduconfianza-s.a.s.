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
         'carlos4': 'saldo11.html',
        'javier269': 'saldo12.html',
        'luisj': 'saldo13.html',
        'juan5': 'saldo14.html',
        'andre3': 'saldo15.html',
        'carlos5': 'saldo16.html',
        'javier2': 'saldo17.html',
        'luisd3': 'saldo18.html'
       'javier0': 'saldo19.html',
        'luisk8': 'saldo20.html',
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

    
   
        
    
