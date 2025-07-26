import express from 'express';
import agentesRoutes from './src/routes/agentesRoutes.js'
import casosRoutes from './src/routes/casosRoutes.js'

const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} | Requisição: ${req.method} ${req.url}` );
    next();
})

app.use('/agentes', agentesRoutes);
app.use('/casos', casosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
  });