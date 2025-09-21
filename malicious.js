/*
    JS logic for the Malicious Activity Page
    - Fetches dummy data and populates the table.
    - Handles 'Block' and 'Reject' actions.
*/

document.addEventListener('DOMContentLoaded', async () => {
    const maliciousTableBody = document.getElementById('malicious-table-body');

    // Fetch dummy data
    const response = await fetch('malicious.json');
    const malicious = await response.json();

    const renderTable = (data) => {
        maliciousTableBody.innerHTML = '';
        data.forEach(log => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${log.email}</td>
                <td>${log.role}</td>
                <td>${log.timestamp}</td>
                <td>${log.activityType}</td>
                <td class="status ${log.status.toLowerCase()}">${log.status}</td>
                <td>
                    <button class="btn btn-danger" data-id="${log.id}" data-action="block">Block</button>
                    <button class="btn btn-warning" data-id="${log.id}" data-action="reject">Reject</button>
                </td>
            `;
            maliciousTableBody.appendChild(row);
        });
    };

    renderTable(malicious);

    // Handle button clicks
    maliciousTableBody.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        const id = button.dataset.id;
        const action = button.dataset.action;

        // In a real app, you would send an API request here.
        if (action === 'block') {
            console.log(`Blocking malicious activity with ID: ${id}`);
            alert(`Malicious activity ${id} has been blocked.`);
            // Simulate a state change
            const logIndex = malicious.findIndex(l => l.id === id);
            if (logIndex > -1) {
                malicious[logIndex].status = 'Blocked';
                renderTable(malicious); // Re-render the table
            }
        } else if (action === 'reject') {
            console.log(`Rejecting malicious activity with ID: ${id}`);
            alert(`Malicious activity ${id} has been rejected.`);
            // Simulate removal of the row
            const updatedMalicious = malicious.filter(l => l.id !== id);
            renderTable(updatedMalicious);
        }
    });
});
