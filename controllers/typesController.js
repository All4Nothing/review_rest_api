var Types = require('../models/types');

// Display list of all Types.
exports.types_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Types list');
};

// Display detail page for a specific Types.
exports.types_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Types detail' + req.params.id);
};

// Handle Types create on POST.
exports.types_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Types create');
};

exports.types_detail_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Types create');
};

// Handle Types delete on POST.
exports.types_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Types delete');
};

exports.types_detail_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Types Detail delete' + req.params.id);
}

exports.types_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Types update')
}

exports.types_detail_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Types Detail update')
}