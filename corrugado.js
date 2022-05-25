const ferreteria = {

    corrugado: [{
    
        id: 1300,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "5/8",
        stock: '10',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1301,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "3/8",
        stock: '30',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
  
    {
        id: 1302,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "7/8",
        stock: '25',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1303,
        marca: 'Kuwait',
        color:"Blanco",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '30',
        precio: '550',
        tipo: "240 Cm3",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1104,
        marca: 'Kuwait',
        color:"Blanco Mate",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '30',
        precio: '550',
        tipo: "240 Cm3",  
        vendido: true,
        oferta: true,
    },

    {
        id: 1105,
        marca: 'Kuwait',
        color:"Blanco Satinado",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '30',
        precio: '550',
        tipo: "240 Cm3",  
        vendido: true,
        oferta: true,
    },

    {
        id: 1106,
        marca: 'Kuwait',
        color:"Negro",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '35',
        precio: '850',
        tipo: "440 Cm3",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1107,
        marca: 'Kuwait',
        color:"Negro Mate",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '30',
        precio: '850',
        tipo: "440 Cm3",  
        vendido: true,
        oferta: true,
    },

    {
        id: 1108,
        marca: 'Kuwait',
        color:"Negro Satinado",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '25',
        precio: '850',
        tipo: "440 Cm3",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1109,
        marca: 'Kuwait',
        color:"Blanco",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '30',
        precio: '850',
        tipo: "440 Cm3",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1110,
        marca: 'Kuwait',
        color:"Blanco Mate",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '30',
        precio: '850',
        tipo: "440 Cm3",  
        vendido: true,
        oferta: true,
    },

    {
        id: 1111,
        marca: 'Kuwait',
        color:"Blanco Satinado",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '30',
        precio: '850',
        tipo: "440 Cm3",  
        vendido: true,
        oferta: true,
    },
{

    id: 1112,
    marca: 'Kuwait',
    color:"Rojo",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '25',
    precio: '550',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,
},
{
    id: 1113,
    marca: 'Kuwait',
    color:"Bermellon",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '30',
    precio: '550',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,
},

{
    id: 1114,
    marca: 'Kuwait',
    color:"Azul Marino",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '25',
    precio: '550',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,
},
{
    id: 1115,
    marca: 'Kuwait',
    color:"Verde Ingles",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '30',
    precio: '550',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,
},
{
    id: 1116,
    marca: 'Kuwait',
    color:"Barniz",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '30',
    precio: '550',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,
},

{
    id: 1117,
    marca: 'Kuwait',
    color:"Metalizado Aluminio",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '30',
    precio: '650',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,
},

{
    id: 1118,
    marca: 'Kuwait',
    color:"Metalizado Oro",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '20',
    precio: '650',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,
},
{
    id: 1119,
    marca: 'Kuwait',
    color:"Metalizado Bronce",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '30',
    precio: '650',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,
},

{
    id: 1120,
    marca: 'Kuwait',
    color:"Gris Espacial",
    modelo: 'Aerosol Esmalte Sintetico',
    stock: '25',
    precio: '550',
    tipo: "240 Cm3",  
    vendido: true,
    oferta: true,

}],

    mostrarCorrugado: function () {
        this.corrugado.forEach((corrugado) => { console.log(corrugado) });
    },

    venderCorrugado: function (id) {
        this.corrugado.forEach((corrugado) => {
            if (corrugado.id === id) {
                corrugado.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {

        const currentCorrugado = this.corrugado.find(corrugado => corrugado.id === id)
        currentCorrugado.stock = currentCorrugado.stock - qty;
        console.log(currentCorrugado.stock)
    }

}
ferreteria.descuentoStock(1300,2);