let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        pages[currentPage].style.transform = "rotateY(-180deg) scaleX(0)"; // Efecto de pase de hoja
        setTimeout(() => {
            pages[currentPage].style.display = "none";
            currentPage++;
            pages[currentPage].style.display = "flex";
            pages[currentPage].classList.add('active');
            pages[currentPage].style.transform = "rotateY(0deg) scaleX(1)";
        }, 600);
    }
}

function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.remove('active');
        pages[currentPage].style.transform = "rotateY(180deg) scaleX(0)"; // Efecto de pase de hoja
        setTimeout(() => {
            pages[currentPage].style.display = "none";
            currentPage--;
            pages[currentPage].style.display = "flex";
            pages[currentPage].classList.add('active');
            pages[currentPage].style.transform = "rotateY(0deg) scaleX(1)";
        }, 600);
    }
}
