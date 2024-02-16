import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { CeremoniaComponent } from './ceremonia/ceremonia.component';
import { FiestaComponent } from './fiesta/fiesta.component';
import { ContadorComponent } from './contador/contador.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PresentacionComponent,
    CeremoniaComponent,
    FiestaComponent,
    ContadorComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
