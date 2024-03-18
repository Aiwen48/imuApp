// Request permission to access device orientation and motion data
if (DeviceMotionEvent.requestPermission) {
    DeviceMotionEvent.requestPermission()
        .then(permissionState => {
            if (permissionState === 'granted') {
                window.addEventListener('devicemotion', handleMotionEvent);
            }
        })
        .catch(console.error);
} else {
    // Handle old browsers that do not support DeviceMotionEvent.requestPermission
    window.addEventListener('devicemotion', handleMotionEvent);
}

// Function to handle motion events and update the UI
function handleMotionEvent(event) {
    // Get acceleration data
    const acceleration = event.accelerationIncludingGravity;
    const { x, y, z } = acceleration;

    // Update UI with acceleration data
    const accelerationDiv = document.getElementById('acceleration');
    accelerationDiv.innerHTML = `Acceleration:<br>
        X: ${x.toFixed(2)} m/s<sup>2</sup><br>
        Y: ${y.toFixed(2)} m/s<sup>2</sup><br>
        Z: ${z.toFixed(2)} m/s<sup>2</sup>`;
}
