/*
 * Aplicació amb express que en funció d'un paràmetre mostra una imatge
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

app.get('/capitals', function (req, res) {
    var imatge;
    switch (req.query.pais) {
        case 'italia':
            imatge = '/roma.jpg';
            break;
        case 'alemania':
            imatge = '/berlin.jpg';
            break;
        default:
    }
    res.sendFile(__dirname + '/public/'+imatge);
});

app.get('/', function (req, res) {
    res.send('us: /capitals?pais=nomPais');
});
app.listen(3000, function () {
    console.log('Servidor escoltant port 3000');
})

// qualsevol altre petició retorna 404 not found
//req i res són els mateixos objectes de NodeJS