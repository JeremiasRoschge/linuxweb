//Variables
const express = require('express');
const PORT = process.env.PORT || 3000 

const app = express();

//Views
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static(__dirname + '/views'));

//Router

app.get('/', require('./router/index.js'));
/*app.get('/win', require('./router/win.js'));
app.get('/mac', require('./router/mac.js'));*/
app.get('/distros', require('./router/distros.js'));

//Listener
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})