class ContaService {
  constructor() {
    this._http = new XMLHttpRequest();
  }

  pegaTiposDeConta(){
    return new Promise((resolve, reject) => {

        this._http.open('GET', '/bank_lpoo/webresources/tiposConta');
        this._http.onreadystatechange = () => {
            if(this._http.readyState == 4) {
                if(this._http.status == 200) {
                    let tiposDeConta = JSON.parse(this._http.responseText).map(tipoConta =>  Object.assign(new TipoConta(), tipoConta));
                    resolve(tiposDeConta);
                } else {
                    console.log(this._http.responseText);
                    reject('Não foi possível obter as negociações da semana');
                }
            }
        }
        this._http.send();

    });
  }

  cadastraContaCorrente(conta){
    this._http.open('POST' , '/bank_lpoo/webresources/contaCorrente');
    this._http.setRequestHeader('Content-type' , "application/json");
    this._http.onreadystatechange = () => {
      if(this._http.readyState == 4){
        if (this._http.status == 200) {
          alert('Conta criada !');
        }else {
          alert('Erro ao criar conta');
        }
      }
    }
    this._http.send(JSON.stringify(conta));
  }


}
