import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Torre } from 'src/app/models/torres';
import { TorresService } from 'src/app/services/torre.service';

@Component({
  selector: 'app-listar-torres',
  templateUrl: './listar-torres.component.html',
  styleUrls: ['./listar-torres.component.css']
})
export class ListarTorresComponent implements OnInit {

  torres: Torre[] = [];

  constructor(private torresService: TorresService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerTorres();
  }

  obtenerTorres(): void {
    this.torresService.obtenerTorres().subscribe(
      (torres) => {
        this.torres = torres;
      },
      (error) => {
        console.log('Error al obtener las torres:', error);
      }
    );
  }

  editarTorre(torreId: string | null): void {
    if (torreId !== null) {
      console.log(torreId)
      this.router.navigate(['/editar-torre', torreId]);
    }
  }


  enviarMensaje(torreId: string | null) {

  }

  eliminarTorre(torreId: string | null): void {
    if (torreId) {
      if (confirm('¿Estás seguro de que deseas eliminar esta torre?')) {
        this.torresService.eliminarTorre(torreId).subscribe(
          () => {
            // Eliminación exitosa
            this.toastr.success('Torre eliminada con éxito!', 'Torre eliminada');
            // Actualizar la lista de torres después de eliminar
            this.obtenerTorres();
          },
          (error) => {
            console.log('Error al eliminar la torre:', error);
          }
        );
      }
    }
  }



}
