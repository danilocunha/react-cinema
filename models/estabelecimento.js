var mongoose = require('mongoose');

var estabelecimentoSchema = new mongoose.Schema({
  nome: String,
  endereco: String
});

module.exports = mongoose.model('Estabelecimento', estabelecimentoSchema);