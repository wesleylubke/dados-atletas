class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Indermediário"
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        } else {
            return "Sem categoria"
        }
    }

    calculaIMC() {
        const IMC = this.peso / Math.pow(this.altura, 2)
        return IMC.toFixed(2)
    }

    calculaMediaValida() {

        let novoArray = this.notas.slice()
        novoArray.sort(function (a, b) {
            return a - b
        })

        novoArray.pop()
        novoArray.shift()

        let arrayReduzido = novoArray.reduce(function (total, atual) {
            return total + atual
        })
        let media = arrayReduzido / novoArray.length


        return media.toFixed(2)
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`
[ DADOS DO ATLETA]

Nome: ${atleta.nome}
Idade: ${atleta.idade}
Peso: ${atleta.peso}
Altura: ${atleta.altura}
Notas: ${atleta.notas.join(" | ")}
Categoria: ${atleta.calculaCategoria()}
IMC: ${atleta.calculaIMC()}
Média válida: ${atleta.calculaMediaValida()}
`)
