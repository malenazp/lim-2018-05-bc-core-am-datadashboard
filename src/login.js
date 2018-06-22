const buttonLogin = document.getElementById('button');
buttonLogin.addEventListener('click', validar);

function validar(e) {
    e.preventDefault();
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    if (user === 'alejandra@laboratoria.la' && password === 'alejandra@laboratoria.la') {
        window.location.href = 'dashboard.html'
    }

    else if (user === '123' && password === '123') {
        window.location.href = 'dashboard.html'
    }
    else {
        alert('Los datos ingresados no son válidos')
    }
}