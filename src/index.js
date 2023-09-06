const  express = require('express');
const engine = require('ejs-mate');
const path = require ('path');

const  app = express();

app.set('views',path.join(__dirname, 'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');
app.set('port', process.env.PORT || 3000);

//rutas
app.use('/', require('./routes/index'));

//iniciar el servidor
app.listen(app.get('port'), ()=>{
    console.log('server on Port', app.get('port'));
});