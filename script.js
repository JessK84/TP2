
const sucursales = [ 'Centro' , 'Caballito' ];
const vendedoras = ["Ada" , "Grace" , "Hedy" , "Sheryl"];

const ventas = [
  [ 100000000 , 4 , 2 , 2019 , 'Grace' , 'Centro' , 
  [ 'Monitor GPRS 3000' ,'Motherboard ASUS 1500' ] 
],
  [ 100000001 , 1 , 1 , 2019 , 'Ada' , 'Centro' , 
  [ 'Monitor GPRS 3000' , 'Motherboard ASUS 1500'] 
],
  [ 100000002 , 2 , 1 , 2019 , 'Grace' , 'Caballito' , 
  [ 'Monitor ASC 543' , 'Motherboard MZI' , 'HDD Toyiva' ] 
],
  [ 100000003 , 10 , 1 , 2019 , 'Ada' , 'Centro' , 
  [ 'Monitor ASC 543' , 'Motherboard ASUS 1200' ] 
],
  [ 100000004 , 12 , 1 , 2019 , 'Grace' , 'Caballito' , 
  [ 'Monitor GPRS 3000' , 'Motherboard ASUS 1200' ] 
],
  [ 100000005 , 21 , 3 , 2019 , 'Hedy' , 'Caballito' , 
  [ 'Monitor ASC 543' , 'Motherboard ASUS 1200' , 'RAM Quinston' ] 
],
  ]

const precios = [
  [ 'Monitor GPRS 3000' , 200 ],
  [ 'Motherboard ASUS 1500' , 120 ],
  [ 'Monitor ASC 543' , 250 ],
  [ 'Motherboard ASUS 1200' , 100 ],
  [ 'Motherboard MZI' , 30 ],
  [ 'HDD Toyiva' , 90 ],
  [ 'HDD Wezter Dishital' , 75 ],
  [ 'RAM Quinston' , 110 ],
  [ 'RAM Quinston Fury' , 230 ]
];


const precioMaquina = componentes => { 
  let resultado = 0;
  let sumaComponentes = 0;

  for(let i = 0; i < componentes.length; i++){
      if(componentes[i] === Number) throw new Error ("El componente no existe.");
      resultado = precios.find(componente => componente[0] === componentes[i]);
      if(!resultado) throw new Error ("El componente no existe.");      
      sumaComponentes += resultado[1];
  }
  return sumaComponentes
}

const mejorVendedora = () => {
  let nombreDeVendedora = "";
  let mayor = 0;
  for (let i = 0; i < vendedoras.length; i++) {
    if(mayor < ventasVendedora(vendedoras[i])) {
       mayor = ventasVendedora(vendedoras[i]);
       nombreDeVendedora = vendedoras[i];
    }  
  }
    return nombreDeVendedora
}

const componenteMasVendido = () => {
   let nombreDelComponente = [];
  for (let i = 0; i < ventas.length; i++) {
    let venta = ventas[i].slice(6).flat()
    nombreDelComponente.push(venta)  
  }
  const vendidos = (cuentaParcial, componente) => {
     cuentaParcial[componente] = cuentaParcial[componente] + 1 || 1
     return cuentaParcial
   }
  
   const orden = nombreDelComponente.flat().reduce(vendidos, [])
 
    // const resultado = orden.slice(0, 1)
    // console.log(resultado)
}

const ventasSucursal = (sucursal) => {
  const filtrarPorSucursal = ventas.filter(venta => venta.includes(sucursal));
  console.log(filtrarPorSucursal)

  let porSucursal = [];
    
  for (let i = 0;  i < filtrarPorSucursal.length; i++) {
      let obtenerComponentes = filtrarPorSucursal[i].splice(6);
      console.log(obtenerComponentes)
      porSucursal.push(obtenerComponentes.flat());  
   }
   return precioMaquina(porSucursal.flat());
}

// const componenteMasVendido = () => {
//   let mayor = 0;
//   let componenteDeMasVentas=[];
//   precios.forEach(componente => {
//     let numero = cantidadVentasComponente(componente[0]);
//     // console.log(numero)
//     if(numero >= mayor) {
//       mayor = numero;
//       console.log(numero)
//       let resultado = componente[0];
//       console.log(resultado)
//       componenteDeMasVentas.push(resultado)
//     }
//   });
//   return mayor
// }


const cantidadVentasComponente = componente => {
  let totalVentas = 0;
  for (let i = 0; i < ventas.length; i++) {
      let venta = ventas[i].flat();
      if(venta.includes(componente)) {
        totalVentas+= 1;
      } 
  }
  return totalVentas
}




const ventasVendedora = nombre => {
  const filtrarPorVendedora = ventas.filter(vendedora => vendedora.includes(nombre));

  let losComponentes =[];
    
  for (let i = 0;  i < filtrarPorVendedora.length; i++) {
    let obtenerComponentes = filtrarPorVendedora[i].slice(6);
    losComponentes.push(obtenerComponentes.flat()); 
   }
   return precioMaquina(losComponentes.flat()); // flat hace un único array y permite hacer la operación de ventas.
} 


const obtenerIdVenta = () => {
  let maximo = 999999999;
  let minimo = 100000000;
  let idAleatorio = Math.random() * (maximo - minimo) + minimo;
    
  return Math.round(idAleatorio);
}
const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes) => {
  let nuevaVenta = [];
  
  nuevaVenta.push(obtenerIdVenta(), dia, mes, anio, vendedora, sucursal, componentes);
  ventas.push(nuevaVenta);

  return nuevaVenta
}

const ventaPromedio = () => {
  let porComponentes =[];

  for (let i = 0;  i < ventas.length; i++) {
    let obtenerComponentes = ventas[i].slice(6);
    // console.log(obtenerComponentes)
    porComponentes.push(obtenerComponentes.flat()); 
   } 
   const ventasTotales = precioMaquina(porComponentes.flat()) / ventas.length;
   return Math.round(ventasTotales)
} 