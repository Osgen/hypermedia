require('./services/passport');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

require('./routes/authRoutes')(app);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));