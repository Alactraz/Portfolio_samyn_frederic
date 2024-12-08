document.addEventListener('DOMContentLoaded', function () {
    // Données des projets
    const projects = [
        {
            title: "Page d'accueil agence voyage Booki",
            description: "Page d'accueil d'une agence de voyage réalisée avec HTML et CSS.",
            imageUrl: "https://via.placeholder.com/300x250", // Remplacer par l'URL de l'image réelle
            link: "https://github.com/Alactraz/OC-page-d-accueil-agence-voyage-HTML-CSS-Booki"
        },
        {
            title: "Page Web Dynamique JS Sophie Bluel",
            description: "Création d'une page web dynamique avec JavaScript.",
            imageUrl: "https://via.placeholder.com/300x250", // Remplacer par l'URL de l'image réelle
            link: "https://github.com/Alactraz/OC-creez_une_page_web_dynamique_en_JS-Sophie_Bluel"
        },
        {
            title: "Optimisation Site Photo Nina Carducci",
            description: "Optimisation et débogage d'un site photo.",
            imageUrl: "https://via.placeholder.com/300x250", // Remplacer par l'URL de l'image réelle
            link: "https://github.com/Alactraz/OC-debug-et-optimisation-site-photo-nina-carducci"
        },
        {
            title: "Application Web avec React Kaza",
            description: "Application web créée avec React.",
            imageUrl: "https://via.placeholder.com/300x250", // Remplacer par l'URL de l'image réelle
            link: "https://github.com/Alactraz/OC-creez_application_web_avec_react-kaza"
        },
        {
            title: "Back-end Site M.V.G.",
            description: "Développement du back-end d'un site avec Node.js.",
            imageUrl: "https://via.placeholder.com/300x250", // Remplacer par l'URL de l'image réelle
            link: "https://github.com/Alactraz/OC-Back-end_site-M.V.G."
        },
        {
            title: "Mon Portfolio",
            description: "Création d'un portfolio",
            imageUrl: "https://via.placeholder.com/300x250", // Remplacer par l'URL de l'image réelle
            link: "https://github.com/Alactraz/Portfolio_samyn_frederic"
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
            projectCard.href = project.link; // Lien vers le projet

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
