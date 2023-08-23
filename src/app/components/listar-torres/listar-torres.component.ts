import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Torre } from 'src/app/models/torres';
import { TorresService } from 'src/app/services/torre.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listar-torres',
  templateUrl: './listar-torres.component.html',
  styleUrls: ['./listar-torres.component.css']
})
export class ListarTorresComponent implements OnInit {
  isLoadingbd: boolean = true;

  filtroForm: FormGroup;
  torresFiltradas: Torre[] = [];
  torres: Torre[] = [];

  residencia: string = '';
  torre: string = '';
  nombre: string = '';
  estadoMensaje: string = '';

  constructor(
    private torresService: TorresService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
   ) {
    this.filtroForm = this.formBuilder.group({
      residencia: [''], // Agrega más campos según tus necesidades
      torre: [''],
      nombre: [''],
      estadoMensaje: ['']
    });
  }

  ngOnInit(): void {
    this.obtenerTorres();
  }

  obtenerTorres(): void {
    this.torresService.obtenerTorres().subscribe(
      (torres) => {
        this.torres = torres;
        this.isLoadingbd = false;
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


  enviarMensaje(torre: Torre | undefined) {

    if (!torre) {
      // Manejar el caso en que torre sea undefined
      this.toastr.error('La torre seleccionada no es válida.', 'Error');
      return; // Salir de la función si torre no está definida
    }
    const nombre = torre.nombrePersona;
    const fecha = torre.fecha;
    const nivelInfestacion = torre.nivelInfestacion;
    const recomendaciones = torre.recomendaciones;

    const mensaje = `
    *Certificado fumigación:*
    ¡Hola ${nombre}! De acuerdo al servicio realizado para el control de plagas el día *${fecha}*, evidenciamos un nivel de infestación: *${nivelInfestacion}*. 
    Recuerda la importancia de seguir con el orden y de fumigar periódicamente. 
  
    Si el técnico evidenció que no tienes infestación, ten en cuenta que es normal seguir viendo cucarachas y otros animalitos ya que estos serán solo de paso y no se quedarán en tu hogar gracias a las propiedades piretroides del veneno. 
  
    De lo contrario, si se evidenció infestación, te aconsejamos llamarnos o escribirnos para una nueva fumigación. 
    Recomendaciones: *${recomendaciones}*, si tienes alguna inquietud nos puedes escribir a este número,
    Recuerda que realizamos servicios para: fincas, apartamentos, locales, bodegas, empresas, oficinas, hospitales, transporte público, etc.
    Cordialmente: Expres Fumigaciones. ¡Feliz día! ©
    `;

    const numeroTelefono = "+57" + torre.celular;

    Swal.fire({
      title: 'Por favor continua a wpp y verifica que los datos del mensaje esten bien antes de enviarlo',
      text: 'Se enviará un mensaje de WhatsApp al cliente con la información del servicio, si envia el mensaje su estado cambia a "enviado" y no podra reversarlo.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continuar al wpp 🟢',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-cancel'
      },
      background: '#ffffff'
    }).then((result) => {
      if (result.isConfirmed) {
        if (numeroTelefono) {
          // Verificar si torre._id es válido
          if (torre._id) {
            this.torresService.marcarMensajeEnviado(torre._id).subscribe(
              () => {
                // Cambiar el estado de la torre a "enviado" aquí
                // ...
                const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(String(mensaje))}`;
                window.open(enlaceWhatsApp, '_blank');
                location.reload();
              },
              (error) => {
                console.log('Error al marcar el mensaje como enviado:', error);
              }
            );
          } else {
            this.toastr.error('No se encontró un ID válido para esta torre.', 'Error');
          }
        } else {
          this.toastr.error('No se encontró un número de teléfono válido para esta torre.', 'Error');
        }
      }
    });
  }


  eliminarTorre(torreId: string | null): void {
    if (torreId) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Lógica de eliminación aquí
          // Llama al servicio para eliminar la torre
          this.torresService.eliminarTorre(torreId).subscribe(
            () => {
              // Eliminación exitosa
              Swal.fire('Eliminada', 'La torre ha sido eliminada con éxito', 'success');
              // Actualizar la lista de torres después de eliminar
              this.obtenerTorres();
            },
            (error) => {
              console.log('Error al eliminar la torre:', error);
            }
          );
        }
      });
    }
  }

  
  
  // Ejemplo de uso
  

  

  filtrarTorres(): void {
    this.residencia = this.residencia.toLowerCase();
    this.torre = this.torre.toLowerCase();
    this.nombre = this.nombre.toLowerCase();
    this.estadoMensaje = this.estadoMensaje.toLowerCase();

      // Si no hay fecha ingresada o no es válida, aplicar los filtros sin considerar la fecha
      this.torresFiltradas = this.torres.filter((torre) => {
        const residenciaMatch = !this.residencia || torre.residencia.toLowerCase().includes(this.residencia);
        const torreMatch = !this.torre || torre.nombre.toLowerCase().includes(this.torre);
        const nombreMatch = !this.nombre || torre.nombrePersona.toLowerCase().includes(this.nombre);
        const estadoMensajeMatch = !this.estadoMensaje || torre.estadoMensaje.toLowerCase().includes(this.estadoMensaje);
      
        return residenciaMatch && torreMatch && nombreMatch && estadoMensajeMatch;
      });
    
  
    console.log('Torres filtradas:', this.torresFiltradas);
  }
  
  
  
  
  

  limpiarFiltros(): void {
    // Restablece los valores de los filtros a su estado inicial
    this.residencia = '';
    this.torre = '';
    this.nombre = '';
    this.estadoMensaje = '';
  
    // Vacía el array de torres filtradas para mostrar todas las torres
    this.torresFiltradas = [];
  }  



}
