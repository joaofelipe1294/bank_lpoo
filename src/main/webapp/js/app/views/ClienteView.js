class ClienteView {
  constructor(elemento) {
    this._elemento = document.querySelector(`#${elemento}`);
  }

  template(){
    throw new Error('Esse método deve ser implementado !');
  }

  remove(){
    throw new Error('Esse método deve ser implementado !');
  }

}
