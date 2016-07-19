class OpcoesClienteView extends ClienteView {
  constructor(elemento) {
    super(elemento);
  }

  template(){
    this._elemento.innerHTML = `<div class="panel panel-primary center" style="width:50%;">
                                  <div class="panel-heading">
                                    <h4>Opções</h4>
                                  </div>
                                  <div class="panel-body">
                                    <button class="btn btn-default btn-lg">Nova conta</button>
                                    <button class="btn btn-warning btn-lg" onclick="clienteController.exibeFormularioEdicao()">Editar</button>
                                    <button class="btn btn-danger btn-lg">Excluir</button>
                                  </div>
                                </div>`;
  }


}
