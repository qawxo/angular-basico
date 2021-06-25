import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ // visible fuera de este modulo, publico
        ListadoComponent
    ],
    imports:[ // van modulos
        CommonModule // es para usar *ngIf , * ngFor
    ]

})

export class HeroesModule {

}