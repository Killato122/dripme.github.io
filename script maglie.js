const img = document.querySelector('.maglia');

// Crea la lente
const lente = document.createElement('div');
lente.classList.add('lente');
document.body.appendChild(lente);

function attivaLente(e) {
    if (window.innerWidth > 768) {  // Solo su desktop
        const { left, top, width, height } = img.getBoundingClientRect();
        const imgWidth = img.naturalWidth;
        const imgHeight = img.naturalHeight;

        // Calcola la posizione del cursore relativa all'immagine visibile
        let xRatio = (e.clientX - left) / width;
        let yRatio = (e.clientY - top) / height;

        // Calcola la posizione dei pixel ingranditi
        const zoomX = xRatio * imgWidth - lente.offsetWidth / 2;
        const zoomY = yRatio * imgHeight - lente.offsetHeight / 2;

        // Mostra la lente e posizionala vicino al cursore
        lente.style.display = 'block';
        lente.style.left = `${e.clientX + 20}px`;  // Spostamento a destra del cursore
        lente.style.top = `${e.clientY + 20}px`;  // Spostamento sotto il cursore
        lente.style.backgroundImage = `url(${img.src})`;
        lente.style.backgroundSize = `${imgWidth}px ${imgHeight}px`;
        lente.style.backgroundPosition = `-${zoomX}px -${zoomY}px`;
    }
}

// Nascondi la lente quando il cursore esce dall’immagine
img.addEventListener('mouseleave', function () {
    lente.style.display = 'none';
});

// Attiva la lente su desktop
img.addEventListener('mousemove', attivaLente);






// Lightbox per dispositivi mobili
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

img.addEventListener('click', function () {
    if (window.innerWidth <= 768) {  // Solo su mobile
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    }
});

// Evento per chiudere la lightbox
closeLightbox.addEventListener('click', function () {
    lightbox.style.display = 'none';
});
