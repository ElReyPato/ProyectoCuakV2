function obtenerValorFormulario() {
    // Obtén el valor del campo de texto
    const contraseña = document.getElementById('contraseña').value;
    const pass = contraseña.toLowerCase();
    if (pass === "whynout") {
        alert("Casi casi no estas lejos.");
    } else if (pass !== "wobbuffet") {
        alert("Contraseña incorrecta, por favor vuelva a intentarlo");
    } else {
        // Redirige a lideres.html
        window.location.assign('../Html/Pokemon/lideres.html');
    }
    return false; // Para evitar que el formulario se envíe de manera predeterminada
}
