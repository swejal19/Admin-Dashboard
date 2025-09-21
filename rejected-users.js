let rejectedUsersData = [];
let filteredUsers = [];
const usersPerPage = 5;
let currentPage = 1;

// Custom modal function to replace alert()
function showModal(message) {
    const modal = document.getElementById('customModal');
    const modalMessage = document.getElementById('modalMessage');
    const modalOkBtn = document.getElementById('modalOkBtn');

    modalMessage.textContent = message;
    modal.style.display = 'block';

    modalOkBtn.onclick = function() {
        modal.style.display = 'none';
    };
}

// Function to render the table rows based on current data
function renderTable(users, page) {
    const tableBody = document.getElementById('rejected-users-table-body');
    tableBody.innerHTML = '';
    
    const start = (page - 1) * usersPerPage;
    const end = start + usersPerPage;
    const paginatedUsers = users.slice(start, end);

    if (paginatedUsers.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `<td colspan="5" style="text-align: center; padding: 20px;">No rejected users found.</td>`;
        tableBody.appendChild(noDataRow);
    } else {
        paginatedUsers.forEach(user => {
            const row = document.createElement('tr');
            row.dataset.id = user.id;
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="status rejected">${user.status}</span></td>
                <td>
                    <button class="btn btn-restore btn-sm">Restore</button>
                    <button class="btn btn-delete btn-sm">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Function to render pagination buttons
function renderPagination(users) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const pageCount = Math.ceil(users.length / usersPerPage);

    // Only show pagination if more than usersPerPage users exist
    if (users.length <= usersPerPage) return;

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            renderTable(users, currentPage);
            renderPagination(users); // Update active state
        });
        paginationContainer.appendChild(button);
    }
}


// Function to filter users based on search input
function filterUsers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredUsers = rejectedUsersData.filter(user => 
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.role.toLowerCase().includes(searchTerm)
    );
    
    currentPage = 1; // Reset to the first page for new search results
    renderTable(filteredUsers, currentPage);
    renderPagination(filteredUsers);
}

// Event listener for button clicks (Restore/Delete)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-restore')) {
        const row = e.target.closest('tr');
        const userId = parseInt(row.dataset.id);
        row.remove();
        showModal('User restored successfully!');
        
        const index = rejectedUsersData.findIndex(user => user.id === userId);
        if (index > -1) rejectedUsersData.splice(index, 1);

        filterUsers();

    } else if (e.target.classList.contains('btn-delete')) {
        const row = e.target.closest('tr');
        const userId = parseInt(row.dataset.id);
        row.remove();
        showModal('User permanently deleted!');
        
        const index = rejectedUsersData.findIndex(user => user.id === userId);
        if (index > -1) rejectedUsersData.splice(index, 1);

        filterUsers();
    }
});

// Initialize the page on load using async/await
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('rejected-users.json');
        rejectedUsersData = await response.json();
        filteredUsers = rejectedUsersData;

        renderTable(filteredUsers, currentPage);
        renderPagination(filteredUsers);

        // Add event listener for search input
        document.getElementById('searchInput').addEventListener('input', filterUsers);

    } catch (error) {
        console.error('Error loading rejected users data:', error);
    }
});
