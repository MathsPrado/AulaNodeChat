var app = require('./config/server');

app.listem(50, function() {
    console.log('server online');
})