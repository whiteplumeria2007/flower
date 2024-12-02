document.querySelector("#postBtn").addEventListener("click", () => {
    let xhr = new XMLHttpRequest(); 

    // Replace 'your-username' and 'your-repo-name' with your actual GitHub username and repository name
    xhr.open("POST", "https://api.github.com/repos/whiteplumeria2007/flower/issues", true);

    // Set the Content-Type header to send JSON data
    xhr.setRequestHeader("Content-Type", "application/json");

    // Set the Authorization header with your Personal Access Token (replace 'your-personal-access-token' with the actual token)
    xhr.setRequestHeader("Authorization", "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");

    xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) { // Success (Created or OK)
            console.log("Data successfully sent!");
            console.log("Response:", xhr.responseText);

            document.querySelector("#output").innerHTML = "<h3>Data successfully sent!</h3>";

            let sentData = JSON.parse(xhr.responseText);
            displaySentData(sentData);
        } else {
            console.error("Failed to send data. Status:", xhr.status);
            document.querySelector("#output").innerHTML = "Failed to send data.";
        }
    };

    xhr.onerror = () => {
        console.error("Network error occurred.");
        document.querySelector("#output").innerHTML = "Network error occurred.";
    };

    // Data to send in the POST request
    let dataToSend = {
        title: "Web Programming Assignment",
        body: "GitHub API as part of a web programming assignment.",
        labels: ["Assignment", "POST"]
    };

    // Send the POST request with the JSON data
    xhr.send(JSON.stringify(dataToSend));
});

// Function to display the sent data after successful POST request
function displaySentData(data) {
    let out = "<h2>Data Sent:</h2>";

    out += "<p><strong>Title:</strong> " + data.title + "</p>";
    out += "<p><strong>Body:</strong> " + data.body + "</p>";
    out += "<p><strong>Labels:</strong> " + data.labels.join(", ") + "</p>";
    out += "<p><strong>Issue URL:</strong> <a href='" + data.html_url + "' target='_blank'>View Issue</a></p>";

    // Display the response on the webpage
    document.querySelector("#output").innerHTML += out;
}

