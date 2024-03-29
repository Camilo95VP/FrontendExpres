import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { HomeComponent } from './components/home/home.component';

// componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarServiciosComponent } from './components/listar-servicios/listar-servicios.component';
import { ModuloAdminComponent } from './components/modulo-admin/modulo-admin.component';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { ServiciosTorresComponent } from './components/serviciosTorres/serviciosTorres.component';
import { ListarTorresComponent } from './components/listar-torres/listar-torres.component';
import { EditarTorreComponent } from './components/editar-torre/editar-torre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'crear-servicio', component: CrearServicioComponent },
  { path: 'listar-producto', component: ListarProductosComponent},
  { path: 'listar-servicio', component: ListarServiciosComponent},
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: 'servicio-torres', component: ServiciosTorresComponent },
  { path: 'modulo-admin', component: ModuloAdminComponent},
  { path: 'listar-torres', component: ListarTorresComponent},
  { path: 'editar-torre/:id', component: EditarTorreComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
