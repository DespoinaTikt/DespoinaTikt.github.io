const projectsContainer = document.getElementById('projects');

fetch('https://api.github.com/users/despoinatikt/repos')
    .then(response => response.json())
    .then(repos => {
        repos.filter(repo => repo.name !== "new-portfolio").forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description provided."}</p>
                <a href="${repo.html_url}" target="_blank">View Repository</a>
            `;
            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error fetching repos:', error));
