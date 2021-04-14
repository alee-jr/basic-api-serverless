const GetProdutosService = require("../services/ProdutoServices/GetProdutosService");
const PostProdutoService = require("../services/ProdutoServices/PostProdutoService");
const PutProdutoService = require("../services/ProdutoServices/PutProdutoService");
const DeleteProdutoService = require("../services/ProdutoServices/DeleteProdutoService");

const getResponseFormat = (body, statusCode = 200) => ({
  body: JSON.stringify(body, null, 2),
  statusCode,
});

class ProdutoController {
  static async getProdutos(event, _context) {
    const context = _context;
    context.callbackWaitsForEmptyEventLoop = false;
    try {
      const produto = await GetProdutosService.get();
      return getResponseFormat(produto);
    } catch (err) {
      return getResponseFormat(
        {
          mensagem: err.message,
        },
        err.statusCode
      );
    }
  }

  static async postProduto(event, _context) {
    const context = _context;
    context.callbackWaitsForEmptyEventLoop = false;
    try {
      const { body } = event;
      await PostProdutoService.post(JSON.parse(body));
      return getResponseFormat({ mensagem: "Sucesso!" });
    } catch (err) {
      return getResponseFormat(
        {
          mensagem: err.message,
        },
        err.statusCode
      );
    }
  }

  static async putProduto(event, _context) {
    const context = _context;
    context.callbackWaitsForEmptyEventLoop = false;
    try {
      const { id } = event.queryStringParameters;
      const { body } = event;
      await PutProdutoService.put(id, JSON.parse(body));
      return getResponseFormat({ mensagem: "Sucesso!" });
    } catch (err) {
      return getResponseFormat(
        {
          mensagem: err.message,
        },
        err.statusCode
      );
    }
  }

  static async deleteProduto(event, _context) {
    const context = _context;
    context.callbackWaitsForEmptyEventLoop = false;
    try {
      const { id } = event.queryStringParameters;
      await DeleteProdutoService.delete(id);
      return getResponseFormat({ mensagem: "Sucesso!" });
    } catch (err) {
      return getResponseFormat(
        {
          mensagem: err.message,
        },
        err.statusCode
      );
    }
  }
}

module.exports = ProdutoController;
