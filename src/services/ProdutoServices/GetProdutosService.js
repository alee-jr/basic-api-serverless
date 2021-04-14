const produtoModel = require("../../models/Produto");
const mongoose = require("mongoose");

class GetProdutosService {
  static async get() {
    await mongoose.connect(process.env.MONGODB_USER);
    const produto = await produtoModel.find();
    await mongoose.disconnect();
    return produto;
  }
}

module.exports = GetProdutosService;
