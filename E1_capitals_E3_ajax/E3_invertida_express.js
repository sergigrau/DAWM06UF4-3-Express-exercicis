/*
 * Aplicació amb express que inverteix una cadena
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 05.02.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 05.02.2016
 * - Aplicació amb express que en funció d'un paràmetre mostra una imatge
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/invertir', function (req, res) {
    res.send(req.query.cadena.split('').reverse().join(''));
});

app.get('/', function (req, res) {
    res.send('us: /invertida?dadena=mot');
});
app.listen(3000, function () {
    console.log('Servidor escoltant port 3000');
})

// qualsevol altre petició retorna 404 not found
//req i res són els mateixos objectes de NodeJS