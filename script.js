// Função para filtrar vídeos com base na categoria
function filtrarCategoria(categoria) {
    const videos = document.querySelectorAll('.video-item');
    
    videos.forEach(video => {
        if (video.getAttribute('data-categoria') === categoria) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

// Função para mostrar todos os vídeos
function mostrarTodos() {
    const videos = document.querySelectorAll('.video-item');
    
    videos.forEach(video => {
        video.style.display = 'block';
    });
}

// Função para adicionar/remover o estado de "curtido" no botão
function toggleLike(button) {
    if (button.textContent === 'Curtir') {
        button.textContent = 'Curtido';
        button.style.backgroundColor = 'green';
    } else {
        button.textContent = 'Curtir';
        button.style.backgroundColor = '';
    }
}