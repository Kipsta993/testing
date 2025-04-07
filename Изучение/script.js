function updateScreenSize() {
    const widthElement = document.getElementById('width');
    const heightElement = document.getElementById('height');
    
    widthElement.textContent = window.innerWidth;
    heightElement.textContent = window.innerHeight;
}

// Обновляем размеры при загрузке страницы
window.addEventListener('load', updateScreenSize);

// Обновляем размеры при изменении размера окна
window.addEventListener('resize', updateScreenSize); 