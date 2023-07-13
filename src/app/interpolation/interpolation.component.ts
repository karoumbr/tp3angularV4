import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  titre:string="Interpolation";
  nom:string="KARIM";
  age:number=20;

  infos(){
    return this.nom + " a pour âge " + this.age +" ans.";
    }

}
