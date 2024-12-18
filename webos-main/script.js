function updateDateTime() {
    const now = new Date();

    // Update clock in the header
    const hoursHeader = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutesHeader = now.getMinutes();
    const ampmHeader = now.getHours() >= 12 ? 'PM' : 'AM';
    const timeStringHeader = `${hoursHeader}:${minutesHeader < 10 ? '0' : ''}${minutesHeader} ${ampmHeader}`;
    document.getElementById('datetime').textContent = timeStringHeader;

    // Update clock in the main area
    const hoursMain = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutesMain = now.getMinutes();
    const ampmMain = now.getHours() >= 12 ? '' : '';
    const timeStringMain = `${hoursMain}:${minutesMain < 10 ? '0' : ''}${minutesMain} ${ampmMain}`;
    document.getElementById('clock').textContent = timeStringMain;

    // Update date
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dateString = `${dayOfWeek}, ${dayOfMonth}${getDaySuffix(dayOfMonth)} ${month} ${year}`;
    document.getElementById('date').textContent = dateString;
}

// Function to get the suffix for the day of the month (e.g., 1st, 2nd, 3rd, etc.)
function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time immediately
updateDateTime();

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault(); // Prevent any default action
        window.location.href = '../website/index.html?num=12345'; // Replace with your desired URL
    }
    if (event.ctrlKey && event.key === 'x') {
        event.preventDefault(); // Prevent any default action
        window.location.href = '../tutorial/index.html'; // Navigate to example.com
    }
});
