var Review = require('../models/review');

// Display list of all Shops.
exports.review_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop list');
};

// Display detail page for a specific Shop.
exports.review_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Review detail' + req.params.id);
};

// Handle Shop create on POST.
exports.review_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Review create');
};

exports.review_detail_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Review create');
};

// Handle Shop delete on POST.
exports.review_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Review delete');
};

exports.review_detail_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Review Detail delete' + req.params.id);
}

exports.review_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Review update')
}

exports.review_detail_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Review Detail update')
}