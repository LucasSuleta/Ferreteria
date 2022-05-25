const ferreteria = {

    aerosol: [{
    
        id: 1100,
        marca: 'Kuwait',
        color:"Negro",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '25',
        precio: '550',
        tipo: "240 Cm3",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1101,
        marca: 'Kuwait',
        color:"Negro Mate",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '30',
        precio: '550',
        tipo: "240 Cm3",  
        vendido: true,
        oferta: true,
    },
  
    {
        id: 1102,
        marca: 'Kuwait',
        color:"Negro Satinado",
        modelo: 'Aerosol Esmalte Sintetico',
        stock: '25',
        precio: '550',
        tipo: "240 Cm3",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1103,
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

    mostrarAerosol: function () {
        this.aerosol.forEach((aerosol) => { console.log(aerosol) });
    },

    venderAerosol: function (id) {
        this.aerosol.forEach((aerosol) => {
            if (aerosol.id === id) {
                aerosol.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {

        const currentAerosol = this.aerosol.find(aerosol => aerosol.id === id)
        currentAerosol.stock = currentAerosol.stock - qty;
        console.log(currentAerosol.stock)
    }

}
ferreteria.descuentoStock(1100,10);