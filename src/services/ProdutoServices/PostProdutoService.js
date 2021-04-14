const mongoose = require("mongoose");
const produtoModel = require("../../models/Produto");

class PostProdutoService {
  static async post({ nome, descricao, quantidade }) {
    await mongoose.connect(process.env.MONGODB_USER);
    const produto = new produtoModel({
      nome,
      descricao,
      quantidade,
    });
    await produto.save();
    await mongoose.disconnect();
  }
}

module.exports = PostProdutoService;
