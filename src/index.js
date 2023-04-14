import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import departamentoRoutes from './routes/departamentoRoutes.js';
import empleadoRoutes from './routes/empleadoRoutes.js';

const app = express();

app.set('port', process.env.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Visita la documentación de este microservicio en mi repositirio de github haz clic aqui!'))
app.use('/api/departamentos', departamentoRoutes);
app.use('/api/empleados', empleadoRoutes);

export default app;