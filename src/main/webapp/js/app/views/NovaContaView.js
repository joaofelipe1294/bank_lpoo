class NovaContaView {
  constructor(elemento) {
      this._elemento = document.querySelector(`#${elemento}`)
  }

  template(){
    let tiposDeConta = new ContaService().pegaTiposDeConta();
    this._elemento.innerHTML = `<div id = "formNovaConta" class="panel panel-primary col-md-offset-1 col-md-10" style="padding:0px;">
                                  <div class="panel-heading">
                                    <h2>Nova Conta</h2>
                                  </div>
                                  <div class="panel-body">
                                    <form id = "form">
                                      <div class="form-group">
                                        <label for="tipoConta">Tipo</label>
                                        <select class="form-control" id="tipoConta" onchange = "contaController.montaFormularioCadastro()">
                                          <option value = "0">Selecione o tipo da conta</option>
                                        </select>
                                      </div>

                                    </form>
                                  </div>
                                </div>`
    this.preparaTiposDeConta();
  }

  preparaTiposDeConta(){
    let tags;
    let $select = document.querySelector('#tipoConta');
    let promessa = new ContaService().pegaTiposDeConta();
    promessa.then(tiposConta => {
      tiposConta.forEach(tipo => {
        $select.innerHTML +=  `<option value = "${tipo.tipoContaId}">
                  ${tipo.nome}
                </option>`;
      });
    }).catch(erro => alert(erro));
  }

  montaFormulario(){
    let $form = document.querySelector('#form');
    let $select = document.querySelector('#tipoConta');
    let campos;
    if (document.querySelector('#campos') != null) {
      document.querySelector('#campos').remove();
    }
    if($select.value == 1) { //conta corrente
      campos = `<div class="form-group">
                  <label for="depositoInicial">Depósito inicial</label>
                  <input id = "depositoInicial" type="number" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="limite">Limite</label>
                  <input id = "limite" type="text" class="form-control" required>
                </div>
                <button class = "btn btn-primary" onclick = "contaController.cadastraContaCorrente(event)">Salvar</button>`;
      let div = document.createElement('DIV');
      div.setAttribute('id' , 'campos');
      $form.appendChild(div)
      div.innerHTML = campos;
    }else if ($select.value == 2) {
      campos = `<div class="form-group">
                  <label for="montanteMinimo">Montante mínimo</label>
                  <input id = "montanteMinimo" type="number" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="depositoMinimo">Depósito mínimo</label>
                  <input id = "depositoMinimo" type="text" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="depositoInicial">Depósito inicial</label>
                  <input id = "depositoInicial" type="text" class="form-control" required>
                </div>
                <button class = "btn btn-primary" >Salvar</button>`;
      let div = document.createElement('DIV');
      div.setAttribute('id' , 'campos');
      $form.appendChild(div)
      div.innerHTML = campos;
    }

  }


}
