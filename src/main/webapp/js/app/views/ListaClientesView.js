class ListaClientesView extends ClienteView{
  constructor(elemento) {
    super(elemento);
  }

  template (){
    this._elemento.innerHTML = `<form class="col-md-3">
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
                                      <button type="button" name="button" class = "btn btn-info"><span class = "glyphicon glyphicon-search"></span></button>
                                    </div>
                                  </form>

                                  <div class="col-md-9 col-md-offset-1">
                                    <table class="table table-striped table-hover table-bordered">
                                      <thead class="info">
                                        <th class = "active text-center" style = "width:22%;">Nome</th>
                                        <th class = "active text-center" style = "width:22%;">Sobrenome</th>
                                        <th class = "active text-center" style = "width:22%;">Rg</th>
                                        <th class = "active text-center" style = "width:22%;">Cpf</th>
                                        <th class = "active text-center">Opcoes</th>
                                      </thead>
                                      <tbody id = "corpoTabela">

                                      </tbody>
                                    </table>
                                  </div>`
  }


  carrega(clientes){
    let tabela = document.querySelector('#corpoTabela');
    clientes.forEach((cliente) => {
      tabela.innerHTML += `<tr class = "text-center">
                            <td>${cliente.nome}</td>
                            <td>${cliente.sobrenome}</td>
                            <td>${cliente.rg}</td>
                            <td>${cliente.cpf}</td>
                            <td>${cliente.clienteId}</td>
                          </tr>`
    });
  }

  limpaLista(){
    let tabela = document.querySelector('#corpoTabela');
    while (tabela.firstChild)
      tabela.removeChild(tabela.firstChild);
  }


}
