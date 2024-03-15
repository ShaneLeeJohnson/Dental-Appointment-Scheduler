document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('appointmentForm');
    const removeButton = document.getElementById('removeButton');
    const appointmentId = form.dataset.appointmentId; /// This will get the appointment ID from the form's data attribute

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('/appointments/' + appointmentId + '/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Appointment updated successfully!');
                window.location.href = '/appointments';
            } else {
                throw new Error('Could not update the appointment');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error updating appointment: ' + error.message);
        }
    });

    removeButton.addEventListener('click', async function() {
        if (!confirm('Are you sure you want to delete this appointment?')) return;

        try {
            const response = await fetch('/appointments/' + appointmentId + '/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert('Appointment removed successfully!');
                window.location.href = '/appointments';
            } else {
                throw new Error('Could not delete the appointment');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error removing appointment: ' + error.message);
        }
    });
});
