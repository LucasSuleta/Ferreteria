const ferreteria = {

    pilas: [{
        id: 145,
        marca: 'Energizer',
        modelo: 'AA',
        unidad: '20',
        precio: '2500',
        tipo: "Blister",
        vendido: true,
        oferta: true,
    },
    {
        id: 146,
        marca: 'Energizer',
        modelo: 'AAA',
        unidad: '20',
        precio: '3900',
        tipo: "Blister",
        vendido: false,
        oferta: true,
    },
  
    {
        id: 147,
        marca: 'Eveready',
        modelo: 'C2',
        unidad: '8',
        precio: 410,
        tipo: "Blister Doble",
        stock: 4,
        vendido: true,
        oferta: true,
    },
    {
        id: 148,
        marca: 'Rayovac',
        modelo: 'AAA',
        unidad: '20',
        precio: $90,
        tipo: "Blister",
        vendido: false,
        oferta: true,
    },
    {
        id: 149,
        marca: 'Eveready',
        modelo: 'D2',
        unidad: '8',
        precio: $550,
        tipo: "Blister Doble",
        stock: 4,
        vendido: true,
        oferta: true,
    },
    {
        id: 150,
        marca: 'Energizer',
        modelo: 'Bateria 9V',
        unidad: '1',
        precio: 585,
        tipo: "Blister",
        stock: 50,
        vendido: true,
        oferta: true,
    }],

    mostrarPilas: function () {
        this.pilas.forEach((pilas) => { console.log(pilas) });
    },

    venderPilas: function (id) {
        this.pilas.forEach((pilas) => {
            if (pilas.id === id) {
                pilas.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {//abreviacion de quantity cantidad de productos

        const currentPila = this.pilas.find(pila => pila.id === id)
        currentPila.stock = currentPila.stock - qty;
        console.log(currentPila.stock)
    }

}
ferreteria.descuentoStock(150,10);



