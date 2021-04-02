var express = require('express');
var handlebars = require('express-handlebars')
var app = express();
var path = require('path');
app.listen(process.env.PORT || '3001');
// app.engine('handlebars', expressHbs({
//     layoutsDir: __dirname + '/views/layouts',
//     // layout cha mặc định
//     defaultLayout: 'main'
// }));
app.engine('handlebars',handlebars());
app.set('view engine', 'handlebars');

app.get('/', function (request,
                       response) {
    response.render('abc');
})

app.get('/home', function (request, response) {
    response.send('Homemmmm');
})

