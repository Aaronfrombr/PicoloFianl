const ORM = require('./ORM')

class Estudante extends ORM {
      static _vetor = [];
    }

  
  class Pessoa extends ORM {
        static _vetor = [] ;
    }
  
  Estudante.criar({ nome: 'Aaron', estudante: "Tads 3" });
  Estudante.criar({ nome: 'Vitor', estudante: "Tads 2" });
  Pessoa.criar({ nome: 'Gabriel', idade: 22 });
  
  Estudante.ler();
  Pessoa.ler();
  
  Estudante.atualizar(1, { nome: 'Lucas', estudante: "Tads 4" });
  Pessoa.atualizar(0, { nome: "Hugo", idade: 20 })
  Pessoa.deletar(0);
  Estudante.deletar(0);

  
  

