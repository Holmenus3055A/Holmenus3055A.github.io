document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.profile-img');

    // Lista de imágenes
    const images = [
        'Archivos/ZynezPurple.png',
        'Archivos/Zynez.png',
        'Archivos/ZynezLightBlue.png'
    ];

    // Cambiar imagen aleatoriamente cada 2 segundos
    setInterval(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        img.src = randomImage;
    }, 2000);
});
