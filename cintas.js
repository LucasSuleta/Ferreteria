const ferreteria = {

    cintas: [{
    
        id: 1001,
        marca: 'Tacsa',
        modelo: '5 Metros',
        stock: '25',
        precio: '120',
        tipo: "Cinta Aisladora",
        color:"Negra",
        vendido: true,
        oferta: true,
    },
    {
        id: 1002,
        marca: 'Tacsa',
        modelo:'10 Metros',
        stock: '20',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Negra",
        vendido: true,
        oferta: true,
    },
  
    {
        id: 1003,
        marca: 'Tacsa',
        modelo:'10 Metros',
        stock: '20',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Blanca",
        vendido: true,
        oferta: true,
    },
    {
        id: 1004,
        marca: 'Tacsa',
        modelo:'20 Metros',
        stock: '20',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Negra",
        vendido: true,
        oferta: true,
    },
    {
        id: 1005,
        marca: 'Tacsa',
        modelo:'20 Metros',
        stock: '20',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Blanca",
        vendido: true,
        oferta: true,
    },

    {
        id: 1006,
        marca: 'Tacsa',
        modelo:'10 Metros',
        stock: '25',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Roja",
        vendido: true,
        oferta: true,
    },
    {
        id: 1007,
        marca: 'Tacsa',
        modelo:'10 Metros',
        stock: '25',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Amarilla",
        vendido: true,
        oferta: true,
    },

    {
    
        id: 1008,
        marca: 'Tacsa',
        modelo:'10 Metros',
        stock: '25',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Verde",
        vendido: true,
        oferta: true,
    },
    {
        id: 1009,
        marca: 'Tacsa',
        modelo:'10 Metros',
        stock: '25',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Azul",
        vendido: true,
        oferta: true,
    },
  
    {
        id: 1010,
        marca: 'Vinitape',
        modelo:'10 Metros',
        stock: '25',
        precio: '200',
        tipo: "Cinta Aisladora",
        color: "Negra",
        vendido: true,
        oferta: true,
    
    }],

    mostrarCintas: function () {
        this.cintas.forEach((cintas) => { console.log(cintas) });
    },

    venderCintas: function (id) {
        this.cintas.forEach((cintas) => {
            if (cintas.id === id) {
                cintas.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {//abreviacion de quantity cantidad de productos

        const currentCintas = this.cintas.find(cintas => cintas.id === id)
        currentCintas.stock = currentCintas.stock - qty;
        console.log(currentCintas.stock)
    }

}
ferreteria.descuentoStock(1002,5);