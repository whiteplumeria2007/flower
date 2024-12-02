document.querySelector("#postBtn").addEventListener("click", async () => {
    try {
        // Fetch the data from the JSON file
        const response = await fetch('data.json');
        const data = await response.json();

        // GitHub API configuration
        const username = "your-username"; // Replace with your GitHub username
        const repo = "your-repo-name"; // Replace with your repository name
        const token = "your-personal-access-token"; // Replace with your GitHub Personal Access Token
        const url = `https://api.github.com/repos/${whiteplumeria2007}/${flower}/issues`;

        // Send the POST request
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${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}`
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
