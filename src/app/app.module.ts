import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from'@angular/forms';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { TableauComponent } from './tableau/tableau.component';
import { EmployeComponent } from './employe/employe.component';
import { NompersoPipe } from './nomperso.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayComponent,
    TableauComponent,
    EmployeComponent,
    NompersoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
