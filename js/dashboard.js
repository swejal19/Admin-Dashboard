/*
    JS logic for the Dashboard Page
    - Populates dynamic data and recent activity.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Dummy data for the cards
    const approvedUsersCount = 1234;
    const pendingRequestsCount = 56;
    const maliciousLogsCount = 8;
    
    // Update card stats
    document.getElementById('approved-users-stat').textContent = approvedUsersCount.toLocaleString();
    document.getElementById('pending-requests-stat').textContent = pendingRequestsCount.toLocaleString();
    document.getElementById('malicious-logs-stat').textContent = maliciousLogsCount.toLocaleString();

    // Dummy data for recent activity log
    const recentActivity = [
        { type: 'approved', text: 'User John Doe approved a new request.' },
        { type: 'malicious', text: 'Malicious login attempt detected from IP 192.168.1.10.' },
        { type: 'registered', text: 'New user Jane Smith registered.' },
        { type: 'maintenance', text: 'System maintenance scheduled for 03/10/2024.' },
        { type: 'security', text: 'Security patch deployed successfully.' }
    ];

    const activityLogList = document.querySelector('.activity-log ul');

    recentActivity.forEach(activity => {
        const li = document.createElement('li');
        let iconHtml = '';
        switch (activity.type) {
            case 'approved':
                iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.8"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
                break;
            case 'malicious':
                iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
                break;
            case 'registered':
                iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>';
                break;
            case 'maintenance':
                iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.77 3.77a1 1 0 0 0 0 1.4zm-12.2 0a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.77 3.77a1 1 0 0 0 0 1.4z"></path></svg>';
                break;
            case 'security':
                iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>';
                break;
        }
        li.innerHTML = `<span>${iconHtml}</span> ${activity.text}`;
        activityLogList.appendChild(li);
    });

});
