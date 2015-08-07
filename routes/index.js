var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {
    breadcrumb: {
      portfolio: "white-text",
      brand: "grey-text"
    },
    bigPicture: ""
  });
});

router.get('/breanna', function(req, res, next) {
  res.render('breannabaker', {
    bg:"../images/breannabaker/breanna-detail-lowq.png",
    breadcrumbPortfolio: "white-text",
    breadcrumbBrand: "grey-text",
    bigPicture: "big-picture"
  });
});

router.get('/equipp', function(req, res, next) {
  res.render('equipp', {
    bg:"../images/equipp/equipp-detail-lowq.png",
    breadcrumbPortfolio: "white-text",
    breadcrumbBrand: "grey-text",
    bigPicture: "big-picture"
  });
});

router.get('/foodhyped', function(req, res, next) {
  res.render('foodhyped', {
    bg:"../images/foodhyped/foodhyped-detail-lowq.png",
    breadcrumbPortfolio: "white-text",
    breadcrumbBrand: "grey-text",
    bigPicture: "big-picture"
  });
});


module.exports = router;
