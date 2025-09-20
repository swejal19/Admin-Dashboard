/*
    JS logic for the Reports Page
    - Renders charts using Chart.js.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded. Please ensure the script is linked correctly.');
        return;
    }

    // Dummy data for the charts
    const approvedUsersData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label: 'Approved Users',
            data: [1000, 1150, 1300, 1450, 1600, 1750, 1900, 2050],
            borderColor: '#5A6070',
            backgroundColor: 'transparent',
            pointBackgroundColor: '#5A6070',
            tension: 0.4,
            fill: false,
            borderWidth: 2
        }]
    };

    const processedRequestsData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Processed Requests',
            data: [16, 20, 18, 24, 30, 12, 8],
            backgroundColor: '#5A6070',
            borderWidth: 1
        }]
    };

    const maliciousActivityData = {
        labels: ['Abnormal', 'Fake Spam', 'Unauthorized', 'Login Attempts', 'Other'],
        datasets: [{
            data: [45, 15, 10, 25, 5],
            backgroundColor: ['#5A6070', '#e74c3c', '#f39c12', '#2ecc71', '#95a5a6'],
            borderWidth: 1
        }]
    };

    // Chart.js options
    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const donutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%'
    };

    // Render charts
    new Chart(
        document.getElementById('approvedUsersChart'),
        {
            type: 'line',
            data: approvedUsersData,
            options: lineChartOptions
        }
    );

    new Chart(
        document.getElementById('processedRequestsChart'),
        {
            type: 'bar',
            data: processedRequestsData,
            options: barChartOptions
        }
    );

    new Chart(
        document.getElementById('maliciousActivityChart'),
        {
            type: 'doughnut',
            data: maliciousActivityData,
            options: donutChartOptions
        }
    );

    // Handle Download PDF button click (dummy action)
    document.getElementById('downloadPdfBtn').addEventListener('click', () => {
        alert('Downloading PDF report...');
    });
});
