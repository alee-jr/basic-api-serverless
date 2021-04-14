const mongoose = require("mongoose");
const produtoModel = require("../../models/Produto");

class DeleteProdutoService {
  static async delete(id) {
    await mongoose.connect(process.env.MONGODB_USER);
    await produtoModel.findOneAndRemove({ _id: id });
    await mongoose.disconnect();
  }
}

module.exports = DeleteProdutoService;
