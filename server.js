import express from 'express';

const app = express();
import db from './db.js';
import dotenv from 'dotenv';
dotenv.config()
import bodyParser from 'body-parser';
app.use(bodyParser.json()); //req.body
const PORT =process.env.PORT ||3000;




app.get('/', (req, res) => {
  res.send('Hello World wassup gang')
})






// importing router files
import personRoutes from './routes/personRoutes.js'
app.use('/Person', personRoutes)

import identityRoutes from './routes/identityRoutes.js'
app.use('/Identity',identityRoutes)

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})