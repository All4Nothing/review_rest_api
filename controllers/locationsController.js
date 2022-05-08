var Locations = require('../models/locations');

// Display list of all Types.
exports.location_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Locations list');
};

// Display detail page for a specific Types.
exports.location_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Locations detail' + req.params.id);
};

// Handle Types create on POST.
exports.location_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Locations create');
};

exports.location_detail_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Locations Detail create');
};

// Handle Types delete on POST.
exports.location_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Locations delete');
};

exports.location_detail_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Locations Detail delete' + req.params.id);
}

exports.location_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Locations update')
}

exports.location_detail_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Locations Detail update')
}