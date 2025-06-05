let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add("page-turning");
        setTimeout(() => {
            pages[currentPage].classList.remove("active", "page-turning");
            currentPage++;
            pages[currentPage].classList.add("active");
        }, 600);
    }
}

function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.add("page-turning");
        setTimeout(() => {
            pages[currentPage].classList.remove("active", "page-turning");
            currentPage--;
            pages[currentPage].classList.add("active");
        }, 600);
    }
}
