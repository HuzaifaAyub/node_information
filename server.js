import express from 'express';

const app = express();
import db from './db.js';

import bodyParser from 'body-parser';
app.use(bodyParser.json()); //req.body





app.get('/', (req, res) => {
  res.send('Hello World wassup gang')
})






// importing router files
import personRoutes from './routes/personRoutes.js'
app.use('/Person', personRoutes)

import identityRoutes from './routes/identityRoutes.js'
app.use('/Identity',identityRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})