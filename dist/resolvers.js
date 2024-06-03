"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;
var _sample = require("./sample");
var resolvers = exports.resolvers = {
  Query: {
    hello: function hello() {
      return 'Hola Mundo con Graphql';
    },
    numero: function numero() {
      return 100;
    },
    // , {name}
    nombre: function nombre(root, args) {
      console.log(args.name);
      return "Bienvenido ".concat(args.name);
    },
    teams: function teams() {
      return _sample.teams;
    }
  },
  Mutation: {
    createTeams: function createTeams(_, _ref) {
      var input = _ref.input;
      input._id = _sample.teams.length;
      _sample.teams.push(input);
      return input;
    }
  }
};
//# sourceMappingURL=resolvers.js.map