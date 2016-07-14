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

}
