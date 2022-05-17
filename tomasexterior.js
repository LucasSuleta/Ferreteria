const ferreteria = {

    tomasexterior: [{
    
        id: 501,
        marca: 'Ciocca',
        modelo: 'Un Punto y Toma',
        stock: '100',
        precio: '380',
        tipo: "llaves Exterior",
        vendido: true,
        oferta: true,
    },
    {
        id: 502,
        marca: 'Ciocca',
        modelo:'Dos Puntos',
        stock: '120',
        precio: '380',
        tipo: "llaves Exterior",
        vendido: true,
        oferta: true,
    },
  
    {
        id: 503,
        marca: 'Ciocca',
        modelo:'Un Punto',
        stock: '80',
        precio: '380',
        tipo: "llaves Exterior",
        vendido: true,
        oferta: true,
    },
    {
        id: 504,
        marca: 'Ciocca',
        modelo:'Toma 20 Amper',
        stock: '80',
        precio: '280',
        tipo: "llaves Exterior",
        vendido: true,
        oferta: true,
    },
    {
        id: 505,
        marca: 'Ciocca',
        modelo:'Tres Tomas',
        stock: '80',
        precio: '280',
        tipo: "llaves Exterior",
        vendido: true,
        oferta: true,
    },

    {
        id: 506,
        marca: 'Ciocca',
        modelo:'Toma doble',
        stock: '80',
        precio: '280',
        tipo: "llaves Exterior",
        vendido: true,
        oferta: true,
    },
    {
        id: 507,
        marca: 'Ciocca',
        modelo:'Un Pulsador',
        stock: '20',
        precio: '400',
        tipo: "llaves Exterior",
        vendido: true,
        oferta: true,
    },

    {
    
        id: 508,
        marca: 'Kalop',
        modelo: 'Dos Puntos y Toma',
        stock: '100',
        precio: '380',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 509,
        marca: 'Sica',
        modelo:'Dos Puntos',
        stock: '120',
        precio: '480',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
  
    {
        id: 510,
        marca: 'Sica',
        modelo:'Tres Puntos',
        stock: '60',
        precio: '480',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 511,
        marca: 'Sica',
        modelo:'Un Punto',
        stock: '30',
        precio: '400',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 512,
        marca: 'Sica',
        modelo:'Un Punto y toma 20 amper',
        stock: '70',
        precio: '420',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },

    {
        id: 513,
        marca: 'Sica',
        modelo:'Toma doble',
        stock: '50',
        precio: '400',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 514,
        marca: 'Sica',
        modelo:'Toma 20 amper',
        stock: '30',
        precio: '410',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    
    }],

    mostrarTomasExterior: function () {
        this.tomasexterior.forEach((tomasexterior) => { console.log(tomasexterior) });
    },

    venderTomasExterior: function (id) {
        this.tomasexterior.forEach((tomasexterior) => {
            if (tomasexterior.id === id) {
                tomasexterior.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {//abreviacion de quantity cantidad de productos

        const currentTomasExterior = this.tomasexterior.find(tomasexterior => tomasexterior.id === id)
        currentTomasExterior.stock = currentTomasExterior.stock - qty;
        console.log(currentTomasExterior.stock)
    }

}
ferreteria.descuentoStock(504,20);