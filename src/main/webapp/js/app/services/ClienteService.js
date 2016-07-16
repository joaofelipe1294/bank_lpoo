class ClienteService {
  constructor() {
  }

  cadastra(cliente){
      let http = new XMLHttpRequest();
      http.open('POST' , '/bank_lpoo/webresources/cliente');
      http.setRequestHeader('Content-type' , "application/json");
      http.onreadystatechange = () => {
        if(http.readyState == 4){
          if (http.status == 200) {
            let dadosRecebidos = JSON.parse(http.responseText);
            alert('Cliente cadastrado !');
          }else {
            alert('Erro ao cadastrar cliente');
          }
        }
      }
      http.send(JSON.stringify(cliente));
  }


  lista(){
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/bank_lpoo/webresources/cliente');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    let clientes = JSON.parse(xhr.responseText).map(cliente =>  Object.assign(new Cliente(), cliente));
                    resolve(clientes);
                } else {
                    console.log(xhr.responseText);
                    reject('Não foi possível obter as negociações da semana');
                }
            }
        }
        xhr.send();

    });
  }

  pesquisa(atributo , valorBusca){
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `/bank_lpoo/webresources/cliente/${atributo}=${valorBusca}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    let clientes = JSON.parse(xhr.responseText).map(cliente =>  Object.assign(new Cliente(), cliente));
                    resolve(clientes);
                } else {
                    console.log(xhr.responseText);
                    reject('Não foi possível obter os clientes');
                }
            }
        }
        xhr.send();
    });
  }

  pegaPorId(clienteId){
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `/bank_lpoo/webresources/cliente/id=${clienteId}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    let cliente = JSON.parse(xhr.responseText)
                    cliente = Object.assign(new Cliente(), cliente);
                    resolve(cliente);
                } else {
                    console.log(xhr.responseText);
                    reject('Não foi possível obter os clientes');
                }
            }
        }
        xhr.send();
    });
  }

  edita(cliente){
    let http = new XMLHttpRequest();
    http.open('PUT' , '/bank_lpoo/webresources/cliente');
    http.setRequestHeader('Content-type' , "application/json");
    http.onreadystatechange = () => {
      if(http.readyState == 4){
        if (http.status == 200) {
          alert('Cliente editado !');
        }else {
          alert('Erro ao editar cliente');
        }
      }
    }
    http.send(JSON.stringify(cliente));
  }


}
