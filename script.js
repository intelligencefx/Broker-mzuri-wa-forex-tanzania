// Get all broker cards
const brokerCards = document.querySelectorAll('.broker-card');

// Add event listeners to each toggle button
brokerCards.forEach(card => {
    const toggleBtn = card.querySelector('.toggle-details-btn');
    const introduction = card.querySelector('.introduction');

    toggleBtn.addEventListener('click', () => {
        // Toggle the display of the introduction text
        if (introduction.style.display === 'none' || introduction.style.display === '') {
            introduction.style.display = 'block';
            toggleBtn.textContent = 'Hide Details';
        } else {
            introduction.style.display = 'none';
            toggleBtn.textContent = 'Toggle Details';
        }
    });
});

// Optional: Add a filter functionality (e.g., by minimum deposit or leverage)
document.addEventListener('DOMContentLoaded', () => {
    const filterInput = document.createElement('input');
    filterInput.type = 'text';
    filterInput.placeholder = 'Filter brokers by name...';
    filterInput.className = 'filter-input';
    document.querySelector('.broker-list h1').insertAdjacentElement('afterend', filterInput);

    filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.toLowerCase();
        brokerCards.forEach(card => {
            const brokerName = card.querySelector('h2').textContent.toLowerCase();
            if (brokerName.includes(filterValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});