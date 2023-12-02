import { ObserverCliente } from "./ObserverCliente";

export interface ObserverProducto {
  suscribir(observer: ObserverCliente): void;
  desuscribir(observer: ObserverCliente): void;
  notificar(): void;
}