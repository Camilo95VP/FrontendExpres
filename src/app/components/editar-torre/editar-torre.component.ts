import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Torre } from 'src/app/models/torres';
import { TorresService } from 'src/app/services/torre.service';


@Component({
  selector: 'app-editar-torre',
  templateUrl: './editar-torre.component.html',
  styleUrls: ['./editar-torre.component.css']
})
export class EditarTorreComponent implements OnInit {

  torre: Torre = {
    nombre: '',
    apto: '',
    fecha: new Date(),
    nombrePersona: '',
    celular: '',
    nivelInfestacion: '',
    recomendaciones: '',
    residencia: '',
    estadoMensaje: '',
    tecnico: ''
  };

  constructor(
    private torresService: TorresService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute // Importar ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la torre desde la URL
    const torreId = this.route.snapshot.paramMap.get('id');
    if (torreId) {
      // Llamar al servicio para obtener los detalles de la torre
      this.torresService.obtenerTorrePorId(torreId).subscribe(
        (torre) => {
          this.torre = torre;
        },
        (error) => {
          console.log('Error al obtener los detalles de la torre:', error);
        }
      );
    }
  }

  actualizarTorre(): void {
    if (this.torre._id) {
      this.torresService.actualizarTorre(this.torre._id, this.torre).subscribe(
        (torreActualizada) => {
          console.log('Servicio actualizado:', torreActualizada);
          this.toastr.success('Servicio actualizado con éxito!', 'Torre actualizada');
          this.router.navigate(['/listar-torres']);
        },
        (error) => {
          console.log('Error al actualizar la torre:', error);
        }
      );
    }
  }

  limpiarFormulario(): void {
    this.torre = {
      residencia: '',
      nombre: '',
      apto: '',
      fecha: new Date(),
      nombrePersona: '',
      celular: '',
      nivelInfestacion: '',
      recomendaciones: '',
      estadoMensaje: '',
      tecnico: ''
    };
  }

  verRegistros(): void {

    this.router.navigate(['/listar-torres']); 
  }

}
