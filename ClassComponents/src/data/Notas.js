export default class ArrayDeNotas {

    constructor() {
        this.notas = [];
        this.inscritos = [];
    }

    inscrever(func) {
        this.inscritos.push(func)
    }

    desinscrever(func) {
        this.inscritos = this.inscritos.filter(
            oldFunc => func !== oldFunc
        )
    }

    notificar() {
        this.inscritos.forEach(func => func(this.notas))
    }

    adicionarNota(titulo, texto, categoria) {

        const nota = new Nota(titulo, texto, categoria)
        this.notas.push(nota)
        this.notificar(this.notas)
    }

    apagarNotas(indice) {
        this.notas.splice(indice, 1);
        this.notificar(this.notas)
    }

}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}