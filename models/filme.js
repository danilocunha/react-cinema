var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var filmeSchema = new Schema({
  filmeId: { type: String, unique: true, index: true },
  nome: String,
  cinema: { type : Schema.ObjectId, ref : 'Estabelecimento' }
});

module.exports = mongoose.model('Filme', filmeSchema);