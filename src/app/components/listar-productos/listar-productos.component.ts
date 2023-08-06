import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  searchTerm: string = '';

  listProductos: Producto[] = [];
  
  constructor(
        private _productoService: ProductoService,
        private toastr: ToastrService,
        private changeDetectorRef: ChangeDetectorRef
        ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  onSearch() {
    console.log("VERIFICANDO VALOR = " + this.searchTerm);
    this._productoService.getProductos(this.searchTerm).subscribe(
      data => {
        console.log(data);
        this.listProductos = data;
        this.changeDetectorRef.detectChanges();
      },
      error => {
        console.log(error);
      }
    );
  }
  

  obtenerProductos() {
    this._productoService.getProductos(this.searchTerm).subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(id: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar este producto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirmó la eliminación, llamar al servicio para eliminar el producto
        this._productoService.eliminarProducto(id).subscribe(data => {
          this.toastr.error('Cliente eliminado con éxito!', 'Cliente Eliminado');
          this.obtenerProductos();
        }, error => {
          console.log(error);
        });
      }
    });
  }

}
