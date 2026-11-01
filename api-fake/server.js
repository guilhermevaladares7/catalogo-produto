import express from 'express';
import { initialProducts } from '../src/data/products.js';

const app = express();
const PORTA = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/produtos', (req, res) => {
  setTimeout(() => {
    res.json(initialProducts);
  }, 700);
});

app.get('/produtos/:id', (req, res) => {
  const id = Number(req.params.id);
  const produto = initialProducts.find((p) => p.id === id);

  setTimeout(() => {
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
  }, 500);
});

app.listen(PORTA, () => {
  console.log('api fake rodando em http://localhost:' + PORTA);
});
