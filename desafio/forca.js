class Forca {
  constructor (palavraSecreta) {
    this.palavraSecreta = Array.from(palavraSecreta);
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = [];
    this.estado = "aguardando chute";

    this.palavraSecreta.forEach(letra => this.palavra.push("_")); //Inicia o Array palavra com os placeholders "_"
  }
  
  chutar(letra) {
      if (letra.length == 1 && !this.letrasChutadas.includes(letra)) {
        this.letrasChutadas.push(letra);
        if (this.palavraSecreta.includes(letra)){
          for (const i in this.palavraSecreta) {   // Intera nos elementos da palavra secreta,
            if (this.palavraSecreta[i] == letra){  // e, se a letra chutada pertencer àquela posição,
              this.palavra[i] = letra;             // substitui a letra chutada na array palavra.
            }
            if(!this.palavra.includes("_") && this.vidas > 0){
              this.estado = "ganhou";
            }
          }
        } else {
          this.vidas -= 1;
          if (this.vidas == 0){
            this.estado = "perdeu";
          }
        }

      }
  }

  buscarEstado() { 

  	return this.estado; // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  } 

  buscarDadosDoJogo() {
	return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

}

module.exports = Forca;
