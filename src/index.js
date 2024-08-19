import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile('./page/index.html', {root: __dirname});
  });
  
app.get('/about', (req, res) => {
    res.sendFile('./page/about.html', {root: __dirname});   
});

app.get('/barang/:id', (req, res) => {
    const idBarang = req.params.id;
    const name = req.query.kategori;
    res.send(`ini kategori ${name} <br> dengan id barang ke ${idBarang}`);
})

app.use('*', (req, res) => {
    res.status(404);
    res.sendFile('./page/404.html', {root: __dirname});

});


  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
