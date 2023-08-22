import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicios';
import { ServiciosService } from 'src/app/services/servicio.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {

  nuevoServicio: Servicio = {
    nombreNegocio: '',
    direccion: '',
    fecha: new Date(),
    tipoServicio: '',
    precio: 0
  };

  constructor(
    private serviciosService: ServiciosService,
    private toastr: ToastrService,
    private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  crearServicio(): void {
    this.serviciosService.crearServicio(this.nuevoServicio).subscribe(
      (servicio) => {
        console.log('Nueva venta:', servicio);
        this.toastr.success('Venta registrada con éxito!', 'Venta registrada');
        this.router.navigate(['/listar-servicio']);
        this.nuevoServicio = {
          nombreNegocio: '',
          direccion: '',
          fecha: new Date(),
          tipoServicio: '',
          precio: 0
        };
      },
      (error) => {
        console.log('Error al crear la venta:', error);
      }
    );
  }

}
