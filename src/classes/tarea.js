
export class Tarea {

    //va a crear de un obj una instancia de Tareas para
    //conservar los metodos 
    static fromJson({ id, tarea, completado, creado }) {

        const tempTodo = new Tarea( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); // 12836871263
        this.completado = false;
        this.creado     = new Date();

    }

    imprimir(){
        return `La tarea es ${this.tarea} y se creó el ${this.creado}`
    }



}