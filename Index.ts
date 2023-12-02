import { Producto } from "./Producto";
import { Cliente } from "./Cliente";

const producto1 = new Producto('Fanta', 100);
const producto2 = new Producto('Doritos', 200);

const cliente1 = new Cliente('Alan');
const cliente2 = new Cliente('Roy');

producto1.suscribir(cliente1);
producto2.suscribir(cliente2);

producto1.cambiarPrecio(48);
producto2.cambiarPrecio(3); 
producto1.cambiarPrecio(45);
producto2.cambiarPrecio(1); 
producto2.cambiarPrecio(100);//Si el producto sube no notifica 