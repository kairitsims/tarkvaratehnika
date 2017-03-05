export class App {
    
configureRouter(config, router) {
    this.router = router;
    config.title = 'Fitt';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'home/index', title:"Esileht", nav: true },
      { route: 'signup', name: 'signup', moduleId: 'signup/signup', title:"Signup", nav: true },
      { route: 'main', name: 'main', moduleId: 'main/main',title:"Pealeht", nav: true },
    ]);
  }
}
