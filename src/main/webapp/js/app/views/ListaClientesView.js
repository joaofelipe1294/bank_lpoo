class ListaClientesView extends ClienteView{
  constructor(elemento) {
    super(elemento);
  }

  template (){
    this._elemento.innerHTML = `<div id = "listaClientes">
                                  <form class="col-md-3">
                                    <div class="form-group">
                                      <input type="text" class="form-control formBuscaCliente" placeholder="Nome">
                                      <button type="button" name="button" class = "btn btn-info" onclick = "clienteController.busca(event)" value = "nome">
                                        <span class = "glyphicon glyphicon-search"></span>
                                      </button>
                                    </div>
                                  </form>

                                  <form class="col-md-3">
                                    <div class="form-group">
                                      <input type="text" class="form-control formBuscaCliente" placeholder="Sobrenome" id = "sobrenomeBusca">
                                      <button type="button" name="button" class = "btn btn-info" onclick = "clienteController.busca(event)" value = "sobrenome">
                                        <span class = "glyphicon glyphicon-search"></span>
                                      </button>
                                    </div>
                                  </form>

                                  <form class="col-md-3">
                                    <div class="form-group">
                                      <input type="text" class="form-control formBuscaCliente" placeholder="Rg">
                                      <button type="button" name="button" class = "btn btn-info" onclick = "clienteController.busca(event)" value = "rg">
                                        <span class = "glyphicon glyphicon-search"></span>
                                      </button>
                                    </div>
                                  </form>

                                  <form class="col-md-3">
                                    <div class="form-group">
                                      <input type="text" class="form-control formBuscaCliente" placeholder="Cpf">
                                      <button type="button" name="button" class = "btn btn-info" onclick = "clienteController.busca(event)" value = "cpf">
                                        <span class = "glyphicon glyphicon-search"></span>
                                      </button>
                                    </div>
                                  </form>

                                  <div class="col-md-9 col-md-offset-1">
                                    <table class="table table-striped table-hover table-bordered">
                                      <thead class="info">
                                        <th class = "active text-center celula">Nome</th>
                                        <th class = "active text-center celula">Sobrenome</th>
                                        <th class = "active text-center celula">Rg</th>
                                        <th class = "active text-center celula">Cpf</th>
                                        <th class = "active text-center"></th>
                                      </thead>
                                      <tbody id = "corpoTabela">

                                      </tbody>
                                    </table>
                                  </div>
                                </div>`
  }

  remove(){
    let elementoASerRemovido = document.querySelector('#listaClientes');
    this._elemento.removeChild(elementoASerRemovido);
  }


  carrega(clientes){
    let tabela = document.querySelector('#corpoTabela');
    clientes.forEach((cliente) => {
      tabela.innerHTML += `<tr class = "text-center">
                            <td>${cliente.nome}</td>
                            <td>${cliente.sobrenome}</td>
                            <td>${cliente.rg}</td>
                            <td>${cliente.cpf}</td>
                            <td>
                              <button value = "id" onclick = "clienteController.pegaPorId(event , ${cliente.clienteId})" class = "btn btn-info">
                                <span class = "glyphicon glyphicon-plus"></span>
                                </button>
                            </td>
                          </tr>`
    });
  }

  limpaLista(){
    let tabela = document.querySelector('#corpoTabela');
    while (tabela.firstChild)
      tabela.removeChild(tabela.firstChild);
  }


}
