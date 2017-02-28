define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'Fitt 123';
      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'exercise', name: 'exercise', moduleId: 'exercise/exercise', nav: true }]);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('exercise/exercise',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.exercise = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var exercise = exports.exercise = function () {
        function exercise() {
            _classCallCheck(this, exercise);

            this.userData = {};

            this.appName = "Fitt";
            this.count = 9;
        }

        exercise.prototype.addUser = function addUser() {
            var client = new _aureliaFetchClient.HttpClient();

            client.fetch('http://localhost:8080/users/add', {
                'method': "POST",
                'body': (0, _aureliaFetchClient.json)(this.userData)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("Server saatis " + data.firstName);
            });
            console.log("Method executed!");
        };

        return exercise;
    }();
});
define('home/index',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Home = exports.Home = function Home() {
        _classCallCheck(this, Home);

        this.message = "Just checking!";
    };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n<router-view></router-view>\n</template>\n"; });
define('text!exercise/exercise.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>${appName} ja ${count}</h1>\r\n    \r\n    <form id=\"userform\" submit.delegate=\"addUser()\">\r\n\t\t<div><label for=\"firstName\">First name</label><input id=\"firstName\" type=\"text\" name=\"firstName\" value.bind=\"userData.firstName\"></div>\r\n\t\t<div><label for=\"lastName\">Last name</label><input id=\"lastName\" type=\"text\" name=\"lastName\" value.bind=\"userData.lastName\"></div>\r\n\t\t<div><label for=\"numOfPets\">Num of pets</label><input id=\"numOfPets\" type=\"number\" name=\"numOfPets\" value.bind=\"userData.numOfPets\"></div>\r\n\t\t<input type=\"submit\" name=\"Lisa kasutaja\">\r\n\t</form>\r\n</template>\r\n"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    Tere!\r\n    ${message}\r\n    \r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map