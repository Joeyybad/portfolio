const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Composant Home
const Home = {
  template: `
  <main id="home">
  <nav>
    <ul>
      <li><router-link :to="{name:'projects'}">Projects</router-link></li>
      <li><router-link :to="{name:'contact'}">Contact</router-link></li>
    </ul>
  </nav>
  <div class="container">
    <div class="welcome-message">
      <h1>Bonjour, je m'appelle Jordan,</h1>
      <p>Développeur concepteur d'application web full stack.</p>
    </div>
    <div class="profile-picture">
      <img src="images/profilavatar.PNG" alt="avatar profil">
    </div>
  </div>
  <div class="about-me">
    <h2>Langages</h2>
    <div class="languages">
      <div>
        <h3>Javascript</h3>
        <p>Nodejs, Vuejs</p>
      </div>
      <div>
        <h3>PHP</h3>
        <p>Symfony</p>
      </div>
    </div>
    <div class="project-link">
      <router-link :to="{ name: 'projects'}">
        <button class="button" data-text="Awesome">
          <span class="actual-text">Projects</span>
          <span aria-hidden="true" class="hover-text">Projects</span>
        </button>
      </router-link>
    </div>
  </div>
</main>
  `
};

// Composant Projects
const Projects = {
  template: `
  <main id="project">
    <nav>
      <ul class="nav">
        <li><router-link :to="{name:'home'}">Home</router-link></li>
        <li><router-link :to="{name:'contact'}">Contact</router-link></li>
      </ul>
    </nav>
    <div class="projects">
      <h1 class="Projects">Projects</h1>
      <div v-if="projects.length" class="project-list">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <div class="carousel">
            <img v-for="(image, index) in project.images" :src="image" :class="['carousel-image', { active: index === project.currentImageIndex }]" :alt="project.title">
            <button class="carousel-button prev" @click="prevImage(project)">‹</button>
            <button class="carousel-button next" @click="nextImage(project)">›</button>
          </div>
          <div class="card-content">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <h3>Functionality</h3>
            <ul>
              <li v-for="func in project.functionality" :key="func">{{ func }}</li>
            </ul>

            <h3>Technologies</h3>
            <ul>
              <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
            </ul>
            <a v-if="project.githubLink" :href="project.githubLink" target="_blank">View this project on GitHub</a>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No projects available.</p>
      </div>
    </div>
  </main>
  `,
  data() {
    return {
      projects: [
        {
          title: "Breakfrance sport event app [In Progress] ",
          description: "Same project as the last one but only with Nodejs, Sport event project allowing users to register to sport event",
          functionality: ["Register/Login", "Displaying event depending on localisation", "Displaying danse event, danse group", "search for games or event", "register to event"],
          tech: ["Nodejs", "Handlebars", "Express", "Mysql", "Sequelize", "Html", "CSS", "JS"],
          images: ["images/BFNodeHome.png", "images/LocalisationEvent.png", "images/BFNodeEventRegistration.png", "images/BFNodeGroupPage.png"],
          currentImageIndex: 0,
          githubLink: "https://github.com/Joeyybad/breakfranceBackup"
        },
        {
          title: "Breakfrance sport event app [In Progress] ",
          description: "Sport event project to learn composant concept with vuejs",
          functionality: ["Register/Login", "Displaying event with api strapi", "search for games or event",],
          tech: ["Nodejs", "Vuejs", "strapi", "Mysql", "Html", "CSS", "JS"],
          images: ["images/HomeBFVUE.png", "images/ConnBFVUE.png", "images/GROUPBFVUE.png"],
          currentImageIndex: 0,
          githubLink: "https://github.com/Joeyybad/joeyybad.github.io"
        },
        {
          title: "Game Event App",
          description: "Collaborative Project on an event for board game (web and web mobile)",
          functionality: ["Register/Login", "Displaying event, games", "search for games or event", "register to an event"],
          tech: ["Nodejs", "Handlebars", "Mysql", "Express", "Sequelize", "Html", "CSS", "JS"],
          images: ["images/accueil.png", "images/Jeux.png", "images/Event.png"],
          currentImageIndex: 0,
          githubLink: "https://github.com/Lukheo/Site-events-jeux-societe"
        },
        {
          title: "Weather App ",
          description: "Collaborative Project about an weather app (web and web mobile)",
          functionality: ["Geolocalisation", "Diplaying informations via API call", "Favorite weather cities", "Adaptative background"],
          tech: ["Javascript", "Html", "CSS"],
          images: ["images/weatherAppAccueil.png", "images/WeatherFavoritePage.png"],
          currentImageIndex: 0,
          githubLink: "https://github.com/Joeyybad/ProjetMeteo"
        },
        {
          title: "Sport quiz game",
          description: "Quiz game exercice to learn POO concept with javascript",
          functionality: ["Diplaying questions", "Question selection", "Question indication correct or not"],
          tech: ["Javascript", "Html", "CSS"],
          images: ["images/DébutQuiz.png", "images/PremièreQuestion.png"],
          currentImageIndex: 0,
          githubLink: "https://github.com/Joeyybad/AppJsQuiz.git"
        },
        {
          title: "Sneakers Shop",
          description: "Ecomerce Project Exercise using Symfony CLI version 5",
          functionality: ["Registration mailer service", "Login", "SneakerSection with all sneakerproducts", "Contact form"],
          tech: ["Symfony5", "PHP", "mysql", "Twig", "Html", "CSS", "Bootsrap"],
          images: ["images/accueilSneakerz.png", "images/pageSneakerz.png"],
          currentImageIndex: 0,
          githubLink: "https://github.com/Joeyybad/AppsymfonyTest.git"
        },

      ]
    };
  },
  methods: {
    nextImage(project) {
      project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
    },
    prevImage(project) {
      project.currentImageIndex = (project.currentImageIndex - 1 + project.images.length) % project.images.length;
    }
  }
};
const Contact = {
  template: `
  <main id="contact">
  <nav>
    <ul class="nav">
      <li><router-link :to="{name:'home'}">Home</router-link></li>
      <li><router-link :to="{name:'projects'}">Projects</router-link></li>
    </ul>
  </nav>
  <div class="contacts">
    <div class="contact-item localisation">
      <h2 class="local">Address</h2>
      <div v-if="Address" class="contact-content">
        <img src="images/emplacement.gif" class="gifPicture" alt="GIFlocalisation">
        <h3 class="contactText">{{ Address }}</h3>
      </div>
      <div v-else>
        <p>No address</p>
      </div>
    </div>
    <div class="contact-item email">
      <h2 class="mail">Mail</h2>
      <div v-if="Mail" class="contact-content">
        <img src="images/message.gif" class="gifPicture" alt="GIFemail">
        <h3 class="contactText"><a href="mailto:jnkunga@hotmail.com">{{ Mail }}</a></h3>
      </div>
      <div v-else>
        <p>No mail</p>
      </div>
    </div>
    <div class="contact-item telephone">
      <h2 class="phone">Phone Number</h2>
      <div v-if="phoneNumber" class="contact-content">
        <img src="images/telephone.gif" class="gifPicture" alt="GIFtelephone">
        <h3 class="contactText">{{ phoneNumber }}</h3>
      </div>
      <div v-else>
        <p>No number</p>
      </div>
    </div>
    <div class="contact-item thanks">
      <div class="contact-content">
        <img src="images/pouces-vers-le-haut.gif" class="gifPicture" alt="GIFpouce">
        <h3>Thanks for your attention, if you need more information contact me</h3>
      </div>
    </div>
  </div>
</main>
  `,
  data() {
    return {
      Address: "Le Mans",
      Mail: "jnkunga@hotmail.com",
      phoneNumber: "0668313627"
    };
  }
};


// Définition des routes
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/projects", name: "projects", component: Projects },
  { path: "/contact", name: "contact", component: Contact },
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
