export default class ArrayDeNotas {

    constructor() {
        this.notas = [];
        this.inscritos = [];
    }

    inscrever(func) {
        this.inscritos.push(func)
    }

    notificar() {
        this.inscritos.forEach(func => func(this.notas))
    }

    adicionarNota(titulo, texto, categoria) {

        const nota = new Nota(titulo, texto, categoria)

        this.notas.push(nota)
    }

    apagarNotas(indice) {
        this.notas.splice(indice, 1);
    }

}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}