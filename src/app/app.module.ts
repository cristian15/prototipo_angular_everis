import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ReporteComponent } from './components/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    PrincipalComponent,
    BienvenidaComponent,
    InicioComponent,
    ReportesComponent,
    CategoriaComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
