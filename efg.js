document.querySelector("#postBtn").addEventListener("click", () => {
    let xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

    // Open a POST request to the JSONPlaceholder API (you can replace it with your API)
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    // Set request headers to indicate that the content type is JSON
    xhr.setRequestHeader("Content-Type", "application/json");

    // Define what happens when the request loads
    xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) { // Success or Created
            console.log("Data successfully sent!");
            let response = JSON.parse(xhr.responseText); // Parse the JSON response
            document.querySelector("#output").innerHTML = "<h3>Data successfully sent!</h3>"; // Display success message
            displaySentData(response); // Call the function to display data sent to server
        } else {
            console.error("Failed to send data. Status:", xhr.status);
            document.querySelector("#output").innerHTML = "Failed to send data.";
        }
    };

    // Handle network errors
    xhr.onerror = () => {
        console.error("Network error occurred.");
        document.querySelector("#output").innerHTML = "Network error occurred.";
    };

    // Data to be sent in the POST request (in JSON format)
    let dataToSend = {
        title: "Test POST Request",
        body: "This is a test of the POST request in AJAX.",
        userId: 1
    };

    // Send the request with the data as a JSON string
    xhr.send(JSON.stringify(dataToSend));
});

// Function to display the data sent to the server in the UI
function displaySentData(data) {
    let out = "<h2>Data Sent:</h2>";
    out += "<p><strong>Title:</strong> " + data.title + "</p>";
    out += "<p><strong>Body:</strong> " + data.body + "</p>";
    out += "<p><strong>User ID:</strong> " + data.userId + "</p>";

    document.querySelector("#output").innerHTML += out;
}
