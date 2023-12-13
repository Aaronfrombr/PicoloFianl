
class ORM {
  constructor() {
    if (this.constructor === ORM) {
        throw new Error ("Não instancie")
    }
  }

  static criar(item) {
      try {
          this._vetor.push(item);
          console.table(this._vetor);
      } catch (error) {
          console.error("Erro ao criar o item:", error.message);
      }
  }

  static ler() {
      try {
          console.table(this._vetor);
      } catch (error) {
          console.error("Erro ao ler os itens:", error.message);
      }
  }

  static atualizar(index, novoItem) {
      try {
          if (index >= 0 && index < this._vetor.length) {
              this._vetor[index] = novoItem;
              console.table(this._vetor);
          } else {
              throw new Error("Índice fora de alcance.");
          }
      } catch (error) {
          console.error("Erro ao atualizar o item:", error.message);
      }
  }

  static deletar(index) {
      try {
          if (index >= 0 && index < this._vetor.length) {
              this._vetor.splice(index);
              console.table(this._vetor);
          } else {
              throw new Error("Índice fora de alcance.");
          }
      } catch (error) {
          console.error("Erro ao excluir o item:", error.message);
      }
  }
}

module.exports = ORM;