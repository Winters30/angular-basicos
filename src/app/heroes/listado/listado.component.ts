import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Goku'];
    heroeborrado = '';

    borrarHeroe():void {
      console.log('Borrando...')
      //this.heroes.splice(this.heroes.length - 1,1); //Borramos el ultimo elemento del array
      this.heroeborrado = this.heroes.shift() || ''; //Borramos el primer elemento y nos retorna un string o undefined, con || le decimos que si es undefined nos devuelva un string vacio
      
    }


}
