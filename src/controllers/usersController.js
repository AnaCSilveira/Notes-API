const AppError = require("../utils/AppError");

class usersController {
  /**
   * Um controller tem no máximo 5 métodos (Funções)
   * 1 - index - GET para listar vários registros
   * 2 - Show - GET para exibir um registro especifico
   * 3 - create - POST para criar um registro
   * 4 - update - PUT para atualizar um registro
   * 5 - delete - DELETE para remover um registro
   * OBS: Não é necessário utilizar todos os métodos
   */

  creat(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      throw new AppError("O nome é obrigatório");
    }

    response.status(201).json({ name, email, password });
  }
}

module.exports = usersController;
