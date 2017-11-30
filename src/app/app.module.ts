import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModelFormComponent } from './components/modelform.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ModelFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
