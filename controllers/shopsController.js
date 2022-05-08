var Shop = require('../models/shop');

exports.index = function (req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all Shops.
exports.shop_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop list');
};

// Display detail page for a specific Shop.
exports.shop_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop detail' + req.params.id);
};

// Handle Shop create on POST.
exports.shop_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop create');
};

exports.shop_detail_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop Detail create');
};

// Handle Shop delete on POST.
exports.shop_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop delete');
};

exports.shop_detail_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop Detail delete' + req.params.id);
}

exports.shop_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop update')
}

exports.shop_detail_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Shop Detail update')
}