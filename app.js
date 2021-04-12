var express = require('express');
var app = express();
const router = require('./routers');

app.use('/', router);

app.listen(7000, function () {
  console.log("应用实例，访问地址为 http://localhost:7000")
})