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
    recomendaciones: ''
  };

  constructor(
    private torresService: TorresService,
    private toastr: ToastrService,
    private router: Router) {}

  ngOnInit(): void {}

  crearTorre(): void {
    this.torresService.crearTorre(this.nuevaTorre).subscribe(
      (torre) => {
        console.log('Nueva torre creada:', torre);
        this.toastr.success('Torre registrada con éxito!', 'Torre registrada');
        this.limpiarFormulario();
        this.nuevaTorre = {
          residencia: '',
          nombre: '',
          apto: '',
          fecha: new Date(),
          nombrePersona: '',
          celular: '',
          nivelInfestacion: '',
          recomendaciones: ''
        };
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
      recomendaciones: ''
    };
  }

  verRegistros(): void {

    this.router.navigate(['/listar-torres']); 
  }
}
