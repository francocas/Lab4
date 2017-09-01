import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { AdivinarNumComponent } from './adivinar-num/adivinar-num.component';
//import { ClassComponent } from './class/class.component';
import { AdivinaElNumeroComponent } from './adivina-el-numero/adivina-el-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    /*AdivinarNumComponent,
    AdivinarNumComponent,
    AdivinarNumComponent,
    ClassComponent,
    ClassComponent,*/
    AdivinaElNumeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
