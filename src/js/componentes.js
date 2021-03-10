import { lista } from "..";
import { ListaTareas, Tarea } from "../classes";

const divLista = document.querySelector('.todo-list');
const textInput = document.querySelector('#nuevaTarea');
const limpiarCompletados = document.querySelector('.clear-completed');

const filters = document.querySelector('.filters');
const filtros = document.querySelectorAll('.filtro');

export const crearHtmlTarea = ( tarea )=>{

    const htmlTarea = `
                <li class="${ (tarea.completado) ? 'completed' : ''  }" data-id="${ tarea.id } ">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (tarea.completado) ? 'checked' : ''  } >
							<label> ${tarea.tarea} </label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
    `
    //creamos el div para retornar el li 
    const div = document.createElement('div');
    div.innerHTML = htmlTarea;
    divLista.append( div.firstElementChild )


}

textInput.addEventListener('keyup',(event)=>{
    const enter = event.keyCode;
    const value = event.target.value;

    if(enter === 13 && value.length > 0 ){
        const tarea = new Tarea( value );
        lista.nuevaTarea( tarea );
        crearHtmlTarea( tarea );
        textInput.value='';
    }

});


divLista.addEventListener('click',( { target } )=>{

    //verificamos que elemeto se realizo el click
    const elemento = target.localName; // input, label , button

    //para ir a los elementos superiores 
    const superElemento = target.parentElement.parentElement; //por que el <li data-id="122343" ></li>

    //tomamos el atributo del elemento
    const tareaID = superElemento.getAttribute('data-id')

    
    switch (elemento) {
        case 'input': //completar la tarea
                lista.completarTarea( tareaID );
                superElemento.classList.toggle('completed');
            break;
        case 'button': 
            lista.borrarTarea( tareaID );
            //eliminamos del html
            divLista.removeChild( superElemento )
            break; 
        default:
                break;
    }
            
    //console.log(elemento, superElemento, tareaID);
});



limpiarCompletados.addEventListener( 'click',( { target } )=>{
    lista.borrarCompletados();
    //eliminar del html de abajo de hacia arriba
    for (let i = divLista.children.length -1 ; i >= 0 ; i--) {
        const element = divLista.children[i];
        (element.classList.contains('completed'))  && divLista.removeChild( element )
    }

});


filters.addEventListener('click', (e)=>{
    const filtro = e.target.text;

    filtros.forEach( e => e.classList.remove('selected'));
    e.target.classList.add('selected')

    for (const e of divLista.children) {

        e.classList.remove('hidden');
        const completada = e.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                        (completada) && e.classList.add('hidden')
                break;
            case 'Completados':
                        (!completada) && e.classList.add('hidden')
                break;
            default:
                break;
        }
    }
})
