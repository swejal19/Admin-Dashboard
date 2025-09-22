document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would handle user authentication here.
            // Check credentials against a database.
            
            const serviceNumber = document.getElementById('serviceNumber').value;
            const password = document.getElementById('password').value;
            
            console.log('Login Attempt:', { serviceNumber });

            // Simulating a successful login
            // After successful login, redirect to the info collection page
            window.location.href = 'militaryinfo.html';
        });