import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad:number = 45;

    get nombreCapitalizado(): string{ // propiedad procesada
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        // back stick para poner string
        return ` ${this.nombre} - ${this.edad}`;
    }
    cambiarNombre(): void {
         this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 23;
    }
}