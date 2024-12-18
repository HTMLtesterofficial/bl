function openVPN() {
  var newWindow = window.open("about:blank", "_blank");
  newWindow.document.write('<iframe src="https://gplace.vercel.app/" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>');
}
function chat() {
  var newWindow = window.open("about:blank", "_blank");
  newWindow.document.write('<iframe src="https://ntfy.sh/app" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>');
}
function opengams() {
  var newWindow = window.open("about:blank", "_blank");
  newWindow.document.write('<iframe src="https://htmltesterofficial.github.io/Gams-bl/Gams.html" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>');
}
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
//navigation assistant javascript code
function navassistance() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//Cookies scripts