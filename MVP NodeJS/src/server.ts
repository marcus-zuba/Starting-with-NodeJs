import express from 'express';
import errorHandler from './errors/handler';

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler)

app.listen(3333, () => console.log('Server is running'));