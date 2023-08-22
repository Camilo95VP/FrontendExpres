import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Torre } from 'src/app/models/torres';
import { TorresService } from 'src/app/services/torre.service';

@Component({
  selector: 'app-serviciosTorres',
  templateUrl: './serviciosTorres.component.html',
  styleUrls: ['./serviciosTorres.component.css']
})
export class ServiciosTorresComponent implements OnInit {
  nuevaTorre: Torre = {
    residencia: '',
    nombre: '',
    apto: '',
    fecha: new Date(),
    nombrePersona: '',
    celular: '',
    nivelInfestacion: '',
    recomendaciones: '',
    estadoMensaje: '',
  };

  constructor(
    private torresService: TorresService,
    private toastr: ToastrService,
    private router: Router) {}

  ngOnInit(): void {}

  crearTorre(): void {
    this.torresService.crearTorre(this.nuevaTorre).subscribe(
      (torre) => {
        console.log('Nuevo servicio creado:', torre);
        this.toastr.success('Servicio registrado con éxito!', 'Servicio registrado');
        this.limpiarFormulario();
        this.nuevaTorre = {
          residencia: '',
          nombre: '',
          apto: '',
          fecha: new Date(),
          nombrePersona: '',
          celular: '',
          nivelInfestacion: '',
          recomendaciones: '',
          estadoMensaje: '',
        };
        this.router.navigate(['/listar-torres']); 
        console.log("fecha nueva torre:" + this.nuevaTorre.fecha);
      },
      (error) => {
        console.log('Error al crear la torre:', error);
      }
    );
  }

  limpiarFormulario(): void {
    this.nuevaTorre = {
      residencia: '',
      nombre: '',
      apto: '',
      fecha: new Date(),
      nombrePersona: '',
      celular: '',
      nivelInfestacion: '',
      recomendaciones: '',
      estadoMensaje: '',
    };
  }

  verRegistros(): void {
    this.router.navigate(['/listar-torres']); 
  }
}
