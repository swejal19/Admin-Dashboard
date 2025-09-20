/*
    JS logic for the Requests Page
    - Fetches dummy data and populates the table.
    - Handles 'Approve' and 'Reject' actions.
*/

document.addEventListener('DOMContentLoaded', async () => {
    const requestsTableBody = document.getElementById('requests-table-body');

    // Fetch dummy data
    const response = await fetch('requests.json');
    const requests = await response.json();

    const renderTable = (data) => {
        requestsTableBody.innerHTML = '';
        data.forEach(req => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${req.name}</td>
                <td>${req.email}</td>
                <td>${req.relation}</td>
                <td>${req.dateRequested}</td>
                <td>
                    <button class="btn btn-success" data-id="${req.id}" data-action="approve">Approve</button>
                    <button class="btn btn-warning" data-id="${req.id}" data-action="reject">Reject</button>
                </td>
            `;
            requestsTableBody.appendChild(row);
        });
    };

    renderTable(requests);

    // Handle button clicks
    requestsTableBody.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        const id = button.dataset.id;
        const action = button.dataset.action;

        // In a real app, you would send an API request here.
        if (action === 'approve') {
            console.log(`Approving request with ID: ${id}`);
            alert(`Request ${id} has been approved.`);
            // Simulate removal of the row
            const updatedRequests = requests.filter(r => r.id !== id);
            renderTable(updatedRequests);
        } else if (action === 'reject') {
            console.log(`Rejecting request with ID: ${id}`);
            alert(`Request ${id} has been rejected.`);
            // Simulate removal of the row
            const updatedRequests = requests.filter(r => r.id !== id);
            renderTable(updatedRequests);
        }
    });
});
