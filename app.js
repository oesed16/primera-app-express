const express = require('express');
const app = express();

// app.get('/', (req, res) => { 
//     var nombre = req.query.nombre;
//     if (!nombre){
//         nombre = "desconocido";
//     }
//     res.send(`<h1>Hola ${nombre}!</h1>`);
// });
//================= Pares e Impares ==============
// === Mi Solución ===

const NUMBER_LINES = 50;

app.get('/', (req, res) => {
    var lines = "";
    for (n = 0; n < NUMBER_LINES; n++) {
        if ((n + 1) % 2 === 0) {
            lines = lines + `<p>${n + 1} Soy Par!</p>`;
        } else {
            lines = lines + `<p>${n + 1} Soy Impar!</p>`;
        }
    }
    res.send(lines);
});

// ===== Solución recomendada =====
// app.set('view engine', 'pug');
// app.set('views', 'views');

// app.get("/", (req, res) => {
//   const texts = [];
//   for (let i=1; i <=50; i++) {
//     texts.push(`${i} Soy ${(i % 2 == 0 ? "Par" : "Impar")}!`);
//   }

//   res.render("index", { texts: texts });
// });

// app.listen(3000);
// ================================================

app.get('/makers/:nombre', (req, res) => {
    var nombre = req.params.nombre;
    if (!nombre) {
        nombre = "desconocido";
    }
    res.send(`<h1>Hola ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));