import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ReportesComponent } from './components/reportes/reportes.component';


const routes: Routes = [
  {path:'principal', component:PrincipalComponent ,
      children:[
        {path:'reportes', component:ReportesComponent, 
          children:[
            {path:'', component:ReporteComponent},
            {path:'categoria', component:CategoriaComponent}
            ]},
        {path:'bienvenida', component:BienvenidaComponent},
        {path:'', component:BienvenidaComponent},
      ]
  },
  { path:'', component:InicioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
