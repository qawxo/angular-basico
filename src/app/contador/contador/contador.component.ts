import {Component} from '@angular/core';


@Component({
    selector : 'app-contador',
    template : `
        <h1>{{titulo}}</h1>

        <h2>La Base es: <strong>{{base}}</strong> </h2>

        <button (click)="acumular(base);"> + {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base);"> - {{base}}</button>
    `
})
export class ContadorComponent{ // el export es para usarlo en otro lugar

    titulo : string = 'Contador App'; // nombre del proyecto
    numero:number = 0;
    base:number = 5;

    acumular(valor:number){
        this.numero += valor;// hacemos referencia a la propiedad de la clase con this
    }
}