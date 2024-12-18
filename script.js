document.addEventListener("DOMContentLoaded", function () {
    const repoContainer = document.querySelector(".projects-container");
    const portfolioRepoName = "despoinatikt.github.io";

    fetch("https://api.github.com/users/despoinatikt/repos")
        .then(response => response.json())
        .then(data => {
            // Filter out the portfolio repository
            const filteredRepos = data.filter(repo => repo.name !== portfolioRepoName);

            filteredRepos.forEach(repo => {
                const repoCard = document.createElement("div");
                repoCard.className = "project-card";
                repoCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description provided."}</p>
                    <a href="${repo.html_url}" target="_blank">View Repository</a>
                `;
                repoContainer.appendChild(repoCard);
            });
        })
        .catch(error => console.error("Error fetching repositories:", error));
});
