function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function json(context) {
    return JSON.stringify(context);
}

module.exports = {
    formatDate,
    json,
    // ... other helpers ...
};