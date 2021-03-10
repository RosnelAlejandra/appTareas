import { Tarea } from "./tarea";

export class ListaTareas {

    constructor(){
       // this.tareas = [];
       this.cargarLocalStorage();
 
    }

    nuevaTarea(tarea){
        this.tareas.push(tarea);
        this.guardarLocalStorage();
    }
    
    borrarTarea( id ){
        this.tareas = this.tareas.filter( f => f.id != id);
        this.guardarLocalStorage();
    }

    completarTarea( id ){

        for (const tarea of this.tareas) {
            if( Number(tarea.id) === Number(id) ){
                tarea.completado = !tarea.completado;
                this.guardarLocalStorage();
                break;
            }
        }
        
    }

    borrarCompletados(){
        this.tareas = this.tareas.filter( f => f.completado == false);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        console.log(this.tareas);
        localStorage.setItem('tareas', JSON.stringify( this.tareas ) )
    }

    cargarLocalStorage(){
        //verificamos si existe la llave 
        ( localStorage.getItem('tareas') )
            ?  this.tareas = JSON.parse(localStorage.getItem('tareas')) 
            :  this.tareas = [];

    console.log(this.tareas);
        //creamos instancias para recuperar los metodos de la clase Tareas
        this.tareas = this.tareas.map( obj => Tarea.fromJson(obj) );

    }


}