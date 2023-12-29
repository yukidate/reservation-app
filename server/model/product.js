const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    coverImage: String,
    name: { type:String, require: true, max:[60,'最大60文字']},
    price: Number,
    description: String,
    heding1: String,
    heding2: String,
    heding3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String,
});

module.exports = mongoose.model('Product',ProductSchema)//これを宣言することでDBとこのModelを使うミドルウェアを使える