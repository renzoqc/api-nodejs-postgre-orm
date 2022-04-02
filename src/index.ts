import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'

import userRoutes from './routes/user.routes';

const app = express();
createConnection();



//middlewars: Funciones que se ejecutan antes de llegar  a la ruta


app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // Desde la aplicación enviemos datos

// routes

app.use(userRoutes);



app.listen(3000);
console.log('Server on port', 3000);