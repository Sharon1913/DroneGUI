// Mock credentials
const validCredentials = { username: "admin", password: "1234" };

// Handle Login
if (window.location.pathname.includes("login.html")) {
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validCredentials.username && password === validCredentials.password) {
      window.location.href = "add-video.html"; // Redirect to the add video page
    } else {
      alert("Invalid credentials!");
    }
  });
}

// Handle Video Link Submission
document.getElementById("video-link-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const videoLink = document.getElementById("video-link").value;

  // Store the video link in local storage
  localStorage.setItem("videoSrc", videoLink);
  alert("Video link submitted! Redirecting to live stream page...");
  window.location.href = "live-stream.html"; // Redirect to live stream page
});

// Drone Commands
function sendCommand(command) {
  console.log(`Command sent: ${command}`);
  // Integrate real backend or WebSocket for actual commands
}
// Drone Commands
function sendCommand(command) {
  console.log(`Command sent: ${command}`);
  // Integrate real backend or WebSocket for actual commands
}

// Show Coordinates Form
function showCoordinatesForm() {
  const form = document.getElementById("coordinates-form");
  form.classList.remove("hidden"); // Show the form
}

// Handle Coordinates Submission
document.getElementById("coord-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;

  if (validateCoordinates(latitude, longitude)) {
    console.log(`Coordinates sent: Latitude ${latitude}, Longitude ${longitude}`);
    alert(`Coordinates submitted: Latitude ${latitude}, Longitude ${longitude}`);
    // Hide the form after submission
    document.getElementById("coordinates-form").classList.add("hidden");
  } else {
    alert("Please enter valid coordinates!");
  }
});


// Validate Coordinates
function validateCoordinates(lat, lon) {
  const latNum = parseFloat(lat);
  const lonNum = parseFloat(lon);

  // Latitude must be between -90 and 90, Longitude between -180 and 180
  return (
    !isNaN(latNum) &&
    !isNaN(lonNum) &&
    latNum >= -90 &&
    latNum <= 90 &&
    lonNum >= -180 &&
    lonNum <= 180
  );
}
