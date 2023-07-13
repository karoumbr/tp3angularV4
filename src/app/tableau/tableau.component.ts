import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
  titre:string="1. Opérations sur un tableau";
  titre2:string="Affichage des boutons des éléments pairs du tableau";
  tab= [15, 46, 0, 89, 80];
  style:string="italic";
  curstyle:string="normal";
  btnvalue:string="italic";
  clbootstrap:string="btn btn-success";

  onMofifierStyle(){
  console.log(this.clbootstrap);
  if(this.curstyle== "normal"){
    this.curstyle= "italic";
    this.btnvalue = "normal";
    this.clbootstrap="btn btn-success"
  } else{
    this.curstyle= "normal";
    this.btnvalue = "italic";
    this.clbootstrap="btn btn-danger"
  }
  
}


  colorier(nb:number){
    if(nb%3==0){
        return "magenta";
    }else{
      return "blue";
    }
  }

  onAfficher(ind : number){
    console.log(ind + 1)
  }

  onPosition(ind : number){
    console.log(ind + 1)
  }
}
