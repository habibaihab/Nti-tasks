document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll('.nav-link');
    const cards = document.querySelectorAll('.card-item');
    filterLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            filterLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            const filterCategory = this.getAttribute('data-filter');
            cards.forEach(card => {
                if (filterCategory === 'all') {
                    card.style.display = 'block';
                } else {
                    const categories = card.getAttribute('data-category').split(',');
                    if (categories.includes(filterCategory)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});