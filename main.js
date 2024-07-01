const { createApp } = Vue;
const { createRouter, createWebHistory } = VueRouter;

// Composant Home
const Home = {
  template: `
  <main id="home"> 
  <nav>
  <ul>
    <li><router-link :to="home">Home</router-link></li>
    <li><router-link :to="projects">Projects</router-link></li>
    <li><router-link :to="projects">Contact</router-link></li>
  </ul>
  </nav>
    <div class="about_me"> 
      <img src="images/profilavatar.PNG" alt="avatar profil">
      <h1>Jordan Nkunga</h1>
      <p> Développeur concepteur d'application web full stack </p>
      <h2>Langages</h2>
     <h3>Javascript</h3>
     <p>Nodejs, Vuejs</p>
     <h3>PHP</h3>
     <p> Symfony </p>
     <div class="projet_competence_link"> 
     <router-link :to="{ name: 'projects'}"> <button class="button" data-text="Awesome">
     <span class="actual-text">Projects</span>
     <span aria-hidden="true" class="hover-text">Projects</span>
 </button> </router-link>
      <p class="projects">  </p> 
     </div>
     

    </div>
  </main>   `,
  data() {
    return {
      title: "Mon portfolio",
      Projects: [
        { title: "Portfolio", description: "Lorem Ipsum" },
        { title: "Portfolio2", description: "Lorem Ipsum dolor" },
      ],
      attribute_name: "href",
      url: "https://facebook.fr",
    };
  },
  methods: {
    runFunction() {
      console.log("test click function");
    },
  },
};

// Composant Projects
const Projects = {
  template: `
  <main id="project">
      <div>
        <h1>Projects</h1>
        <div v-for="project in projects">
        <h2>{{project.title}}</h2>
      </div>
  </main>`,
};

// Définition des routes
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/projects", name: "projects", component: Projects },
];

// Création de l'instance du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création de l'application Vue
const app = createApp(Home); // Utilisation du composant Home comme instance principale

// Utilisation du routeur
app.use(router);

// Montage de l'application
app.mount("#app");
