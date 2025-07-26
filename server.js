import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} | Requisição: ${req.method} ${req.url}` );
    next();
})


app.use('/agentes', agenteRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
  });