/*
 * Controller que gestiona les peticions del carret de compra
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 05.02.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 05.02.2016
 * - Controller que gestiona les peticions del carret de compra
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
var express = require('express');
var router = express.Router();

var productesComprats=[];
var productes=['Pomes', 'Peres', 'Platans'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Empresa DAW2', productes:productes});
});

/* POST compra. */
router.post('/comprar', function(req, res, next) {
    productesComprats.push({nom:req.body.producte,unitats:req.body.unitats});
    res.render('index', { title: 'Continua comprant....', productes:productes});
});

router.get('/resum', function(req, res, next) {
    res.render('resum', { title: 'Resum de productes comprats', productesComprats:productesComprats });
});

module.exports = router;
