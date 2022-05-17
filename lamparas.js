const ferreteria = {

    lamparas: [{
    
        id: 601,
        marca: 'Lumenac',
        modelo: '5 watts',
        stock: '25',
        precio: '380',
        tipo: "Luz Fria",
        vendido: true,
        oferta: true,
    },
    {
        id: 602,
        marca: 'Lumenac',
        modelo:'9 watts',
        stock: '30',
        precio: '220',
        tipo: "Luz Calida",
        vendido: true,
        oferta: true,
    },
  
    {
        id: 603,
        marca: 'Lumenac',
        modelo:'5 watts',
        stock: '30',
        precio: '200',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 204,
        marca: 'Jeluz',
        modelo:'Un Punto',
        stock: '80',
        precio: '280',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 205,
        marca: 'Jeluz',
        modelo:'Un Punto y toma 20 amper',
        stock: '80',
        precio: '280',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },

    {
        id: 206,
        marca: 'Jeluz',
        modelo:'Toma doble',
        stock: '80',
        precio: '280',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 207,
        marca: 'Jeluz',
        modelo:'Toma 20 amper',
        stock: '20',
        precio: '400',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },

    {
        id: 208,
        marca: 'Sica',
        modelo: 'Dos Puntos y Toma',
        stock: '100',
        precio: '380',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 209,
        marca: 'Sica',
        modelo:'Dos Puntos',
        stock: '120',
        precio: '480',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
  
    {
        id: 210,
        marca: 'Sica',
        modelo:'Tres Puntos',
        stock: '60',
        precio: '480',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 211,
        marca: 'Sica',
        modelo:'Un Punto',
        stock: '30',
        precio: '400',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 212,
        marca: 'Sica',
        modelo:'Un Punto y toma 20 amper',
        stock: '70',
        precio: '420',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },

    {
        id: 213,
        marca: 'Sica',
        modelo:'Toma doble',
        stock: '50',
        precio: '400',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    },
    {
        id: 214,
        marca: 'Sica',
        modelo:'Toma 20 amper',
        stock: '50',
        precio: '410',
        tipo: "llaves Embutir",
        vendido: true,
        oferta: true,
    
    }],

    mostrarLamparas: function () {
        this.lamparas.forEach((lamparas) => { console.log(lamparas) });
    },

    venderLamparas: function (id) {
        this.lamparas.forEach((lamparas) => {
            if (lamparas.id === id) {
                lamparas.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {//abreviacion de quantity cantidad de productos

        const currentLamparas = this.lamparas.find(lamparas => lamparas.id === id)
        currentLamparas.stock = currentLamparas.stock - qty;
        console.log(currentLamparas.stock)
    }

}
ferreteria.descuentoStock(602,5);
