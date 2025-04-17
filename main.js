const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const ProjectData = [
  {
    logo: "images/VBStats.png",
    title: "VBstats ",
    slug: "vbstats",
    description: "Interface d'application sportive avec vuejs maquette (prototype réalisée avec figma)",
    functionality: ["Navigation sur différentes pages", "Responsivité"],
    tech: ["Vuejs", "Vitejs", "Html", "CSS", "JS", "tailwind"],
    outil: ["Figma", "VSCODE",],
    images: ["/images/connexionVBSTATS.png", "/images/inscriptionVBSTATS.png", "/images/gestionClubVBSTATS.png"],
    currentImageIndex: 0,
    githubLink: "https://github.com/Joeyybad/joeyybad.github.io"
  },
  {
    logo: "images/logobank.jpg",
    title: "Système ATM Banque ",
    slug: "atmbank",
    description: "Learning JAVA POO  creating ATM bank service with swing  ",
    functionality: ["Register/Login", "Balance du compte ", "Changement de pin", "Retrait rapide, retrait classique"],
    tech: ["JAVA", "Jframe", "Swing", "Mysql", " JUNIT"],
    images: ["/images/Bankconnexion.png", "/images/BankInscription.png", "/images/BankOpérations.png", "/images/BankDéposit.png"],
    currentImageIndex: 0,
    githubLink: "https://github.com/Joeyybad/breakfranceBackup"
  },
  {
    logo: "images/LogoBreakFranceHeader.webp",
    title: "Breakfrance application événement sportif Nodejs (prototype réalisée avec figma)",
    slug: "breakfrancenodejs",
    description: "Same project as the last one but only with Nodejs, Sport event project allowing users to register to sport event",
    functionality: ["Register/Login", "Displaying event depending on localisation", "Displaying danse event, danse group", "search for games or event", "register to event"],
    tech: ["Nodejs", "Handlebars", "Express", "Mysql", "Sequelize", "Html", "CSS", "JS"],
    images: ["/images/BFNodeHome.png", "/images/LocalisationEvent.png", "/images/BFNodeEventRegistration.png", "/images/BFNodeGroupPage.png"],
    currentImageIndex: 0,
    githubLink: "https://github.com/Joeyybad/breakfranceBackup"
  },
  {
    logo: "images/LogoBreakFranceHeader.webp",
    title: "Breakfrance application événement sportif Vuejs Strapi (prototype réalisée avec figma)",
    slug: "breakfrancevuejs",
    description: "Sport event project to learn composant concept with vuejs & Strapi",
    functionality: ["Register/Login", " back office gestion with strapi", "search for games or event",],
    tech: ["Nodejs", "Vuejs", "strapi", "Mysql", "Html", "CSS", "JS"],
    images: ["/images/HomeBFVUE.png", "/images/ConnBFVUE.png", "/images/GROUPBFVUE.png"],
    currentImageIndex: 0,
    githubLink: "https://github.com/Joeyybad/joeyybad.github.io"
  },
  {
    logo: "images/accueil.png",
    title: "Application événement jeu (prototype réalisée avec figma)",
    slug: "boiteajeux",
    description: "Collaborative Project on an event for board game (web and web mobile)",
    functionality: ["Register/Login", "Displaying event, games", "search for games or event", "register to an event"],
    tech: ["Nodejs", "Handlebars", "Mysql", "Express", "Sequelize", "Html", "CSS", "JS"],
    images: ["/images/accueil.png", "/images/Jeux.png", "/images/Event.png"],
    currentImageIndex: 0,
    githubLink: "https://github.com/Lukheo/Site-events-jeux-societe"
  },
  {
    logo: "images/MeteoLogo.png",
    title: "Application Météo ",
    slug: "appmeteo",
    description: "Collaborative Project about an weather app (web and web mobile)",
    functionality: ["Geolocalisation", "Diplaying informations via API call", "Favorite weather cities", "Adaptative background"],
    tech: ["Javascript", "Html", "CSS"],
    images: ["/images/weatherAppAccueil.png", "/images/WeatherFavoritePage.png"],
    currentImageIndex: 0,
    githubLink: "https://github.com/Joeyybad/ProjetMeteo"
  },
  {
    logo: "images/DébutQuiz.png",
    title: "Jeu Quiz Sport",
    slug: "quizsport",
    description: "Quiz game exercice to learn POO concept with javascript",
    functionality: ["Diplaying questions", "Question selection", "Question indication correct or not"],
    tech: ["Javascript", "Html", "CSS"],
    images: ["/images/DébutQuiz.png", "/images/PremièreQuestion.png"],
    currentImageIndex: 0,
    githubLink: "https://github.com/Joeyybad/AppJsQuiz.git"
  },
  {
    logo: "images/accueilSneakerz.png",
    title: "Boutique Sneakers",
    slug: "sneakershop",
    description: "Ecomerce Project Exercise using Symfony CLI version 5",
    functionality: ["Registration mailer service", "Login", "SneakerSection with all sneakerproducts", "Contact form"],
    tech: ["Symfony5", "PHP", "mysql", "Twig", "Html", "CSS", "Bootsrap"],
    images: ["/images/accueilSneakerz.png", "/images/pageSneakerz.png"],
    currentImageIndex: 0,
    githubLink: "https://github.com/Joeyybad/AppsymfonyTest.git"
  }




]
// Composant Home
const Home = {
  template: `
  <main id="home">
    <div class="container">
      <div v-if="showSuccessMessage" class="alert alert-success text-center mt-4">
        Merci pour votre message ! Je vous répondrai très vite. 😊
      </div>

      <div class="profile-picture">
        <img src="images/profilavatar.PNG" alt="avatar profil">
      </div>
      <div class="welcome-message">
        <h1>Bonjour, je m'appelle <span class="jordan">Jordan</span>, je suis développeur fullstack</h1>
        <p>
          Issu du domaine sportif, j’ai souhaité digitaliser mon activité afin d’en accroître
          l’impact. Au fil de cette transition, j’ai découvert une véritable passion pour le
          développement web, qui m’anime aujourd’hui autant que le sport. Les
          compétences transversales acquises dans ces deux univers me permettent
          d’évoluer et de me rapprocher de mon objectif : coacher et accompagner des
          équipes de développement sur des projets digitaux.
        </p>
      </div>
    </div>

    <div class="about-me">
      <div class="languages-container">
        <!-- Langages -->
        <div class="languages">
          <h2 class="titre2 jordan">Langages</h2>
          <div class="line"><h3>Front-End:</h3><p>Html, CSS, JS, Vuejs</p></div>
          <div class="line"><h3>Back-End:</h3><p>NodeJS, Java, Spring, PHP</p></div>
          <div class="line"><h3>Base de données:</h3><p>MySQL, PostgreSQL</p></div>
          <div class="line"><h3>Outils,logiciels:</h3><p>MacOs, vscode, eclipse, Docker, Figma, Postman, MAMP</p></div>
        </div>

        <!-- Compétences -->
        <div class="languages">
          <h2 class="titre2 jordan">Compétences</h2>
          <div class="line"><p>Maquettage et Prototypage avec Figma</p></div>
          <div class="line"><p>Élaboration de cahier des charges, définitions de tâches product backlog</p></div>
          <div class="line"><p>Réalisation d'interface accessible et responsive</p></div>
          <div class="line"><p>Élaboration des schémas de base de données et gestion de base via ORM</p></div>
          <div class="line"><p>Architecture de projet MVC, API</p></div>
        </div>

        <!-- Savoir-être -->
        <div class="languages">
          <h2 class="titre2 jordan">Savoir-être</h2>
          <div class="line"><p>Autonomie</p></div>
          <div class="line"><p>Esprit sportif</p></div>
          <div class="line"><p>Adaptation</p></div>
          <div class="line"><p>Calme</p></div>
        </div>
      </div>
    </div>

    <!-- Projets -->
    <div class="container mt-5">
      <h2 class="text-center mb-4 titre2 jordan">Mes projets</h2>
      <div class="row justify-content-center">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
          v-for="project in projects"
          :key="project.title"
          @click="goToProject(project)"
        >
          <div class="card h-100 text-center border-0 shadow-sm" style="background-color: rgba(255,255,255,0.05);">
            <img :src="project.logo" :alt="project.title" class="card-img-top img-fluid p-2" style="height: 80px; object-fit: contain;" />
            <div class="card-body p-2">
              <h6 class="card-title" style="font-size: 0.9rem;">{{ project.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

   <!-- Formulaire de contact -->
<div class="container mt-5">
  <h2 class="text-center mb-4 titre2 jordan">Me contacter</h2>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <form name="contact" method="POST" data-netlify="true" action="/contact">
        <input type="hidden" name="form-name" value="contact" />

        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" class="form-control" id="name" name="name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" name="email" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" class="btn btn-outline-warning mt-3">Envoyer</button>
      </form>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </main>
  `,
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      },
      projects: ProjectData,
      showSuccessMessage: false
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
        // Nettoie l’URL pour éviter que le message ne réapparaisse au rechargement
        const url = new URL(window.location);
        url.searchParams.delete('success');
        window.history.replaceState({}, document.title, url.pathname);
      }, 5000);
    }
  },
  methods: {
    submitContactForm() {
      console.log('Formulaire envoyé', this.contactForm);
      this.contactForm.name = '';
      this.contactForm.email = '';
      this.contactForm.message = '';
      alert("Merci pour votre message, je vous répondrai bientôt !");
    },
    goToProject(project) {
      this.$router.push(`/project/${project.slug}`);
    }
  }
};
const ProjectDetail = {
  template: `
  <!-- Chargement -->
<div v-if="isLoading" class="text-center mt-5">
  <p>Chargement en cours...</p>
</div>

<!-- Affichage si le projet est trouvé -->
<div v-else-if="project" class="project-detail">

  <!-- Bouton de retour -->
  <button @click="$router.push('/')" class="button mb-4">
    <div class="button-box">
      <span class="button-elem">
        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
        </svg>
      </span>
      <span class="button-elem">
        <svg viewBox="0 0 46 40">
          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
        </svg>
      </span>
    </div>
  </button>

  <div class="row">
    <!-- Colonne gauche -->
    <div class="col-md-6 mb-4">
      <h1 class="mb-3">{{ project.title }}</h1>
      <p>{{ project.description }}</p>

      <div class="mb-4">
        <h4>Fonctionnalités :</h4>
        <ul>
          <li v-for="(func, i) in project.functionality" :key="i">{{ func }}</li>
        </ul>
      </div>

      <div class="mb-4">
        <h4>Technologies :</h4>
        <ul>
          <li v-for="(tech, i) in project.tech" :key="i">{{ tech }}</li>
        </ul>
      </div>

      <a :href="project.githubLink" target="_blank" class="btn btn-outline-warning">Voir sur GitHub</a>
    </div>

    <!-- Colonne droite : Carrousel -->
    <div class="col-md-6 text-center mb-4">
      <div class="carousel">
        <img :src="currentImage" alt="Image projet" class="carousel-img" />
        <button
          @click="prevImage"
          style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); background-color: #eec42c; border: none; padding: 10px; cursor: pointer;"
        >
          ‹
        </button>
        <button
          @click="nextImage"
          style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background-color: #eec42c; border: none; padding: 10px; cursor: pointer;"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Projet non trouvé -->
<div v-else class="text-center mt-5">
  <p>Projet introuvable.</p>
</div>

  `,
  data() {
    return {
      project: null,
      currentIndex: 0,
      isLoading: true,
    };
  },

  created() {
    const slug = this.$route.params.slug;
    this.project = ProjectData.find(p => p.slug === slug) || null;
    this.isLoading = false;
  },

  computed: {
    currentImage() {
      return this.project?.images?.[this.currentIndex] || '';
    }
  },

  methods: {
    nextImage() {
      if (!this.project || !this.project.images.length) return;
      this.currentIndex = (this.currentIndex + 1) % this.project.images.length;
    },
    prevImage() {
      if (!this.project || !this.project.images.length) return;
      this.currentIndex =
        (this.currentIndex - 1 + this.project.images.length) %
        this.project.images.length;
    }
  }
};

const ProjectNotFound = {
  template: `
    <div v-else class="text-center mt-5">
  <h2>😕 Oups...</h2>
  <p>Le projet que vous cherchez n'existe pas ou a été déplacé.</p>
  <router-link to="/" class="btn btn-outline-primary mt-3">Retour à l'accueil</router-link>
</div>

  `
};



// Définition des routes
const routes = [
  { path: "/", name: "home", component: Home },
  { path: '/project/:slug', component: ProjectDetail }

];

// Création de l'instance du routeur
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Création de l'application Vue
const app = createApp({});

// Utilisation du routeur
app.use(router);

// Montage de l'application
app.mount("#app");
