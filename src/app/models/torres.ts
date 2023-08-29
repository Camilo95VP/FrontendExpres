export class Torre {
  _id?: string | null;
  residencia: string; // Nueva columna
  nombre: string;
  apto: string;
  fecha: Date;
  nombrePersona: string;
  celular: string;
  nivelInfestacion: string;
  recomendaciones: string;
  estadoMensaje: string = 'sin enviar';
  tecnico: string;

  constructor(
    residencia: string, // Nueva columna
    nombre: string,
    apto: string,
    fecha: Date,
    nombrePersona: string,
    celular: string,
    nivelInfestacion: string,
    recomendaciones: string,
    estadoMensaje: string,
    tecnico: string,
  ) {
    this.residencia = residencia; // Nueva columna
    this.nombre = nombre;
    this.apto = apto;
    this.fecha = fecha;
    this.nombrePersona = nombrePersona;
    this.celular = celular;
    this.nivelInfestacion = nivelInfestacion;
    this.recomendaciones = recomendaciones;
    this.estadoMensaje = estadoMensaje;
    this.tecnico = tecnico;
  }
}
