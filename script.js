document.getElementById('play-button').addEventListener('click', function() {
    console.log('Botón clicado');
    var audio = document.getElementById('background-audio');
    audio.play().then(() => {
        console.log('Reproducción iniciada');
        this.style.display = 'none'; // Oculta el botón después de hacer clic
    }).catch(error => {
        console.log('Error en la reproducción:', error);
    });
});

document.getElementById('play-buttonn').addEventListener('click', function() {
    console.log('Botón clicado');
    var audio = document.getElementById('background-audio');
    audio.play().then(() => {
        console.log('Reproducción iniciada');
        this.style.display = 'none'; // Oculta el botón después de hacer clic
    }).catch(error => {
        console.log('Error en la reproducción:', error);
    });
});