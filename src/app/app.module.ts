import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarServiciosComponent } from './components/listar-servicios/listar-servicios.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModuloAdminComponent } from './components/modulo-admin/modulo-admin.component';
import { CommonModule } from '@angular/common';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';

@NgModule({
  declarations: [	
    AppComponent,
    CrearProductoComponent,
    CrearServicioComponent,
    ListarProductosComponent,
      NavBarComponent,
      HomeComponent,
      FooterComponent,
      ModuloAdminComponent,
      ListarServiciosComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
