var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShopSchema = new Schema(
    {
        shop_name: { type: String, required: true, max: 100 },
        shop_type: { type: String, max: 100 },
        shop_location: { type: String },
    }
);

// Virtual for cafe's name
ShopSchema
    .virtual('name')
    .get(function () {
        return this.cafe_name;
    });