import "dotenv/config";
import express from 'express';
import bodyParser from 'body-parser';
// import routes from './src/routes/crmRoutes';
// import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT;

// mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/gitCloneDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect Routes
// routes(app);

// Serve Static Files
// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`Node server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
