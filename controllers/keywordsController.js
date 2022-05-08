var Keywords = require('../models/keywords');

// Display list of all Types.
exports.keywords_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Keywords list');
};

// Display detail page for a specific Types.
exports.keywords_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Keywords detail' + req.params.id);
};

// Handle Types create on POST.
exports.keywords_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Keywords create');
};

exports.keywords_detail_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Keywords Detail create');
};

// Handle Types delete on POST.
exports.keywords_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Keywords delete');
};

exports.keywords_detail_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Keywords Detail delete' + req.params.id);
}

exports.keywords_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Keywords update')
}

exports.keywords_detail_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Keywords Detail update')
}