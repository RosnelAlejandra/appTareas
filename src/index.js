import { ListaTareas, Tarea } from './classes'; //busca el index.js por defecto
import { crearHtmlTarea } from './js/componentes';

import './styles.css';


//const t = new Tarea('Hola Mundo')

export const lista = new ListaTareas();
 

lista.tareas.forEach( t => crearHtmlTarea(t));

/* 
    Tambien es puede ser:
    lista.tareas.forEach( crearHtmlTarea ) ;
*/