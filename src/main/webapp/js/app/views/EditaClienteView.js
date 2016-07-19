class EditaClienteView extends ClienteView{
  constructor(elemento) {
    super(elemento);
  }

  template(cliente){
    this._elemento.innerHTML = `<div id = "formEditaCliente" class="panel panel-warning col-md-offset-1 col-md-10" style="padding:0px;">
                                  <div class="panel-heading">
                                    <h2>Editar Cliente</h2>
                                  </div>
                                  <div class="panel-body">
                                    <form action="">
                                      <div class="form-group">
                                        <label for="nome">Nome</label>
                                        <input id = "nome" type="text" class="form-control" value = "${cliente.nome}" required>
                                      </div>
                                      <div class="form-group">
                                        <label for="sobrenome">Sobrenome</label>
                                        <input id = "sobrenome" type="text" class="form-control" value = "${cliente.sobrenome}" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="">Rg</label>
                                        <input id = "rg" type="number" class="form-control" value = "${cliente.rg}" maxlength="20" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="cpf">Cpf</label>
                                        <input id = "cpf" type="number" class="form-control" value = "${cliente.cpf}" maxlength="14" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="rua">Rua</label>
                                        <input id = "rua" type="text" class="form-control" value = "${cliente.endereco.rua}" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="numero">Número</label>
                                        <input id = "numero" type="number" class="form-control" value = "${cliente.endereco.numero}" required = "true">
                                      </div>
                                      <div class="form-group">
                                        <label for="complemento">Complemento</label>
                                        <input id = "complemento" type="text" class="form-control" value = "${cliente.endereco.complemento}">
                                      </div>
                                      <button type="button" name="button" class="btn btn-warning" onclick = "clienteController.edita(event , ${cliente.clienteId} , ${cliente.endereco.enderecoId})">Editar</button>
                                    </form>
                                  </div>
                                </div>`
  }

  remove(){
    let elementoASerRemovido = document.querySelector('#formEditaCliente');
    this._elemento.removeChild(elementoASerRemovido);
  }
}
