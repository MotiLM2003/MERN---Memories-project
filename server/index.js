import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts/', postRoutes);

import postRoutes from './routes/posts.js';

///   connecting to atlas
const CONNECTION_URL =
  'mongodb+srv://mernfulllstack:moti2003@cluster0.544zv.mongodb.net/<dbname>?retryWrites=true&w=majority';

// setting port
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('listening to port', PORT);
    });
  })
  .catch((error) => {
    console.log('error ---', error);
  });

mongoose.set('useFindAndModify', false);
