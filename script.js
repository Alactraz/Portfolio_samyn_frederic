document.addEventListener('DOMContentLoaded', function () {
    // Données des projets
    const projects = [
        {
            title: "Page d'accueil agence voyage Booki",
            description: "Page d'accueil d'une agence de voyage réalisée avec HTML et CSS.",
            problems: "Rendre le site entièrement responsive pour tous les écrans.",
            skills: "Maîtrise de la mise en page responsive avec CSS.",
            imageUrl: "./images/L2_booki.png",
            link: "https://github.com/Alactraz/OC-page-d-accueil-agence-voyage-HTML-CSS-Booki"
        },
        {
            title: "Application Web avec React Kaza",
            description: "Application web créée avec React.",
            problems: "Implémentation des volets déroulants et gestion de l'état.",
            skills: "Création d'interfaces dynamiques avec React et gestion avancée de l'état.",
            imageUrl: "./images/L5_kaza.png",
            link: "https://github.com/Alactraz/OC-creez_application_web_avec_react-kaza"
        },
        {
            title: "Optimisation Site Photo Nina Carducci",
            description: "Optimisation et débogage d'un site photo.",
            problems: "Trouver les causes des bugs et proposer des solutions.",
            skills: "Diagnostic précis et correction de bugs dans un environnement complexe.",
            imageUrl: "./images/L4_nina_carducci.png",
            link: "https://github.com/Alactraz/OC-debug-et-optimisation-site-photo-nina-carducci"
        },
        {
            title: "Back-end Site M.V.G.",
            description: "Développement du back-end d'un site avec Node.js.",
            problems: "Assurer la sécurité des données transmises.",
            skills: "Mise en œuvre de systèmes d'authentification sécurisés et gestion des données sensibles.",
            imageUrl: "./images/L6_MVG.png",
            link: "https://github.com/Alactraz/OC-Back-end_site-M.V.G."
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
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <button class="more-info-btn" data-index="${index}">En savoir plus</button>
                </div>
            `;

            projectsList.appendChild(projectCard);
        });

        // Ajouter les gestionnaires d'événements pour les boutons "En savoir plus"
        document.querySelectorAll('.more-info-btn').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                openModal(projects[index]);
            });
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

    // Fonction pour ouvrir une modale
    function openModal(project) {
        const modal = document.getElementById('project-modal');
        const modalContent = modal.querySelector('.modal-content');

        modalContent.innerHTML = `
            <h2>${project.title}</h2>
            <p><strong>Description :</strong> ${project.description}</p>
            <p><strong>Problématiques rencontrées :</strong> ${project.problems}</p>
            <p><strong>Compétences développées :</strong> ${project.skills}</p>
            <a href="${project.link}" target="_blank" class="modal-link">Voir le projet sur GitHub</a>
            <button class="close-modal-btn">Fermer</button>
        `;

        modal.style.display = 'block';

        // Fermer la modale
        modal.querySelector('.close-modal-btn').addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Initialiser l'affichage des projets et des compétences
    displayProjects();
    displayCompetencies();
});

// Ajouter une modale dans le HTML
const modalHTML = `
    <div id="project-modal" class="modal">
        <div class="modal-content">
            <!-- Contenu de la modale généré dynamiquement -->
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', modalHTML);