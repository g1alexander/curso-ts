export interface Producto {
  marca: string;
  precio: number;
}

const telefono: Producto = {
  marca: "Nokia A1",
  precio: 150,
};

const tableta: Producto = {
  marca: "Airpad",
  precio: 350,
};

export function impuesto(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
}

const productos = [telefono, tableta];

const [total, isv] = impuesto(productos);

// console.log("total", total);
// console.log("isv", isv);
