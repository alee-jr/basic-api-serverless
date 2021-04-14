const mongoose = require("mongoose");
const produtoModel = require("../../models/Produto");

class PutProdutoService {
  static async put(id, body) {
    await mongoose.connect(process.env.MONGODB_USER);
    await produtoModel.updateOne({ _id: id }, { ...body });
    await mongoose.disconnect();
  }
}

module.exports = PutProdutoService;
