var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    bg: "../images/blank-box.png",
    bgClass: "bg-index",
    mobileBgClass: "bg-index bg-index-mobile",
    breadcrumbPortfolio: "grey-text",
    breadcrumbBrand: "white-text",
    footerClass: "index-footer"
  });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {
    breadcrumbPortfolio: "white-text",
    breadcrumbBrand: "grey-text",
    footerClass: "",
    bodyClass: ""
  });
});

router.get('/breanna', function(req, res, next) {
  res.render('breannabaker', {
    bg:"../images/breannabaker/breanna-detail-lowq.png",
    bgClass:"bg-breanna",
    mobileBgClass: "",
    breadcrumbPortfolio: "white-text",
    breadcrumbBrand: "grey-text",
    footerClass: "big-picture"
  });
});

router.get('/popul-vuh', function(req, res, next) {
  res.render('populvuh', {
    bg:"../images/populvuh/populvuh-detail-lowq.png",
    bgClass:"bg-populvuh",
    mobileBgClass: "",
    breadcrumbPortfolio: "white-text",
    breadcrumbBrand: "grey-text",
    footerClass: "big-picture"
  });
});

router.get('/equipp', function(req, res, next) {
  res.render('equipp', {
    bg:"../images/equipp/equipp-detail-lowq.png",
    bgClass:"bg-equipp",
    mobileBgClass: "",
    breadcrumbPortfolio: "white-text",
    breadcrumbBrand: "grey-text",
    footerClass: "big-picture"
  });
});

router.get('/foodhyped', function(req, res, next) {
  res.render('foodhyped', {
    bg:"../images/foodhyped/foodhyped-detail-lowq.png",
    bgClass:"bg-foodhyped",
    mobileBgClass: "",
    breadcrumbPortfolio: "white-text",
    breadcrumbBrand: "grey-text",
    footerClass: "big-picture"
  });
});


module.exports = router;
