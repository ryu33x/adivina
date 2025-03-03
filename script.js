// Crear un contexto de audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let backgroundSound = null; // Variable para almacenar el sonido de fondo

// Pantallas
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalMessage = document.getElementById('finalMessage');

// Botones
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');

// Mostrar la pantalla inicial al cargar la página
startScreen.style.display = 'flex';
gameScreen.style.display = 'none';
gameOverScreen.style.display = 'none';

// Iniciar el juego
startButton.addEventListener('click', function() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    startGame();
});

// Reiniciar el juego
restartButton.addEventListener('click', function() {
    gameOverScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    startGame();
});

// Función para iniciar el juego
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    previousGuesses = [];
    document.getElementById('message').textContent = '';
    document.getElementById('previousGuesses').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessButton').disabled = false;
    document.getElementById('resetButton').style.display = 'none';
    createBackgroundSound(); // Reiniciar el sonido de fondo
}

// Función para crear un sonido de fondo tipo 8 bits con melodía y vibrato
function createBackgroundSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'square'; // Tipo de onda
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime); // Volumen

    // Frecuencias para las notas Do, Re, Mi, Fa, Sol (en Hz)
    const notes = [261.63, 293.66, 329.63, 349.23, 392.00];
    let currentNote = 0;

    // Cambiar la frecuencia cada 0.5 segundos
    setInterval(() => {
        oscillator.frequency.setValueAtTime(notes[currentNote], audioContext.currentTime);
        currentNote = (currentNote + 1) % notes.length; // Avanzar a la siguiente nota
    }, 500); // Cambiar cada 500 ms (0.5 segundos)

    // Vibrato: variación rápida de la frecuencia
    const vibrato = audioContext.createOscillator();
    vibrato.frequency.setValueAtTime(5, audioContext.currentTime); // 5 Hz (velocidad del vibrato)
    const vibratoGain = audioContext.createGain();
    vibratoGain.gain.setValueAtTime(10, audioContext.currentTime); // Intensidad del vibrato

    vibrato.connect(vibratoGain);
    vibratoGain.connect(oscillator.frequency); // Aplicar vibrato a la frecuencia
    vibrato.start();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    return { oscillator, gainNode, vibrato };
}

// Función para detener el sonido de fondo
function stopBackgroundSound() {
    if (backgroundSound) {
        backgroundSound.oscillator.stop(); // Detener el oscilador
        backgroundSound.oscillator.disconnect(); // Desconectar el oscilador
        if (backgroundSound.vibrato) {
            backgroundSound.vibrato.stop(); // Detener el vibrato
            backgroundSound.vibrato.disconnect(); // Desconectar el vibrato
        }
        backgroundSound = null; // Reiniciar la variable
    }
}
