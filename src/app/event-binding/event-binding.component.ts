import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  titre:string="Event Binding";
  onAfficher(val:string){
    console.log(val);
  }

  onKeyPress(event :KeyboardEvent){
    console.log(event.key);
    }

}
