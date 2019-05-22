import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NasabahComponent } from './nasabah/nasabah.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NasabahComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
     FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: NasabahComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
