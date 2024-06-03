"use strict";

var _express = _interopRequireDefault(require("express"));
var _expressGraphql = require("express-graphql");
var _schema = _interopRequireDefault(require("./schema"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//const express = require ('express');
var app = (0, _express["default"])();

// Servir archivos estáticos desde la carpeta "public"
app.use(_express["default"]["static"](path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.json({
    message: 'Hello World'
  });
});

//const schema ={};

app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  schema: _schema["default"]
}));
app.listen(3000, function () {
  return console.log('Server on port 3000');
});
//# sourceMappingURL=index.js.map