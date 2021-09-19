import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Nuevas importaciones
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AddMedicamentoComponent } from './components/add-medicamento/add-medicamento.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    //Nuevos imports
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
