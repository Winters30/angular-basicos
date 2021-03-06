import { Component } from '@angular/core';


@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 45;

    obtenerNombre(): string {
        return `${this.nombre} - ${ this.edad }`;
    }

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiaNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiaEdad(): void {
        this.edad = 25;
    }


}