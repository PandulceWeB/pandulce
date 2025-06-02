let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
    }
}

function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.add('active');
    }
}
