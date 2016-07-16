class ClienteController {
  constructor() {
    this._cadastroClienteView = new CadastroClienteView('corpo');
    this._listaClientesView = new ListaClientesView('corpo');
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
    event.preventDefault();
    this._listaClientesView.template();
    let clientes = [];
    let promessa = new ClienteService().lista();
    promessa.then(dados => {
        dados.forEach(cliente => clientes.push(cliente));
        this._listaClientesView.carrega(clientes);
      }).catch(error => alert(error));
  }

  busca(event){
    event.preventDefault();
    this._listaClientesView.limpaLista();
    let atributoPesquisa = null;
    let campoPesquisa = null;
    let valor = null;
    if(event.target.tagName == 'SPAN'){
      atributoPesquisa = event.target.parentNode.value;
      campoPesquisa = event.target.parentNode.parentNode.children[0];
      valor = campoPesquisa.value;
    }else if (event.target.tagName == 'BUTTON') {
      atributoPesquisa = event.target.value;
      campoPesquisa = event.target.parentNode.children[0];
      valor = campoPesquisa.value;
    }
    let clientes = [];
    let promessa = new ClienteService().pesquisa(atributoPesquisa , valor);
    promessa.then(dados => {
        dados.forEach(cliente => clientes.push(cliente));
        this._listaClientesView.carrega(clientes);
        campoPesquisa.value = '';
      }).catch(error => alert(error));
  }

  pegaPorId(event , clienteId){
    event.preventDefault();
    this._listaClientesView.remove();
    let promessa = new ClienteService().pegaPorId(clienteId);
    promessa.then(cliente => console.log(cliente)).catch(erro => alert(erro));
  }

}
