class ClienteController {
  constructor() {
    this._cadastroClienteView = new CadastroClienteView('corpo');
    this._listaClienteView = new ListaClientesView('corpo');
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
    this._cadastroClienteView.remove();
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
    this._cadastroClienteView.template();
  }



  carregaClientes(event){
    //event.preventDefault();
    this._listaClienteView.template();
    let clientes = [];
    let promessa = new ClienteService().lista();
    promessa.then(dados => {
        dados.forEach(cliente => clientes.push(cliente));
        this._listaClienteView.carrega(clientes);
      }).catch(error => alert(error));
  }





































}
