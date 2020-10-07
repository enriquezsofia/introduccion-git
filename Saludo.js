module.exports = class Saludo {
  constructor(nombre){
    this.nombre = nombre;
  }
  
  saluda() {
    console.log(`Hola ${this.nombre}`);
  }
};
