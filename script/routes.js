var express = require('express');
var router = express.Router();
var path = require("path");
router.get('/', function(req, res){
  res.sendFile('Index.html', { root: '.' });
});
router.get('/script/home.js', function(req, res, next) {
        res.sendFile('home.js', { root: 'script' });
});
router.get('/css/style.css', function(req, res, next) {
        res.sendFile('style.css', { root: 'css' });
});
router.get('/images/longDistanceMove.png', function(req, res, next) {
        res.sendFile('longDistanceMove.png', { root: 'images' });
});
router.get('/images/packing_1.png', function(req, res, next) {
        res.sendFile('packing_1.png', { root: 'images' });
});
router.get('/images/laborOnly.png', function(req, res, next) {
        res.sendFile('laborOnly.png', { root: 'images' });
});

router.get('/images/vehicleShift.png', function(req, res, next) {
        res.sendFile('vehicleShift.png', { root: 'images' });
});
router.get('/images/hireTruck.png', function(req, res, next) {
        res.sendFile('hireTruck.png', { root: 'images' });
});
router.get('/images/storage.png', function(req, res, next) {
        res.sendFile('storage.png', { root: 'images' });
});

module.exports = router;
