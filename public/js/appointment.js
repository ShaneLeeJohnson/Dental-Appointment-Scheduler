// Import necessary modules
const loadAppointments = require('./loadAppointments');

// Function to create and append date divs for the next two months
const appendDateDivs = async () => {
    const container = document.getElementById('background-appointments');
    const currentDate = new Date();
    const twoMonthsFromNow = new Date(currentDate);
    twoMonthsFromNow.setMonth(currentDate.getMonth() + 2);

    // Loop through dates from current date to two months later
    while (currentDate < twoMonthsFromNow) {
        // Create a div for each date
        const dateDiv = document.createElement('div');
        dateDiv.id = 'current-date';
        dateDiv.innerHTML = `<p class="date">${currentDate.toISOString().split('T')[0]}</p>`;
        container.appendChild(dateDiv);

        // Fetch appointments for the current date
        const appointments = await loadAppointments(currentDate);

        // Create a div to hold appointments for the current date
        const appointmentsHolder = document.createElement('div');
        appointmentsHolder.id = 'appointments-holder';

        // Loop through appointments and create buttons for each appointment
        appointments.forEach(appointment => {
            // Create appointment button
            const appointmentButton = document.createElement('a');
            appointmentButton.classList.add('appointment'); // Add class for styling
            appointmentButton.href = `/appointments/${appointment.id}`; // Set href attribute dynamically
            appointmentButton.innerHTML = `
                <p>${appointment.first_name} ${appointment.last_name}</p>
                <p>${appointment.phone_number}</p>
                <p>${appointment.time}</p>
                <p>A.R.</p>
            `;
            appointmentsHolder.appendChild(appointmentButton);
        });

        // Append appointments holder to the container
        container.appendChild(appointmentsHolder);

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
};

// Call the function to append date divs and appointments
appendDateDivs();