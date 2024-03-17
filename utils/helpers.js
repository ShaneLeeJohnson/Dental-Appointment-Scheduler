function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function format12Hour(time) {
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours, 10); // Convert hours to an integer to remove any leading zeros
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = ((hours + 11) % 12 + 1); // Convert 24hr time to 12hr time
    return `${hours}:${minutes} ${ampm}`;
}

module.exports = {
    formatDate,
    format12Hour,
    // ... other helpers ...
};