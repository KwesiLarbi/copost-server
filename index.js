import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;


// Setting up body parser in order to properly send our requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// CORS (Cross-Origin Resource Sharing) used for interaction between the client and server side
app.use(cors());


// Set the routes
app.use('/user', userRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('COVID-19 APP');
});

const CONNECTION_URL = process.env.MONGO_DB;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Connected to MongoDB. Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);