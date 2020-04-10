import "dotenv/config";
import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes';
// import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT;

// mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/gitCloneDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.get('/', (_, res) => {
  res.send(`Node server running on port ${PORT}`);
});

app.listen(PORT);
