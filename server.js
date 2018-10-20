const express = require('express');
const path = require('path');
const cors = require('cors');
let app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(cors());
app.use('/scripts', express.static(path.join(__dirname, './node_modules')));

require('./app/routes')(app);

app.listen(3000, () => {
  console.log('Server set up on port 3000');
});