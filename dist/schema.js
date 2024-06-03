"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _graphqlTools = require("graphql-tools");
var _resolvers = require("./resolvers");
var typeDefs = "\n\n    type Query {\n        hello: String\n        numero: Int\n        nombre (name: String!): String\n        teams: [Teams]\n    }\n\n    type Teams {\n        _id:ID\n        team: String\n        country: String\n\n    }\n\n    type Mutation {\n        createTeams(input: TeamInput): Teams\n    }\n\n    input TeamInput {\n        team: String\n        country: String\n    }\n    \n\n";
var _default = exports["default"] = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});
//# sourceMappingURL=schema.js.map