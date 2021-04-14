const mongoose = require("mongoose");

const schema = mongoose.Schema({
  nome: String,
  descricao: String,
  quantidade: Number,
});

if (process.env.IS_OFFLINE) {
  // Deleta a model toda vez que o serverless realiza o build offline
  delete mongoose.connection.models.produto;
}

const Model = mongoose.model("produto", schema, "produtos");

module.exports = Model;
