import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectDB} from './config';
import router from './routes';
import { errorHandlerMiddleware } from './middleware';
import dotenv from 'dotenv';
import referralrouter from './routes/ReferralRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

connectDB();

const routes= router;


app.use("/", routes);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
