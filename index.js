const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//setting template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./views/assets'));

//start web server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

//fetch routes
app.use(require('./Routes/Routes'));