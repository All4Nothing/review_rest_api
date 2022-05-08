var express = require('express');
var router = express.Router();

// Require controller modules.
var shop_controller = require('../controllers/shopsController');
var types_controller = require('../controllers/typesController');
var author_controller = require('../controllers/authorController');
var keywords_controller = require('../controllers/keywordsController');
var reviews_controller = require('../controllers/reviewsController');
var users_controller = require('../controllers/usersController');
var location_controller = require('../controllers/locationsController');

/// REVIEW ROUTES ///
router.get('/reviews', reviews_controller.review_list);
router.post('/reviews', reviews_controller.review_create);
router.delete('/reviews', reviews_controller.review_delete);
router.put('/reviews', reviews_controller.review_update);

router.get('/reviews/:id', reviews_controller.review_detail);
router.post('/reviews/:id', reviews_controller.review_detail_create);
router.delete('/reviews/:id', reviews_controller.review_detail_delete);
router.put('/reviews/:id', reviews_controller.review_detail_update);

/// SHOP ROUTES ///

router.get('/', shop_controller.index);

router.get('/shops', shop_controller.shop_list);
router.post('/shops', shop_controller.shop_create);
router.delete('/shops', shop_controller.shop_delete);
router.update('/shops', shop_controller.shop_update);

router.get('/shops/:id', shop_controller.shop_detail);
router.post('/shops/:id', shop_controller.shop_detail_create);
router.delete('/shops/:id', shop_controller.shop_detail_delete);
router.update('/shops/:id', shop_controller.shop_detail_update);

/// TYPES ROUTES ///

router.get('/types', types_controller.types_list);
router.post('/types', types_controller.types_create);
router.delete('/types', types_controller.types_delete);
router.update('/types', types_controller.types_update);

router.get('/types/:id', types_controller.types_detail);
router.post('/types/:id', types_controller.types_detail_create);
router.delete('/types/:id', types_controller.types_detail_delete);
router.put('/types/:id', types_controller.types_detail_update);

/// LOCATION ROUTES ///
router.get('/locations', location_controller.location_list);
router.post('/locations', location_controller.location_create);
router.delete('/locations', location_controller.location_delete);
router.put('locations', location_controller.location_update);

router.get('/locations/:id', location_controller.location_detail);
router.post('/locations/:id', location_controller.location_detail_create);
router.delete('/locations/:id', location_controller.location_detail_delete);
router.put('/locations/:id', location_controller.location_detail_update);

/// AUTHOR ROUTES ///


/// USERS ROUTES ///

/// KEYWORDS ROUTES
router.get('/keywords', keywords_controller.keywords_list);
router.post('/keywords', keywords_controller.keywords_create);
router.delete('/keywords', keywords_controller.keywords_delete);
router.put('/keywords', keywords_controller.keywords_update);

router.get('/keywords/:id', keywords_controller.keywords_detail);
router.post('/keywords/:id', keywords_controller.keywords_detail_create);
router.delete('/keywords/:id', keywords_controller.keywords_detail_delete);
router.put('/keywords/:id', keywords_controller.keywords_detail_update);

module.exports = router;