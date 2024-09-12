// Function to filter disaster information based on the selected category
function filterData(category) {
    // Fetch all update items
    const allItems = document.querySelectorAll('.update-item');
    
    // Show or hide items based on the category
    allItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Example function to populate latest disaster updates (for demonstration)
function populateUpdates() {
    const dataGrid = document.getElementById('data-grid');
    
    // Example data - replace with real data as needed
    const updates = [
        { title: 'Flood in Region A', description: 'Heavy rains have caused flooding in Region A. Emergency services are on high alert.' },
        { title: 'Earthquake in City B', description: 'An earthquake of magnitude 6.2 hit City B. Aftershocks are expected.' },
        { title: 'Wildfire in Forest C', description: 'A wildfire is spreading in Forest C. Evacuation orders are in place.' },
        { title: 'Pandemic Update', description: 'New guidelines issued for pandemic management. Stay updated for safety measures.' }
    ];

    // Clear existing updates
    dataGrid.innerHTML = '';

    // Populate updates
    updates.forEach(update => {
        const updateItem = document.createElement('div');
        updateItem.className = 'update-item';
        updateItem.innerHTML = `
            <h4>${update.title}</h4>
            <p>${update.description}</p>
        `;
        dataGrid.appendChild(updateItem);
    });
}

// Call populateUpdates function on page load to show example data
document.addEventListener('DOMContentLoaded', populateUpdates);


// Form validation for contact page
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            
            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                alert('Your message has been sent!');
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
