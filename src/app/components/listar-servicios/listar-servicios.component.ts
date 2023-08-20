import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicios';
import { ServiciosService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.css']
})
export class ListarServiciosComponent implements OnInit {

  servicios: Servicio[] = [];

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    this.serviciosService.obtenerServicios().subscribe(
      (servicios) => {
        this.servicios = servicios;
      },
      (error) => {
        console.log('Error al obtener los servicios:', error);
      }
    );
  }

}
