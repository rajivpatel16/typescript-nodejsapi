import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import userRoutes from './routes/UserRoutes'

const app: Application = express();

const origin = {
    // origin: isProduction ? 'https://dddforum.com' : '*',
    origin: "*"
  }

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(origin))
app.use(helmet())
app.use('/v1',userRoutes);


app.listen(5000, () => console.log("Server start"))