export class App {
    
configureRouter(config, router) {
    this.router = router;
    config.title = 'Fitt';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home/index', title:"Esileht", nav: false },
      { route: 'signup', name: 'signup', moduleId: 'signup/signup', title:"Signup", nav: false },
      { route: 'main', name: 'main', moduleId: 'main/main', title:"Pealeht", nav: false },
      { route: 'diet', name: 'diet', moduleId: 'diet/diet', title:"Toitumine", nav: false },
      { route: 'goal', name: 'goal', moduleId: 'goal/goal', title:"Eesmärgid", nav: false },
      { route: 'weight', name: 'weight', moduleId: 'weight/weight', title:"Kaal", nav: false },
      { route: 'history', name: 'history', moduleId: 'history/history', title:"Treeningpäevik", nav: false },
      { route: 'training', name: 'training', moduleId: 'training/training', title:"Treening", nav: false },
      { route: 'soojendus', name: 'soojendus', moduleId: 'soojendus/soojendus', title:"Soojendus", nav: false },
      { route: 'arms', name: 'arms', moduleId: 'arms/arms', title:"Käed", nav: false },
      { route: 'abs', name: 'abs', moduleId: 'abs/abs', title:"Kõht", nav: false },
      { route: 'body', name: 'body', moduleId: 'body/body', title:"Keha", nav: false },
      { route: 'legs', name: 'legs', moduleId: 'legs/legs', title:"Jalad", nav: false },
      { route: 'streches', name: 'streches', moduleId: 'streches/streches', title:"Venitus", nav: false },
    ]);
  }
}
