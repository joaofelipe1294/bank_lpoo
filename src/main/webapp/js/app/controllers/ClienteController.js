class ClienteController {
  constructor() {
    this._clienteView = new CadastroClienteView('corpo');
  }

  cadastra(event){
    event.preventDefault();
    let endereco = new Endereco();
    endereco.rua = document.querySelector('#rua').value;
    endereco.numero = document.querySelector('#numero').value;
    endereco.complemento = document.querySelector('#complemento').value;
    let cliente = new Cliente();
    cliente.nome = document.querySelector('#nome').value;
    cliente.sobrenome = document.querySelector('#sobrenome').value;
    cliente.rg = document.querySelector('#rg').value;
    cliente.cpf = document.querySelector('#cpf').value;
    cliente.endereco = endereco;
    new ClienteService().cadastra(cliente);
    this._clienteView.remove();
  }

  _limpaCampos(){
    document.querySelector('#rua').value = '';
    document.querySelector('#numero').value = '';
    document.querySelector('#complemento').value = '';
    document.querySelector('#nome').value = '';
    document.querySelector('#sobrenome').value = '';
    document.querySelector('#rg').value = '';
    document.querySelector('#cpf').value = '';
  }

  exibeFormulario(event){
    event.preventDefault();
    this._clienteView.template();
  }

}
