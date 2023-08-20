// models/servicio.model.ts
export class Servicio { // Cambiar el nombre de la interfaz
    _id?: string | null;
    nombreNegocio: string;
    direccion: string;
    fecha: Date;
    tipoServicio: string;
    precio: number;

    constructor(nombreNegocio: string, direccion: string, fecha: Date, tipoServicio: string, precio: number ){
      this.nombreNegocio = nombreNegocio;
      this.direccion = direccion;
      this.fecha = fecha;
      this.tipoServicio = tipoServicio;
      this.precio = precio;
  }
}
  