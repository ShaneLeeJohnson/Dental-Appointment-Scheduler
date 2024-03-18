// Function to receive appointments data
function processAppointments(data) {
        appointments = data;
    }

document.addEventListener('DOMContentLoaded', function() {
    // Function to create and append date divs for the next two months
    const appendDateDivs = () => {
        const container = document.getElementById('background-appointments');
        const currentDate = new Date();
        const twoMonthsFromNow = new Date(currentDate);
        twoMonthsFromNow.setMonth(currentDate.getMonth() + 2);

        // Loop through dates from current date to two months later
        while (currentDate < twoMonthsFromNow) {
            // Create a div for each date
            const divRow = document.createElement('div');
            divRow.classList.add('row');

            const dateDiv = document.createElement('div');
            dateDiv.classList.add('current-date');
            dateDiv.innerHTML = `<p class="date">${currentDate.toLocaleDateString()}</p>`;
            
            // Append divRow to the container
            container.appendChild(divRow);
            divRow.appendChild(dateDiv);

            // Filter appointments for the current date
            const appointmentsForDate = appointments.filter(appointment => {
                // Get the UTC date strings for comparison
                const currentDateUTC = currentDate.toISOString().split('T')[0];
                const appointmentDateUTC = new Date(appointment.date).toISOString().split('T')[0];
                return currentDateUTC === appointmentDateUTC;
            });

            // Create a div to hold appointments for the current date
            const appointmentsHolder = document.createElement('div');
            appointmentsHolder.classList.add('appointments-holder');

            // Loop through appointments for the current date and create buttons
            appointmentsForDate.forEach(appointment => {
                // Create appointment button
                const appointmentButton = document.createElement('button');
                appointmentButton.classList.add('appointment'); // Add class for styling
                appointmentButton.addEventListener('click', function() {
                    // Redirect to the appointment details page when the button is clicked
                    window.location.href = `/appointments/${appointment.id}`;
                });
                // const appointmentDate = new Date(appointment.date);
                // Format the time to 12-hour format
                // const appointmentTime = appointmentDate.toLocaleTimeString('en-US', {
                //     hour: 'numeric',
                //     minute: 'numeric',
                //     hour12: true
                // });
                // appointmentButton.href = `/appointments/${appointment.id}`; // Set href attribute dynamically
                appointmentButton.innerHTML = `
                    <p>${appointment.first_name} ${appointment.last_name}</p>
                    <p>${appointment.phone_number}</p>
                    <p>${appointment.time}</p>
                    <p>${appointment.reason}</p>
                `;
                appointmentsHolder.appendChild(appointmentButton);
            });

            // Append appointmentsHolder to the dateDiv
            divRow.appendChild(appointmentsHolder);

            // Move to the next day
            currentDate.setDate(currentDate.getDate() + 1);
        }
    };

    // Call the function to append date divs and appointments
    appendDateDivs();
});