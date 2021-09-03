import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEmpleadosComponent } from './pages/listado-empleados/listado-empleados.component';
import { AgregarEmpleadoComponent } from './pages/agregar-empleado/agregar-empleado.component';
import { BuscarEmpleadoComponent } from './pages/buscar-empleado/buscar-empleado.component';
import { VerEmpleadoComponent } from './pages/ver-empleado/ver-empleado.component';
import { HomeComponent } from './pages/home/home.component';

const routes:Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListadoEmpleadosComponent },
      { path: 'add', component: AgregarEmpleadoComponent },
      { path: 'edit/:id', component: AgregarEmpleadoComponent },
      { path: 'search', component: BuscarEmpleadoComponent },
      { path: ':id', component: VerEmpleadoComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class EmpleadosRoutingModule { }
