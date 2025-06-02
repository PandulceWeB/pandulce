let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        pages[currentPage].style.transform = "rotateY(-90deg)"; // Efecto de pase de hoja
        currentPage++;
        pages[currentPage].classList.add('active');
        pages[currentPage].style.transform = "rotateY(0deg)";
    }
}

function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.remove('active');
        pages[currentPage].style.transform = "rotateY(90deg)"; // Efecto de pase de hoja
        currentPage--;
        pages[currentPage].classList.add('active');
        pages[currentPage].style.transform = "rotateY(0deg)";
    }
}
