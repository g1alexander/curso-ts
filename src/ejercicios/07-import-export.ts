import { impuesto, Producto } from "./06-destructuracion-funciones";

const carritoCompras: Producto[] = [
  {
    marca: "Samgung",
    precio: 200,
  },
  {
    marca: "Iphone",
    precio: 800,
  },
];

const [total, isv] = impuesto(carritoCompras);

console.log("total", total);
console.log("isv", isv);
