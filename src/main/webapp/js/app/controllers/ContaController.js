class ContaController {
  constructor() {
    this._novaContaView = new NovaContaView('corpo');
  }

  montaFormularioCadastro(){
    this._novaContaView.montaFormulario();
  }

  cadastra(event){
    event.preventDefault();
    let tipoConta = new TipoConta();
    tipoConta.tipoContaId = document.querySelector('#tipoConta').value;
    if (tipoConta.tipoContaId == 1) {
      let conta = new ContaCorrente();
      conta.depositoInicial = document.querySelector('#depositoInicial').value;
      conta.limite = document.querySelector('#limite').value;
      conta.tipoConta = tipoConta;
      console.log(conta);
    }
  }
}
