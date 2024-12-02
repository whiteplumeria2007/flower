document.querySelector("#postBtn").addEventListener("click", async () => {
    try {
        // Fetch the data from the JSON file
        const response = await fetch('data.json');
        const data = await response.json();

        // GitHub API configuration
        const username = "whiteplumeria2007"; // Replace with your GitHub username
        const repo = "flower"; // Replace with your repository name
        const token = "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"; // Replace with your GitHub Personal Access Token
        const url = `https://api.github.com/repos/${username}/${repo}/issues`;

        // Send the POST request
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }

        const resultData = await result.json();

        // Display the response
        document.querySelector("#output").innerHTML =
            `Issue created successfully! <a href="${resultData.html_url}" target="_blank">View Issue</a>`;
    } catch (error) {
        console.error("Error:", error);
        document.querySelector("#output").textContent = `Error: ${error.message}`;
    }
});
