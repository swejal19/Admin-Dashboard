/*
    JS logic for the Approved Users Page
    - Fetches dummy data and populates the table.
    - Handles 'Block' and 'Remove' actions.
*/

document.addEventListener('DOMContentLoaded', async () => {
    const approvedUsersTableBody = document.getElementById('approved-users-table-body');

    // Fetch dummy data
    const response = await fetch('approved-users.json');
    const users = await response.json();

    const renderTable = (data) => {
        approvedUsersTableBody.innerHTML = '';
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>${user.status}</td>
                <td>
                    <button class="btn btn-danger" data-id="${user.id}" data-action="block">Block</button>
                    <button class="btn btn-warning" data-id="${user.id}" data-action="remove">Remove</button>
                </td>
            `;
            approvedUsersTableBody.appendChild(row);
        });
    };

    renderTable(users);

    // Handle button clicks
    approvedUsersTableBody.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        const id = button.dataset.id;
        const action = button.dataset.action;

        // In a real app, you would send an API request here.
        if (action === 'block') {
            console.log(`Blocking user with ID: ${id}`);
            alert(`User ${id} has been blocked.`);
            // Simulate a state change
            const userIndex = users.findIndex(u => u.id === id);
            if (userIndex > -1) {
                users[userIndex].status = 'Blocked';
                renderTable(users); // Re-render the table
            }
        } else if (action === 'remove') {
            console.log(`Removing user with ID: ${id}`);
            alert(`User ${id} has been removed.`);
            // Simulate a state change by filtering out the user
            const updatedUsers = users.filter(u => u.id !== id);
            renderTable(updatedUsers);
        }
    });
});
