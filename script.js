
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
        resultado = precios.find(componente => componente[0] === componentes[i]);
        console.log(resultado)
        if (!resultado) throw new Error ("El componente no existe.");
        // if(componente[0] === componentes[0]) throw new Error ("El existe.")
        sumaComponentes += resultado[1];
    }
    return sumaComponentes
}


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