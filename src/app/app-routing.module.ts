import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { HomeComponent } from './components/home/home.component';

// componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ModuloAdminComponent } from './components/modulo-admin/modulo-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'listar-producto', component: ListarProductosComponent},
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: 'modulo-admin', component: ModuloAdminComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
