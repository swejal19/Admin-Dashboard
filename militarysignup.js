
        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would handle user registration here.
            // Example: using Firebase, an API call, etc.
            
            // Get form values
            const fullName = document.getElementById('fullName').value;
            const serviceNumber = document.getElementById('serviceNumber').value;
            const rank = document.getElementById('rank').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log('Signup Attempt:', { fullName, serviceNumber, rank, email });

            // Simulating a successful signup
            // After successful signup, redirect to the info collection page
            window.location.href = 'militaryinfo.html';
        });