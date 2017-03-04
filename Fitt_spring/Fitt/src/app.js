export class App {
    
configureRouter(config, router) {
    this.router = router;
    config.title = 'Fitt 123';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'home/index', title:"Esileht", nav: true },
      { route: 'exercise', name: 'exercise', moduleId: 'exercise/exercise',title:"Exercise", nav: true },
    ]);
  }
}
