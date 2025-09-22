
        // Store family member data
        let familyMembers = [];

        // Function to create a new family member card element
        function createFamilyMemberCard(data = {}) {
            const card = document.createElement('div');
            card.classList.add('family-member-card');
            
            card.innerHTML = `
                <button type="button" class="remove-card-btn">
                    <svg data-feather="x-circle"></svg>
                </button>
                <h3>Family Member</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label>Family Member Name</label>
                        <input type="text" name="familyName[]" placeholder="Full Name" value="${data.name || ''}" required>
                    </div>
                    <div class="form-group">
                        <label>Relation</label>
                        <input type="text" name="relation[]" placeholder="e.g., Spouse, Child" value="${data.relation || ''}" required>
                    </div>
                    <div class="form-group">
                        <label>Age</label>
                        <input type="number" name="age[]" placeholder="Age" value="${data.age || ''}" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" name="familyEmail[]" placeholder="Email (Optional)" value="${data.email || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Role/Position</label>
                        <input type="text" name="rolePosition[]" placeholder="e.g., Student, Doctor" value="${data.role || ''}">
                    </div>
                    <div class="form-group">
                        <label>Photo Upload</label>
                        <input type="file" name="photoUpload[]" accept="image/*">
                        <p class="photo-upload-hint">Note: File upload functionality requires a server backend.</p>
                    </div>
                </div>
                <div class="form-group full-width">
                    <label>Notes/Verification Details (Optional)</label>
                    <textarea name="notes[]" rows="4" placeholder="Enter any relevant notes or verification details...">${data.notes || ''}</textarea>
                </div>
            `;
            
            // Add event listener to remove the card
            card.querySelector('.remove-card-btn').addEventListener('click', () => {
                card.remove();
                // Re-render the summary table
                renderSummaryTable();
            });
            
            return card;
        }

        // Function to render the summary table
        function renderSummaryTable() {
            const tableBody = document.getElementById('summary-table-body');
            tableBody.innerHTML = '';
            
            // Collect data from all current cards on the page
            const cards = document.querySelectorAll('.family-member-card');
            familyMembers = [];
            cards.forEach(card => {
                const name = card.querySelector('[name="familyName[]"]').value;
                const relation = card.querySelector('[name="relation[]"]').value;
                const age = card.querySelector('[name="age[]"]').value;
                const email = card.querySelector('[name="familyEmail[]"]').value;
                const role = card.querySelector('[name="rolePosition[]"]').value;
                
                familyMembers.push({ name, relation, age, email, role });
            });

            if (familyMembers.length === 0) {
                document.getElementById('summary-container').style.display = 'none';
                return;
            } else {
                document.getElementById('summary-container').style.display = 'block';
            }

            familyMembers.forEach(member => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${member.name || ''}</td>
                    <td>${member.relation || ''}</td>
                    <td>${member.age || ''}</td>
                    <td>${member.email || ''}</td>
                    <td>${member.role || ''}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Event listener for the "Add Another" button
        document.getElementById('add-another-btn').addEventListener('click', () => {
            const container = document.getElementById('family-member-container');
            container.appendChild(createFamilyMemberCard());
            feather.replace(); // Re-render icons on the new card
        });

        // Event listener for the form submission
        document.getElementById('info-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect all data from the form
            const formData = new FormData(e.target);
            const data = {};
            
            // Process the repeatable fields
            data.family = [];
            const familyNames = formData.getAll('familyName[]');
            const relations = formData.getAll('relation[]');
            const ages = formData.getAll('age[]');
            const emails = formData.getAll('familyEmail[]');
            const roles = formData.getAll('rolePosition[]');
            const notes = formData.getAll('notes[]');
            
            for (let i = 0; i < familyNames.length; i++) {
                data.family.push({
                    name: familyNames[i],
                    relation: relations[i],
                    age: ages[i],
                    email: emails[i],
                    role: roles[i],
                    notes: notes[i]
                });
            }
            
            // In a real application, you would save this data to a database.
            // Example: Using Firestore or another backend service
            console.log('Data to be saved:', data);
            alert('Family information saved successfully!');
            
            // Update the summary table
            renderSummaryTable();
        });

        // Add the initial family member card on page load
        window.addEventListener('load', () => {
            document.getElementById('family-member-container').appendChild(createFamilyMemberCard());
            feather.replace(); // Replace icons on initial card
        });
    