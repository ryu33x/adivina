# Juego "Adivina el Número"

## Descripción
Un juego interactivo de navegador donde el jugador debe adivinar un número aleatorio entre 1 y 100 en un máximo de 10 intentos. El juego incluye efectos de sonido, múltiples pantallas y retroalimentación para el usuario.

## Características
- Interfaz de usuario amigable e intuitiva
- Tres pantallas diferentes: inicio, juego y game over
- Sonidos de fondo con efectos 8-bit y vibrato
- Sistema de pistas que indica si el número es mayor o menor
- Seguimiento de intentos anteriores
- Límite de 10 intentos
- Mensajes de retroalimentación para el usuario

## Archivos del Proyecto
El proyecto consta de tres archivos principales:

1. **index.html** - Estructura de la página web
2. **styles.css** - Estilos y diseño visual
3. **script.js** - Lógica del juego y funcionalidades

## Cómo Jugar
1. Al cargar la página, aparecerá la pantalla de inicio con un botón para comenzar
2. Haz clic en "Iniciar" para empezar el juego
3. Introduce un número entre 1 y 100 en el campo de entrada
4. Haz clic en "Adivinar" para verificar tu respuesta
5. El juego proporcionará pistas indicando si el número es mayor o menor
6. Tienes un máximo de 10 intentos para adivinar el número correcto
7. Si adivinas el número, ganarás el juego
8. Si agotas los 10 intentos, se mostrará la pantalla de "Game Over"
9. Desde la pantalla de "Game Over", puedes hacer clic en "Jugar de nuevo" para reiniciar

## Detalles Técnicos

### HTML (index.html)
- Estructura básica de la página web
- Tres secciones principales (div con clase "screen"):
  - Pantalla de inicio
  - Pantalla del juego
  - Pantalla de Game Over
- Botones para interactuar con el juego
- Campo de entrada para las suposiciones del usuario

### CSS (styles.css)
- Estilo minimalista y amigable
- Distinción visual entre las diferentes pantallas:
  - Pantalla de inicio con fondo verde claro
  - Pantalla de juego con estilo neutral
  - Pantalla de Game Over con fondo rojo claro
- Botones con efectos hover para mejorar la experiencia del usuario
- Diseño responsive centrado en la pantalla

### JavaScript (script.js)
- Generación de números aleatorios
- Manejo de eventos para los botones y la entrada del usuario
- Lógica de verificación de adivinanzas
- Sistema de sonido con Web Audio API:
  - Sonido de fondo tipo 8-bit con melodía y vibrato
  - Osciladores para generar diferentes tonos
  - Control de volumen y efectos
- Transiciones entre las diferentes pantallas
- Validación de entrada del usuario
- Seguimiento de intentos y límite máximo

## Requisitos Técnicos
- Navegador web moderno con soporte para JavaScript ES6
- Soporte para Web Audio API (la mayoría de los navegadores modernos lo tienen)
- No requiere instalación ni dependencias adicionales

## Posibles Mejoras
- Añadir diferentes niveles de dificultad
- Implementar efectos de sonido adicionales para aciertos y fallos
- Agregar un sistema de puntuación basado en el número de intentos
- Añadir animaciones para hacer la experiencia más atractiva
- Implementar un modo multijugador

## Licencia
Este proyecto es de código abierto y puede ser modificado y distribuido libremente.

---

Creado con ❤️ para aprender y divertirse.
