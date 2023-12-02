import { ObserverProducto } from "./ObserverProducto";
import { ObserverCliente } from "./ObserverCliente";

export class Producto implements ObserverProducto {
  private nombre: string;
  private precio: number;
  private observadores: ObserverCliente[] = [];

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }

  getNombre(): string {
    return this.nombre;
  }

  getPrecio(): number {
    return this.precio;
  }

  suscribir(observer: ObserverCliente): void {
    this.observadores.push(observer);
  }

  desuscribir(observer: ObserverCliente): void {
    this.observadores = this.observadores.filter(obs => obs !== observer);
  }

  notificar(): void {
    this.observadores.forEach(observer => {
      observer.actualizar(this.nombre, this.precio);
    });
  }

  cambiarPrecio(nuevoPrecio: number): void {
    if (nuevoPrecio < this.precio) {
      this.precio = nuevoPrecio;
      this.notificar(); 
    }
  }
}