const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function openModal(index) {
    modal.style.display = 'flex';
    currentIndex = index;
    modalImg.src = galleryItems[index].src;
}

function closeModal() {
    modal.style.display = 'none';
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});