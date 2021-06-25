import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Thor','Hulk'];
  heroeBorrado:string = '';

  borrarHeroe(){
    
    this.heroeBorrado =this.heroes.pop() || ""; // es para que devuelva string no undefinided
    console.log('Borrado:',this.heroeBorrado);   
  }
}
