import express from 'express';
import agentesRoutes from './src/routes/agentesRoutes.js'
import casosRoutes from './src/routes/casosRoutes.js'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerDocument = JSON.parse(
    fs.readFileSync(path.join(__dirname, './src/docs/swagger.json'), 'utf8')
  );

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} | Requisição: ${req.method} ${req.url}` );
    next();
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/agentes', agentesRoutes);
app.use('/casos', casosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
    console.log('Swagger em: http://localhost:3000/docs');
  });