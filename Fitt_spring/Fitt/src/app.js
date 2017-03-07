export class App {
    
configureRouter(config, router) {
    this.router = router;
    config.title = 'Fitt';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home/index', title:"Esileht", nav: true },
      { route: 'signup', name: 'signup', moduleId: 'signup/signup', title:"Signup", nav: true },
      { route: 'main', name: 'main', moduleId: 'main/main', title:"Pealeht", nav: true },
      { route: 'soojendus', name: 'soojendus', moduleId: 'exercises/soojendus', title:"Soojendus", nav: false },
      { route: 'arm', name: 'arm', moduleId: 'arm/arm', title:"Jalad", nav: true },
      { route: 'kõht', name: 'kõht', moduleId: 'exercises/kõht', title:"Kõht", nav: false },
      { route: 'keha', name: 'keha', moduleId: 'exercises/keha', title:"Keha", nav: false },
      { route: 'selg', name: 'selg', moduleId: 'exercises/selg', title:"Selg", nav: false },
      { route: 'venitus', name: 'venitus', moduleId: 'exercises/venitus', title:"Vanitus", nav: false },
    ]);
  }
}
