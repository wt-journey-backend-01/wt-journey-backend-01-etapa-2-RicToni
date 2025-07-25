import express from 'express';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} | Requisição: ${req.method} ${req.url}` );
    next();
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
  });