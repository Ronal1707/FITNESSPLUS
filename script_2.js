// Obtener el menú desplegable
var dropdownMenu = document.getElementById("dropdownMenu");

// Obtener todos los popups
var popups = {
    popup1: document.getElementById("popup1"),
    popup2: document.getElementById("popup2"),
    popup3: document.getElementById("popup3")
};

// Obtener todos los botones de cerrar (la 'x' de cada popup)
var closeButtons = document.getElementsByClassName("close");

// Función para abrir el popup correspondiente según la opción seleccionada
dropdownMenu.onchange = function() {
    // Primero cerrar todos los popups
    for (var key in popups) {
        if (popups.hasOwnProperty(key)) {
            popups[key].style.display = "none";
        }
    }
    
    // Mostrar el popup seleccionado
    var selectedPopup = popups[dropdownMenu.value];
    if (selectedPopup) {
        selectedPopup.style.display = "block";
    }
}

// Añadir funcionalidad a cada botón de cerrar
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        this.parentElement.parentElement.style.display = "none";
    }
}

// Cerrar el popup si se hace clic fuera de él
window.onclick = function(event) {
    for (var key in popups) {
        if (event.target == popups[key]) {
            popups[key].style.display = "none";
        }
    }
}

// Función para mostrar el popup
function mostrarPopup() {
    document.getElementById('popup-ticket').style.display = 'block';
}

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById('popup-ticket').style.display = 'none';
}