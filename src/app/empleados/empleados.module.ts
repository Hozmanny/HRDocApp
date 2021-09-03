import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEmpleadoComponent } from './pages/agregar-empleado/agregar-empleado.component';
import { BuscarEmpleadoComponent } from './pages/buscar-empleado/buscar-empleado.component';
import { VerEmpleadoComponent } from './pages/ver-empleado/ver-empleado.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoEmpleadosComponent } from './pages/listado-empleados/listado-empleados.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';



@NgModule({
  declarations: [
    AgregarEmpleadoComponent,
    BuscarEmpleadoComponent,
    VerEmpleadoComponent,
    HomeComponent,
    ListadoEmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
