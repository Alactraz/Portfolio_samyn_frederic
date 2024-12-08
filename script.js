document.addEventListener('DOMContentLoaded', function () {
    // Données des projets
    const projects = [
        {
            title: "OC-page-d-accueil-agence-voyage-HTML-CSS-Booki",
            description: "Page d'accueil d'une agence de voyage réalisée avec HTML et CSS.",
            imageUrl: "https://via.placeholder.com/300x250" // Remplacer par l'URL de l'image réelle
        },
        {
            title: "OC-creez_une_page_web_dynamique_en_JS-Sophie_Bluel",
            description: "Création d'une page web dynamique avec JavaScript.",
            imageUrl: "https://via.placeholder.com/300x250" // Remplacer par l'URL de l'image réelle
        },
        {
            title: "OC-debug-et-optimisation-site-photo-nina-carducci",
            description: "Optimisation et débogage d'un site photo.",
            imageUrl: "https://via.placeholder.com/300x250" // Remplacer par l'URL de l'image réelle
        },
        {
            title: "OC-creez_application_web_avec_react-kaza",
            description: "Application web créée avec React.",
            imageUrl: "https://via.placeholder.com/300x250" // Remplacer par l'URL de l'image réelle
        },
        {
            title: "OC-Back-end_site-M.V.G.",
            description: "Développement du back-end d'un site avec Node.js.",
            imageUrl: "https://via.placeholder.com/300x250" // Remplacer par l'URL de l'image réelle
        }
    ];

    // Données des compétences
    const competencies = [
        { name: "HTML", logo: "https://img.icons8.com/color/48/000000/html-5.png" },
        { name: "CSS", logo: "https://img.icons8.com/color/48/000000/css3.png" },
        { name: "JavaScript", logo: "https://img.icons8.com/color/48/000000/javascript.png" },
        { name: "React", logo: "https://img.icons8.com/officel/80/000000/react.png" },
        { name: "Node.js", logo: "https://img.icons8.com/color/48/000000/nodejs.png" }
    ];

    // Fonction pour afficher les projets
    function displayProjects() {
        const projectsList = document.getElementById('projects-list');
        projects.forEach(project => {
            const projectCard = document.createElement('a');
            projectCard.classList.add('project-card');
            projectCard.href = "#"; // Ajoutez l'URL réelle du projet ici si nécessaire

            projectCard.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;

            projectsList.appendChild(projectCard);
        });
    }

    // Fonction pour afficher les compétences
    function displayCompetencies() {
        const competenciesList = document.getElementById('competences-list');
        competencies.forEach(competence => {
            const listItem = document.createElement('li');
            listItem.classList.add('competence-item');
            listItem.innerHTML = `
                <img src="${competence.logo}" alt="${competence.name} Logo">
                <span>${competence.name}</span>
            `;
            competenciesList.appendChild(listItem);
        });
    }

    // Initialiser l'affichage
    displayProjects();
    displayCompetencies();
});
