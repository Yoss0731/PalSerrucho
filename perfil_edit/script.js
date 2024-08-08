document.addEventListener('DOMContentLoaded', function () {
    const botonEditar = document.getElementById('botonEditar');
    const botonGuardar = document.getElementById('botonGuardar');
    const botonCancelar = document.getElementById('botonCancelar');
    const botonVolver = document.getElementById('botonVolver');
    const inputs = document.querySelectorAll('input');
    const campoNuevaContrasena = document.getElementById('campoNuevaContrasena');

    botonEditar.addEventListener('click', function () {
        inputs.forEach(input => {
            input.removeAttribute('readonly');
        });
        campoNuevaContrasena.classList.remove('oculto');
        botonGuardar.classList.remove('oculto');
        botonCancelar.classList.remove('oculto');
        botonEditar.setAttribute('disabled', true);
    });

    botonCancelar.addEventListener('click', function () {
        inputs.forEach(input => {
            input.setAttribute('readonly', true);
        });
        campoNuevaContrasena.classList.add('oculto');
        botonGuardar.classList.add('oculto');
        botonCancelar.classList.add('oculto');
        botonEditar.removeAttribute('disabled');
    });

    // Manejo de la lógica de envío del formulario
    document.getElementById('formularioPerfil').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario para fines de demostración

        // Lógica para manejar el envío del formulario

        // Mostrar mensaje de éxito y desactivar inputs nuevamente
        document.getElementById('mensaje').textContent = 'Perfil actualizado con éxito.';
        botonCancelar.click(); // Restablecer al estado inicial
    });

    // Redirección al presionar el botón "Volver a la Lista de Gastos"
    botonVolver.addEventListener('click', function () {
        window.location.href = '../Listar/lista.html';
    });
});
