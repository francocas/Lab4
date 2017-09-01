import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/Router'
import { AppComponent } from './app.component';
//import { AdivinarNumComponent } from './adivinar-num/adivinar-num.component';
//import { ClassComponent } from './class/class.component';
import { AdivinaElNumeroComponent } from './adivina-el-numero/adivina-el-numero.component';
let miRouteo=[{path:'adivina',component:AdivinaElNumeroComponent}];
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
    HttpModule,
    RouterModule.forRoot(miRouteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
