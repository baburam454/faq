document.querySelectorAll('.faq-dropdown-header').forEach(header => {
    header.addEventListener('click', function() {
        const body = this.nextElementSibling;

        // Toggle the 'open' class on the body to show or hide the content
        body.classList.toggle('open');

        // Change the button text based on the visibility of the content
        if (body.classList.contains('open')) {
            this.querySelector('.faq-icon').textContent = '▲'; // Collapse icon
        } else {
            this.querySelector('.faq-icon').textContent = '▼'; // Expand icon
        }
    });
});
