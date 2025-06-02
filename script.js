let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add("page-turning");
        setTimeout(() => {
            pages[currentPage].classList.remove("active");
            pages[currentPage].classList.remove("page-turning");
            currentPage++;
            pages[currentPage].classList.add("active");
            pages[currentPage].classList.add("page-entering");
            setTimeout(() => {
                pages[currentPage].classList.remove("page-entering");
            }, 500);
        }, 500);
    }
}

function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.add("page-turning");
        setTimeout(() => {
            pages[currentPage].classList.remove("active");
            pages[currentPage].classList.remove("page-turning");
            currentPage--;
            pages[currentPage].classList.add("active");
            pages[currentPage].classList.add("page-entering");
            setTimeout(() => {
                pages[currentPage].classList.remove("page-entering");
            }, 500);
        }, 500);
    }
}
