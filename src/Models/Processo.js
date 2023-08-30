class Processo {
    constructor(autor, numeroProcesso, data, hora, assunto) {
      this.autor = autor;
      this.numeroProcesso = numeroProcesso;
      this.data = data;
      this.hora = hora;
      this.assunto = assunto;

    }
  
    // Métodos para acessar e modificar os atributos, se necessário
    getAutor() {
      return this.autor;
    }
  
    setAutor(autor) {
      this.autor = autor;
    }
  
    getNumeroProcesso() {
      return this.numeroProcesso;
    }
  
    setNumeroProcesso(numeroProcesso) {
      this.numeroProcesso = numeroProcesso;
    }
  
    getData() {
      return this.data;
    }

    exibeDia(){
      const partesData = this.data.split("-");
      return partesData[2]
    }
    exibeMes(){
      const partesData = this.data.split("-");
      return partesData[1]
    }
  
    setData(data) {
      this.data = data;
    }
  
    getHora() {
      return this.hora;
    }
  
    setHora(hora) {
      this.hora = hora;
    }
  
    getAssunto() {
      return this.assunto;
    }
  
    setAssunto(assunto) {
      this.assunto = assunto;
    }
  
    getObservacoes() {
      return this.observacoes;
    }
  

  }

  export default Processo