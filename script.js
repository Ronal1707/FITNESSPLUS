const images = document.querySelectorAll('.fade');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

images[currentIndex].classList.add('active'); // Muestra la primera imagen
setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos