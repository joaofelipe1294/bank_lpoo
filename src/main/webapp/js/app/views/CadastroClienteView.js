class CadastroClienteView extends ClienteView{
  constructor(elemento) {
    super(elemento);
  }

  template (){
    this._elemento.innerHTML = `<div id = "formCadastroCliente" class="panel panel-primary col-md-offset-1 col-md-10" style="padding:0px;">
                                  <div class="panel-heading">
                                    <h2>Novo Cliente</h2>
                                  </div>
                                  <div class="panel-body">
                                    <form action="">
                                      <div class="form-group">
                                        <label for="nome">Nome</label>
                                        <input id = "nome" type="text" class="form-control" required>
                                      </div>
                                      <div class="form-group">
                                        <label for="sobrenome">Sobrenome</label>
                                        <input id = "sobrenome" type="text" class="form-control" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="">Rg</label>
                                        <input id = "rg" type="number" class="form-control" maxlength="20" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="cpf">Cpf</label>
                                        <input id = "cpf" type="number" class="form-control" maxlength="14" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="rua">Rua</label>
                                        <input id = "rua" type="text" class="form-control" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="numero">Número</label>
                                        <input id = "numero" type="number" class="form-control" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="complemento">Complemento</label>
                                        <input id = "complemento" type="text" class="form-control">
                                      </div>
                                      <button type="button" name="button" class="btn btn-primary" onclick = "clienteController.cadastra(event)">Cadastrar</button>
                                    </form>
                                  </div>
                                </div>`;
    document.querySelector('#nome').focus();
  }

  remove(){
    let elementoASerRemovido = document.querySelector('#formCadastroCliente');
    this._elemento.removeChild(elementoASerRemovido);
  }

}
