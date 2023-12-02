import { ObserverCliente } from "./ObserverCliente";

export class Cliente implements ObserverCliente {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  actualizar(nombreProducto: string, nuevoPrecio: number): void {
    console.log(`[${this.nombre}] Notificación: El precio del producto "${nombreProducto}" ha bajado a ${nuevoPrecio}`);
  }
}